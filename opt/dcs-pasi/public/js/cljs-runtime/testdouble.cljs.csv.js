goog.provide('testdouble.cljs.csv');
testdouble.cljs.csv.escape_quotes = (function testdouble$cljs$csv$escape_quotes(s){
return clojure.string.replace(s,"\"","\"\"");
});
testdouble.cljs.csv.wrap_in_quotes = (function testdouble$cljs$csv$wrap_in_quotes(s){
return ["\"",testdouble.cljs.csv.escape_quotes(s),"\""].join('');
});
testdouble.cljs.csv.separate = (function testdouble$cljs$csv$separate(data,separator,quote_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(separator,(function (){var G__43696 = data;
var G__43696__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__43696)
;
if(cljs.core.truth_(quote_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.wrap_in_quotes,G__43696__$1);
} else {
return G__43696__$1;
}
})());
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote_QMARK_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(newline,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43697_SHARP_){
return testdouble.cljs.csv.separate(p1__43697_SHARP_,separator,quote_QMARK_);
}),data));
});
testdouble.cljs.csv.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
testdouble.cljs.csv.newline_error_message = [":newline must be one of [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.keys(testdouble.cljs.csv.newlines)),"]"].join('');
/**
 * Writes data to String in CSV-format.
 *   Accepts the following options:
 *   :separator - field separator
 *             (default ,)
 *   :newline   - line separator
 *             (accepts :lf or :cr+lf)
 *             (default :lf)
 *   :quote?    - wrap in quotes
 *             (default false)
 */
testdouble.cljs.csv.write_csv = (function testdouble$cljs$csv$write_csv(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43750 = arguments.length;
var i__4865__auto___43751 = (0);
while(true){
if((i__4865__auto___43751 < len__4864__auto___43750)){
args__4870__auto__.push((arguments[i__4865__auto___43751]));

var G__43752 = (i__4865__auto___43751 + (1));
i__4865__auto___43751 = G__43752;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__43700 = options;
var map__43700__$1 = cljs.core.__destructure_map(map__43700);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43700__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43700__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43700__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),false);
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__5751__auto__)){
var newline_char = temp__5751__auto__;
return testdouble.cljs.csv.write_data(data,separator,newline_char,quote_QMARK_);
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
}));

(testdouble.cljs.csv.write_csv.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq43698){
var G__43699 = cljs.core.first(seq43698);
var seq43698__$1 = cljs.core.next(seq43698);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43699,seq43698__$1);
}));

/**
 * Move to the next character.
 */
testdouble.cljs.csv._advance = (function testdouble$cljs$csv$_advance(p__43701){
var map__43702 = p__43701;
var map__43702__$1 = cljs.core.__destructure_map(map__43702);
var state = map__43702__$1;
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43702__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.first(chars),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chars","chars",-1094630317),cljs.core.rest(chars)], 0));
});
/**
 * Append the current character onto the field. Advances.
 */
testdouble.cljs.csv._consume = (function testdouble$cljs$csv$_consume(p__43703){
var map__43704 = p__43703;
var map__43704__$1 = cljs.core.__destructure_map(map__43704);
var state = map__43704__$1;
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43704__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return testdouble.cljs.csv._advance(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311),cljs.core.str,char$));
});
/**
 * Finalize the field, adding it to the current row. Does not advance.
 * 
 *   Following convention, a field that hasn't had any chars appended appears as an
 *   empty string, not nil.
 */
testdouble.cljs.csv._end_field = (function testdouble$cljs$csv$_end_field(p__43705){
var map__43706 = p__43705;
var map__43706__$1 = cljs.core.__destructure_map(map__43706);
var state = map__43706__$1;
var field_buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43706__$1,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43706__$1,new cljs.core.Keyword(null,"row","row",-570139521));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(row,cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_buffer))], 0));
});
/**
 * Finalize the last field in the row. Then append the row to the collection of
 *   all rows, and start a new row. Does not advance.
 */
