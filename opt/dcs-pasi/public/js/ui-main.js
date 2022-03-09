//"use strict";

// Thanks to Bård Romstad for the outline of this.

const rmax = 53, // Max radius for cluster pies 
      tileServer = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      categoryField = 't', // This is the fieldname for marker category (used in the pie and legend)
      iconField = 'not-in-use', // This is the fieldname for marker icon
      popupFields = ['n', 'z']; // Pop-up will display these fields

var metadata;


function initMap() {
    console.log('initMap()');

    var markerclusters = L.markerClusterGroup({
        singleMarkerMode: true,
        maxClusterRadius: 2*rmax,
        iconCreateFunction: defineClusterIcon // Where the magic happens
      });

    var mymap = L.map('mymap').setView([56.12, -3.87], 7); // Centre on Polmaise!

    // Add basemap
    L.tileLayer(tileServer, {maxZoom: 18}).addTo(mymap);
    
    // And the empty markercluster layer
    mymap.addLayer(markerclusters);

    return [mymap, markerclusters];
}

function initMarkers(mymap, markerclusters, geojson, fitBounds) {
    console.log('initMarkers()');

    metadata = geojson.properties;
    var markers = L.geoJson(geojson, {
	    pointToLayer: defineFeature,
		onEachFeature: defineFeaturePopup
    });
    markerclusters.clearLayers(); // remove any previous, I was using:  markerclusters.eachLayer(layer => markerclusters.removeLayer(layer));
    markerclusters.addLayer(markers);
    if (fitBounds) mymap.fitBounds(markers.getBounds());

    return [mymap, markerclusters, markers];
}


//X For an individual waste-site...
//X site-name = feature.properties['9993']
function defineFeature(feature, latlng) {
  var categoryVal = feature.properties[categoryField],
    iconVal = feature.properties[iconField];
    var myClass = 'marker category-m1 icon-1'; //X it was:   'marker category-'+categoryVal+' icon-'+iconVal;
    var myIcon = L.divIcon({
        className: myClass,
        iconSize:null
    });
    return L.marker(latlng, {icon: myIcon});
}

function defineFeaturePopup(feature, layer) {
  var props = feature.properties,
      fields = metadata.fields,
      popupContent = '';

 popupContent += '<span> ' 
                    + '<span class="label">' + props['n'] + '</span> '
                    + props['z'].toLocaleString('en-GB', {maximumFractionDigits: 0}) + ' CO2e tonnes saved'
                    + '</span>';
  
  
  let s1 = props['n'];
  let s2 = props['z'].toLocaleString('en-GB', {maximumFractionDigits: 0}) + ' CO2e tonnes saved';
  var s3;
  if (s1.startsWith('Alloa')) { s3 = "img/ace-furniture.png"; }
  else if (s1.startsWith('Stirling Community')) { s3 = "img/stirling-community-food.png"; }
  else if (s1.startsWith('The Fair')) { s3 = "img/fairshare.png"; }
  else if (s1.startsWith('Stirling council')) { s3 = "img/Stirling-council-logo.png"; }
  popupContent =
`<div class="card-container">
  <div class="float-layout">
    <div class="card-image">
      <img src=${s3} width="48px" height="24px">
      <div class="card">
        <div class="card-title">${s1}</div>
        <div class="card-desc">${s2}</div>
      </div>
    </div>
  </div>
</div>`;


  popupContent = '<div class="mymap-popup">' + popupContent + '</div>';

  layer.bindPopup(popupContent, {offset: L.point(1,-2)}); 
}

function calcN(children){ //X this was:   children.length, ...i.e. simply the number of markers in cluster
    return children
            .map(child => child.feature.properties['z'])
            .reduce((acc, x) => acc + x, 0);
}

function bin(zz){
    if      (zz <       10000) return 30; 
    else if (zz <      500000) return 27;
    else if (zz <      100000) return 24; 
    else if (zz <     1000000) return 21; 
    else if (zz <     5000000) return 18; 
    else if (zz <    10000000) return 15; 
    else if (zz <    50000000) return 12; 
    else if (zz <   100000000) return  9; 
    else if (zz <   500000000) return  6; 
    else if (zz <  1000000000) return  3; 
    else                       return  0; 
}

