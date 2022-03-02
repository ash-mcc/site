goog.provide('reagent_datatable.table_utils');
/**
 * Removes excess whitespace and converts to lowercase.
 */
reagent_datatable.table_utils.process_string_for_filtering = (function reagent_datatable$table_utils$process_string_for_filtering(s){
var G__32133 = s;
var G__32133__$1 = (((G__32133 == null))?null:clojure.string.trim(G__32133));
var G__32133__$2 = (((G__32133__$1 == null))?null:cljs.core.not_empty(G__32133__$1));
var G__32133__$3 = (((G__32133__$2 == null))?null:clojure.string.lower_case(G__32133__$2));
if((G__32133__$3 == null)){
return null;
} else {
return clojure.string.replace(G__32133__$3,/\s+/," ");
}
});
reagent_datatable.table_utils.reset_pagination = (function reagent_datatable$table_utils$reset_pagination(table){
return cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
});
reagent_datatable.table_utils.column_sort = (function reagent_datatable$table_utils$column_sort(table_atom,column_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32140_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(reagent_datatable.table_utils.reset_pagination(p1__32140_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"sort","sort",953465918)], null),(function (p__32145){
var vec__32146 = p__32145;
var curr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32146,(0),null);
var order_bool = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32146,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_key,column_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_key,cljs.core.not(order_bool)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,true], null);
}
}));
}));
});
reagent_datatable.table_utils.column_sort_value = (function reagent_datatable$table_utils$column_sort_value(table){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"sort","sort",953465918)], null));
});
reagent_datatable.table_utils.column_filter_value = (function reagent_datatable$table_utils$column_filter_value(table,column_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366),column_key], null));
});
reagent_datatable.table_utils.column_filter_values = (function reagent_datatable$table_utils$column_filter_values(table){
var filter_input = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,medley.core.remove_vals(cljs.core.nil_QMARK_,medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(reagent_datatable.table_utils.process_string_for_filtering,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366)], null)))));
var select_input = medley.core.filter_vals(cljs.core.seq,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057)], null)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filter_input,select_input], 0));
});
reagent_datatable.table_utils.column_filter_on_change = (function reagent_datatable$table_utils$column_filter_on_change(evt,table_atom,column_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32158_SHARP_){
return cljs.core.assoc_in(reagent_datatable.table_utils.reset_pagination(p1__32158_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366),column_key], null),evt.target.value);
}));
});
reagent_datatable.table_utils.column_filter_reset = (function reagent_datatable$table_utils$column_filter_reset(var_args){
var G__32165 = arguments.length;
switch (G__32165) {
case 2:
return reagent_datatable.table_utils.column_filter_reset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_datatable.table_utils.column_filter_reset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_datatable.table_utils.column_filter_reset.cljs$core$IFn$_invoke$arity$2 = (function (table_atom,column_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(table_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_key], 0));
}));

(reagent_datatable.table_utils.column_filter_reset.cljs$core$IFn$_invoke$arity$3 = (function (table_atom,column_key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32163_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__32163_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366)], null),cljs.core.dissoc,column_key),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057),column_key], null),cljs.core.disj,value);
}));
}));

(reagent_datatable.table_utils.column_filter_reset.cljs$lang$maxFixedArity = 3);