testdouble.cljs.csv._end_row = (function testdouble$cljs$csv$_end_row(state){
var map__43707 = testdouble.cljs.csv._end_field(state);
var map__43707__$1 = cljs.core.__destructure_map(map__43707);
var state__$1 = map__43707__$1;
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43707__$1,new cljs.core.Keyword(null,"row","row",-570139521));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.conj,row),new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.PersistentVector.EMPTY);
});
/**
 * Prepare to process the string `data`. Advances to the first character.
 */
testdouble.cljs.csv._init_read = (function testdouble$cljs$csv$_init_read(data){
return testdouble.cljs.csv._advance(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chars","chars",-1094630317),cljs.core.seq(data),new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311),null,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.PersistentVector.EMPTY], null));
});
/**
 * Reads data from String in CSV-format.
 */
testdouble.cljs.csv.read_csv = (function testdouble$cljs$csv$read_csv(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43757 = arguments.length;
var i__4865__auto___43758 = (0);
while(true){
if((i__4865__auto___43758 < len__4864__auto___43757)){
args__4870__auto__.push((arguments[i__4865__auto___43758]));

var G__43759 = (i__4865__auto___43758 + (1));
i__4865__auto___43758 = G__43759;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(testdouble.cljs.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__43710 = options;
var map__43710__$1 = cljs.core.__destructure_map(map__43710);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43710__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43710__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var separator__$1 = cljs.core.first(separator);
if(cljs.core.contains_QMARK_(testdouble.cljs.csv.newlines,newline)){
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}

var G__43712 = testdouble.cljs.csv._init_read(data);
var map__43713 = G__43712;
var map__43713__$1 = cljs.core.__destructure_map(map__43713);
var state = map__43713__$1;
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43713__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43713__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var in_quoted_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43713__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594));
var field_buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43713__$1,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311));
var G__43712__$1 = G__43712;
while(true){
var map__43715 = G__43712__$1;
var map__43715__$1 = cljs.core.__destructure_map(map__43715);
var state__$1 = map__43715__$1;
var char$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43715__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var chars__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43715__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var in_quoted_field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43715__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594));
var field_buffer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43715__$1,new cljs.core.Keyword(null,"field-buffer","field-buffer",614488311));
if(cljs.core.not(char$__$1)){
return new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(testdouble.cljs.csv._end_row(state__$1));
} else {
var G__43765 = (cljs.core.truth_(in_quoted_field__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\""))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(chars__$1),"\""))?testdouble.cljs.csv._advance(testdouble.cljs.csv._consume(state__$1)):testdouble.cljs.csv._advance(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594)))):testdouble.cljs.csv._consume(state__$1)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\"")) && (cljs.core.not(field_buffer__$1))))?testdouble.cljs.csv._advance(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"in-quoted-field","in-quoted-field",-1610347594),true)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,separator__$1))?testdouble.cljs.csv._advance(testdouble.cljs.csv._end_field(state__$1)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\r")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newline,new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(chars__$1),"\n"))))))?testdouble.cljs.csv._advance(testdouble.cljs.csv._advance(testdouble.cljs.csv._end_row(state__$1))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$__$1,"\n")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newline,new cljs.core.Keyword(null,"lf","lf",1923784290)))))?testdouble.cljs.csv._advance(testdouble.cljs.csv._end_row(state__$1)):testdouble.cljs.csv._consume(state__$1)
)))));
G__43712__$1 = G__43765;
continue;
}
break;
}
}));

(testdouble.cljs.csv.read_csv.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(testdouble.cljs.csv.read_csv.cljs$lang$applyTo = (function (seq43708){
var G__43709 = cljs.core.first(seq43708);
var seq43708__$1 = cljs.core.next(seq43708);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43709,seq43708__$1);
}));


//# sourceMappingURL=testdouble.cljs.csv.js.map