function defineClusterIcon(cluster) {
    var children = cluster.getAllChildMarkers(),
        //X first-site-name = children[0].feature.properties['9993']
        n = children.length, // the number of markers in cluster
        zz = calcN(children), // total tonnes in the cluster
        strokeWidth = 1, //Set clusterpie stroke width
        //X Radius value will be 1 of 10-ish discrete values
        r = rmax - 2 * strokeWidth - bin(zz), //Calculate clusterpie radius...
        iconDim = (r+strokeWidth)*2, //...and divIcon dimensions (leaflet really want to know the size)
        //X My version of grouping the data...
        //X
        data = Array.from(Array(36).keys()).map(x => String("m" + x)) // manufacture the keys
                // return an array of...
                .map(key => {
                        // ...object where each object has a 'key' and a 'values' property:
                        return {key: key,
                                values: children
                                            // only the children whose tonnesIncoming contains a non-null for the key
                                            .filter(candidate => candidate.feature.properties['t'].hasOwnProperty(key))
                                            .map(original => {
                                                // return a new object whose tonnesIncoming has been narrowed w.r.t. the key
                                                // NB I'm not modifying the original object because it contains all kinds of stuff that will be used elsewhere.
                                                //    Also, (I think) what is returned here is used only in the displaying of this cluster
                                                return {feature: {
                                                            properties: {
                                                                tonnesIncoming: original.feature.properties['t'][key]}}}})}}),
        //X ...replaces:
        //X
        //X    data = d3.nest() //Build a dataset for the pie chart
        //X      .key(function(d) { return d.feature.properties[categoryField]; }) //X Group by yielding an array of pairs (key,values)
        //X      .entries(children, d3.map),
        // Bake some svg markup
        myValueFunc = d => {
                //console.log(d);
                    // A thought... might have to skew values in this function so that
                    //   even small segments are observable. The real values can still be displayed
                    //   by the myValueFuncForPathStarFuncs function.
                if (d.values)
                    return d.values.map(o => o.feature.properties.tonnesIncoming).reduce((acc, x) => acc + x, 0);
                else
                    return 0;
           },
           myValueFuncForPathStarFuncs = d => {
                           //console.log(d);
                           if (d.data.values)
                               return d.data.values.map(o => o.feature.properties.tonnesIncoming).reduce((acc, x) => acc + x, 0);
                           else
                               return 0;
                      },
        html = bakeThePie({data: data,
                            //X My version of the valueFunc...
                            //X
                            valueFunc: myValueFunc,
                            //X ...replaces:
                            //X
                            //X    valueFunc: function(d){return d.values.length;}, //X A simple count
                            strokeWidth: 1,
                            outerRadius: r,
                            innerRadius: r-15,
                            pieClass: 'cluster-pie',
                            pieLabel: n,
                            pieLabelClass: 'marker-cluster-pie-label',
                            //X Fns used to label/colour the segments (?)
                            pathClassFunc: function(d){return "category-"+d.data.key;},
                            pathTitleFunc: function(d){return metadata.fields[categoryField].lookup[d.data.key]+': '+myValueFuncForPathStarFuncs(d).toLocaleString('en-GB', {maximumFractionDigits: 0})+' CO2e tonnes saved)';}
                          }),
        // Create a new divIcon and assign the svg markup to the html property
        myIcon = new L.DivIcon({
            html: html,
            className: 'marker-cluster',
            iconSize: new L.Point(iconDim, iconDim)
        });
    //console.log("n = " + n + ", zz = " + zz + ", r = " + r);
    return myIcon;
}

// Generate a svg markup for the pie chart
function bakeThePie(options) {
    // Data and valueFunc are required
    if (!options.data || !options.valueFunc) {
        return '';
    }
    var data = options.data,
        valueFunc = options.valueFunc,
        r = options.outerRadius?options.outerRadius:28, // Default outer radius = 28px
        rInner = options.innerRadius?options.innerRadius:r-10, // Default inner radius = r-10
        strokeWidth = options.strokeWidth?options.strokeWidth:1, // Default stroke is 1
        pathClassFunc = options.pathClassFunc?options.pathClassFunc:function(){return '';}, // Class for each path
        pathTitleFunc = options.pathTitleFunc?options.pathTitleFunc:function(){return '';}, // Title for each path
        pieClass = options.pieClass?options.pieClass:'marker-cluster-pie', // Class for the whole pie
        //X The label for the whole pie is a number that is calculated to be sum of the counts in each group (?)
        pieLabel = options.pieLabel?options.pieLabel:d3.sum(data,valueFunc), // Label for the whole pie
        pieLabelClass = options.pieLabelClass?options.pieLabelClass:'marker-cluster-pie-label',// Class for the pie label

        origo = (r+strokeWidth), // Center coordinate
        w = origo*2, // Width and height of the svg element
        h = w,
        donut = d3.layout.pie(),
        arc = d3.svg.arc().innerRadius(rInner).outerRadius(r);

    // Create an svg element
    var svg = document.createElementNS(d3.ns.prefix.svg, 'svg');
    // Create the pie chart
    var vis = d3.select(svg)
        .data([data]) //X Assoc the data with the pie's SVG element. Is the data grouped here?
        .attr('class', pieClass)
        .attr('width', w)
        .attr('height', h);

    var arcs = vis.selectAll('g.arc')
        .data(donut.value(valueFunc)) //X The valueFunc will be given an x where a-site-name = x.values[0].feature.properties['9993']
                                      //X   so each x as, I think, one of the groupings that was created by the d3.nest.key() above.
        .enter().append('svg:g')
        .attr('class', 'arc')
        .attr('transform', 'translate(' + origo + ',' + origo + ')');

    arcs.append('svg:path')
        .attr('class', pathClassFunc)
        .attr('stroke-width', strokeWidth)
        .attr('d', arc)
        .append('svg:title')
        .text(pathTitleFunc); //X The pathTitleFunc will be given an x where a-grouping-key = x.data.key

    vis.append('text')
        .attr('x',origo)
        .attr('y',origo)
        .attr('class', pieLabelClass)
        .attr('text-anchor', 'middle')
        //.attr('dominant-baseline', 'central')
        /* IE doesn't seem to support dominant-baseline, but setting dy to .3em does the trick [] */
        .attr('dy','.3em')
        .text(pieLabel);

    // Return the svg-markup rather than the actual element
    return serializeXmlNode(svg);
}

function serializeXmlNode(xmlNode) {
    if (typeof window.XMLSerializer != "undefined") {
        return (new window.XMLSerializer()).serializeToString(xmlNode);
    } else if (typeof xmlNode.xml != "undefined") {
        return xmlNode.xml;
    }
    return "";
}