reagent_datatable.table_utils.column_filters_QMARK_ = (function reagent_datatable$table_utils$column_filters_QMARK_(table,column_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"column-filters?","column-filters?",-1445436769)], null),column_key);
});
reagent_datatable.table_utils.column_select_input_QMARK_ = (function reagent_datatable$table_utils$column_select_input_QMARK_(table,column_key){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"column-filters","column-filters",70037645),column_key], null)));
});
reagent_datatable.table_utils.column_select_filter_options = (function reagent_datatable$table_utils$column_select_filter_options(table,column_key){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,column_key);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"data","data",-232669377)], null))));
});
reagent_datatable.table_utils.column_select_filter_on_change = (function reagent_datatable$table_utils$column_select_filter_on_change(table_atom,value,column_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (table){
var curr_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057),column_key,value], null));
if(cljs.core.seq(curr_value)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(reagent_datatable.table_utils.reset_pagination(table),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057),column_key], null),cljs.core.disj,curr_value);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(reagent_datatable.table_utils.reset_pagination(table),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057),column_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),value);
}
}));
});
reagent_datatable.table_utils.column_select_filter_value = (function reagent_datatable$table_utils$column_select_filter_value(table,column_key,value){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057),column_key,value], null),false);
});
reagent_datatable.table_utils.column_filter_reset_all = (function reagent_datatable$table_utils$column_filter_reset_all(table_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (table){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(reagent_datatable.table_utils.reset_pagination(table),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.dissoc,new cljs.core.Keyword(null,"filter-select","filter-select",1022978057)),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.dissoc,new cljs.core.Keyword(null,"filter-input","filter-input",-449277366));
}));
});
reagent_datatable.table_utils.search_all_value = (function reagent_datatable$table_utils$search_all_value(table){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"search-all","search-all",792828853)], null));
});
reagent_datatable.table_utils.search_all_on_change = (function reagent_datatable$table_utils$search_all_on_change(evt,table_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32180_SHARP_){
return cljs.core.assoc_in(reagent_datatable.table_utils.reset_pagination(p1__32180_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"search-all","search-all",792828853)], null),evt.target.value);
}));
});
reagent_datatable.table_utils.search_all_reset = (function reagent_datatable$table_utils$search_all_reset(table_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32183_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(reagent_datatable.table_utils.reset_pagination(p1__32183_SHARP_),new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.dissoc,new cljs.core.Keyword(null,"search-all","search-all",792828853));
}));
});
reagent_datatable.table_utils.block_filter_values = (function reagent_datatable$table_utils$block_filter_values(p__32186){
var map__32187 = p__32186;
var map__32187__$1 = cljs.core.__destructure_map(map__32187);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.second),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366).cljs$core$IFn$_invoke$arity$1(columns)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (col,p__32192){
var vec__32193 = p__32192;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(0),null);
var filter_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,col,(function (){var iter__4652__auto__ = (function reagent_datatable$table_utils$block_filter_values_$_iter__32196(s__32197){
return (new cljs.core.LazySeq(null,(function (){
var s__32197__$1 = s__32197;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32197__$1);
if(temp__5753__auto__){
var s__32197__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32197__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__32197__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__32199 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__32198 = (0);
while(true){
if((i__32198 < size__4651__auto__)){
var filter = cljs.core._nth(c__4650__auto__,i__32198);
cljs.core.chunk_append(b__32199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,filter], null));

var G__32236 = (i__32198 + (1));
i__32198 = G__32236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32199),reagent_datatable$table_utils$block_filter_values_$_iter__32196(cljs.core.chunk_rest(s__32197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32199),null);
}
} else {
var filter = cljs.core.first(s__32197__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,filter], null),reagent_datatable$table_utils$block_filter_values_$_iter__32196(cljs.core.rest(s__32197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(filter_set);
})());
}),null,medley.core.filter_vals(cljs.core.seq,new cljs.core.Keyword(null,"filter-select","filter-select",1022978057).cljs$core$IFn$_invoke$arity$1(columns)))));
});
reagent_datatable.table_utils.column_visible_QMARK_ = (function reagent_datatable$table_utils$column_visible_QMARK_(table,column_key){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)),column_key);
});
reagent_datatable.table_utils.column_visibility_on_change = (function reagent_datatable$table_utils$column_visibility_on_change(table_atom,column_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32208_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(reagent_datatable.table_utils.reset_pagination(p1__32208_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-select","filter-select",1022978057)], null),cljs.core.dissoc,column_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"filter-input","filter-input",-449277366)], null),cljs.core.dissoc,column_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null),((reagent_datatable.table_utils.column_visible_QMARK_(cljs.core.deref(table_atom),column_key))?cljs.core.disj:cljs.core.conj),column_key);
}));
});
reagent_datatable.table_utils.table_columns = (function reagent_datatable$table_utils$table_columns(table){
var columns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var hidden = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32209_SHARP_){
return cljs.core.contains_QMARK_(hidden,new cljs.core.Keyword(null,"column-key","column-key",367654448).cljs$core$IFn$_invoke$arity$1(p1__32209_SHARP_));
}),columns);
});
reagent_datatable.table_utils.pagination_rows_per_page_on_change = (function reagent_datatable$table_utils$pagination_rows_per_page_on_change(evt,table_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_atom,(function (p1__32210_SHARP_){
return cljs.core.assoc_in(cljs.core.assoc_in(p1__32210_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959)], null),parseInt(evt.target.value)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),(0));
}));
});
reagent_datatable.table_utils.pagination_rows_per_page = (function reagent_datatable$table_utils$pagination_rows_per_page(table){
var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (15);
}
});
reagent_datatable.table_utils.pagination_current_page = (function reagent_datatable$table_utils$pagination_current_page(table){
var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
});
reagent_datatable.table_utils.pagination_current_and_total_pages = (function reagent_datatable$table_utils$pagination_current_and_total_pages(table,processed_rows){
var offset = reagent_datatable.table_utils.pagination_current_page(table);
var rows_per_page = reagent_datatable.table_utils.pagination_rows_per_page(table);
var nth_rows_at_page = (rows_per_page + (offset * rows_per_page));
var nth_rows = cljs.core.count(processed_rows);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((offset * rows_per_page) + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((nth_rows_at_page > nth_rows))?nth_rows:nth_rows_at_page))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nth_rows)].join('');
});
reagent_datatable.table_utils.pagination_rows_exhausted_QMARK_ = (function reagent_datatable$table_utils$pagination_rows_exhausted_QMARK_(table,processed_rows){
var current_page = reagent_datatable.table_utils.pagination_current_page(table);
var rows_per_page = reagent_datatable.table_utils.pagination_rows_per_page(table);
var tot_rows = cljs.core.count(processed_rows);
var left_rows = ((tot_rows - (rows_per_page * current_page)) - rows_per_page);
return (((left_rows === (0))) || ((left_rows < (0))));
});
reagent_datatable.table_utils.pagination_inc_page = (function reagent_datatable$table_utils$pagination_inc_page(table_atom,processed_rows){
if(reagent_datatable.table_utils.pagination_rows_exhausted_QMARK_(cljs.core.deref(table_atom),processed_rows)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}
});
reagent_datatable.table_utils.pagination_dec_page = (function reagent_datatable$table_utils$pagination_dec_page(table_atom){
if((reagent_datatable.table_utils.pagination_current_page(cljs.core.deref(table_atom)) > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagination","pagination",-1553654604),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),cljs.core.dec);
} else {
return null;
}
});
/**
 * Returns true if the argument is a date, false otherwise.
 */
reagent_datatable.table_utils.date_QMARK_ = (function reagent_datatable$table_utils$date_QMARK_(d){
return (d instanceof Date);
});
/**
 * Returns something that can be used to order dates.
 */
reagent_datatable.table_utils.date_as_sortable = (function reagent_datatable$table_utils$date_as_sortable(d){
return d.getTime();
});
/**
 * A comparator that works for the various types found in table structures.
 *   This is a limited implementation that expects the arguments to be of
 *   the same type. The :else case is to call compare, which will throw
 *   if the arguments are not comparable to each other or give undefined
 *   results otherwise.
 *   Both arguments can be a vector, in which case they must be of equal
 *   length and each element is compared in turn.
 */
reagent_datatable.table_utils.compare_vals = (function reagent_datatable$table_utils$compare_vals(x,y){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.vector_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__32212_SHARP_,p2__32211_SHARP_){
var r = cljs.core.compare(cljs.core.first(p2__32211_SHARP_),cljs.core.second(p2__32211_SHARP_));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r,(0))){
return cljs.core.reduced(r);
} else {
return r;
}
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,x,y));
} else {
if(((((typeof x === 'number') && (typeof y === 'number'))) || (((((typeof x === 'string') && (typeof y === 'string'))) || (((cljs.core.boolean_QMARK_(x)) && (cljs.core.boolean_QMARK_(y)))))))){
return cljs.core.compare(x,y);
} else {
if(((reagent_datatable.table_utils.date_QMARK_(x)) && (reagent_datatable.table_utils.date_QMARK_(y)))){
return cljs.core.compare(reagent_datatable.table_utils.date_as_sortable(x),reagent_datatable.table_utils.date_as_sortable(y));
} else {
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));

}
}
}
});
reagent_datatable.table_utils.resolve_sorting = (function reagent_datatable$table_utils$resolve_sorting(table,rows){
var temp__5751__auto__ = reagent_datatable.table_utils.column_sort_value(table);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__32213 = temp__5751__auto__;
var column_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(1),null);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (row1,row2){
var val1 = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row1) : column_key.call(null,row1));
var val2 = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row2) : column_key.call(null,row2));
if(cljs.core.truth_(order)){
return reagent_datatable.table_utils.compare_vals(val2,val1);
} else {
return reagent_datatable.table_utils.compare_vals(val1,val2);
}
}),rows);
} else {
return rows;
}
});
reagent_datatable.table_utils.resolve_column_filtering = (function reagent_datatable$table_utils$resolve_column_filtering(table,rows){
var temp__5751__auto__ = reagent_datatable.table_utils.column_filter_values(table);
if(cljs.core.truth_(temp__5751__auto__)){
var column_filters = temp__5751__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row_data_map){
return cljs.core.every_QMARK_((function (p__32217){
var vec__32218 = p__32217;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32218,(1),null);
var render_fn = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__32216_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-key","column-key",367654448).cljs$core$IFn$_invoke$arity$1(p1__32216_SHARP_),k);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"data","data",-232669377)], null))));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.identity;
}
})();
var row_v = (function (){var G__32221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_data_map,k);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__32221) : render_fn.call(null,G__32221));
})();
if(typeof v === 'string'){
var G__32222 = row_v;
var G__32222__$1 = (((G__32222 == null))?null:clojure.string.lower_case(G__32222));
if((G__32222__$1 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__32222__$1,v);
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,row_v);
}
}),column_filters);
}),rows);
} else {
return rows;
}
});
reagent_datatable.table_utils.resolve_search_all = (function reagent_datatable$table_utils$resolve_search_all(table,rows){
var temp__5751__auto__ = reagent_datatable.table_utils.process_string_for_filtering(reagent_datatable.table_utils.search_all_value(table));
if(cljs.core.truth_(temp__5751__auto__)){
var search_value = temp__5751__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (row_data){
return cljs.core.some((function (p__32224){
var vec__32225 = p__32224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(0),null);
var cell_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(1),null);
var render_fn = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__32223_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-key","column-key",367654448).cljs$core$IFn$_invoke$arity$1(p1__32223_SHARP_),k);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"data","data",-232669377)], null))));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.identity;
}
})();
var cell = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(cell_data) : render_fn.call(null,cell_data));
var G__32228 = cell;
var G__32228__$1 = (((G__32228 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32228));
var G__32228__$2 = (((G__32228__$1 == null))?null:clojure.string.lower_case(G__32228__$1));
if((G__32228__$2 == null)){
return null;
} else {
return clojure.string.includes_QMARK_(G__32228__$2,search_value);
}
}),row_data);
}),rows);
} else {
return rows;
}
});
reagent_datatable.table_utils.resolve_hidden_columns = (function reagent_datatable$table_utils$resolve_hidden_columns(table,rows){
var temp__5751__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)));
if(temp__5751__auto__){
var hidden_columns = temp__5751__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row_data){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,row_data,hidden_columns);
}),rows);
} else {
return rows;
}
});
reagent_datatable.table_utils.resolve_pagination = (function reagent_datatable$table_utils$resolve_pagination(table,rows){
var current_page = reagent_datatable.table_utils.pagination_current_page(table);
var rows_per_page = reagent_datatable.table_utils.pagination_rows_per_page(table);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,((cljs.core.seq(rows))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(rows_per_page,rows),current_page):null)], null);
});
reagent_datatable.table_utils.process_rows = (function reagent_datatable$table_utils$process_rows(table_atom){
var table = cljs.core.deref(table_atom);
var rows = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"data","data",-232669377)], null));
return reagent_datatable.table_utils.resolve_pagination(table,reagent_datatable.table_utils.resolve_search_all(table,reagent_datatable.table_utils.resolve_column_filtering(table,reagent_datatable.table_utils.resolve_sorting(table,reagent_datatable.table_utils.resolve_hidden_columns(table,rows)))));
});

//# sourceMappingURL=reagent_datatable.table_utils.js.map
