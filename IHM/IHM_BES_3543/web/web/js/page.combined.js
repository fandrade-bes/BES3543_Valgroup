$hmi.addPagesScript({// ------------------------------------  LA_Operacao - Empilhador  ------------------------------ 

"m2_page2": function(){
// ------------------------------------  Header ------------------------------
var $=null;var jQuery=null;
$hmi.getActivePage().__eval__ = function(a){return eval(a);}
var project = $hmi.getProjectInterface();
var page = new $hmi.defs.hmiIPage($hmi.getActivePage());
page.__eval__=$hmi.getActivePage().__eval__;
var Group = $hmi.getJSModule('Group');var State = $hmi.getJSModule('State');
// --------------------------------------User code -------------------------------
// ------------------------------------  Footer  ------------------------------
page.bindJSCallback(false);

}
,
// ------------------------------------  Selecao Lado  ------------------------------ 

"m38_page39": function(){
// ------------------------------------  Header ------------------------------
var $=null;var jQuery=null;
$hmi.getActivePage().__eval__ = function(a){return eval(a);}
var project = $hmi.getProjectInterface();
var page = new $hmi.defs.hmiIPage($hmi.getActivePage());
page.__eval__=$hmi.getActivePage().__eval__;
var Group = $hmi.getJSModule('Group');var State = $hmi.getJSModule('State');
// --------------------------------------User code -------------------------------
// ------------------------------------  Footer  ------------------------------
page.bindJSCallback(false);

}
});