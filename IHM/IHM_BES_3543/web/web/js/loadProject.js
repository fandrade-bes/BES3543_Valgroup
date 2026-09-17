$hmi.addPageInitFunction( "_ProjectPage", function(stage){
var p0_page0=new $hmi.defs.hmiProject({"wgtId":"p0_page0"},"IHM_BES_3543",{"aRT":250,"hT":2000,"datalinks":[],"prefix":"p0","projectName":"IHM_BES_3543/IHM_BES_3543.jpr","maxBandwidth":0,"modernBrowser":true,"connectionMode":null,"webSysIconDelay":0,"timeout":600000,"pollRate":100,"webMemoryAvailable":0,"webMemoryThreshold":0,"optimizations":{"nativeRenderCycle":true,"forceLayers":true},"onAccessDenied":0,"longDateFormat":"MM/DD/YY - hh:mm:ss","shortDateFormat":"DD/MM/YYYY","fieldsStyle":{"decimalSymbol":".","thousandSymbol":","},"webShowRuntimeErrors":false,"bgColorOption":0,"passthru":1,"passthruDelay":200,"changePageAnimation":true,"changePageAnimationOnCache":true},stage);
var p0_wgt0=new $hmi.defs.hmiMultiLangMgr({"wgtId":"p0_wgt0"},"_MultiLangMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[],"langs":{"L1":{"name":"Lang1","langId":"L1","writtingSystem":"Any","defaultFont":"Roboto","langCode":"en-US"}},"defLang":"L1","curLangId":"L1"},p0_page0,p0_page0),
p0_wgt1=new $hmi.defs.hmiPageMgr({"wgtId":"p0_wgt1"},"_PageMgr",{"map":{"la_menu geral":"m1_page1","la_operacao - empilhador":"m2_page2","la_operacao - envolvedor":"m3_page3","la_operacao -  pesagem":"m4_page4","la_manual_seletor":"m5_page5","la_manual - empilhador motores":"m6_page6","la_manual - envolvedor motores":"m7_page7","la_manual - empilhador atuadores":"m8_page8","la_manual - envolvedor atuadores":"m9_page9","manual - pesagem":"m10_page10","la_receitas":"m11_page11","la_parametros - empilhador garra":"m12_page12","la_parametros - empilhador movimento":"m13_page13","la_parametros - envolvedor":"m14_page14","la_dados - celula t1":"m15_page15","la_dados - celula t2":"m16_page16","la_dados - celula t3":"m17_page17","la_seguranca":"m18_page18","alarmes":"m19_page19","historico alarmes":"m20_page20","salvar receita":"d1_page21","lb_menu geral":"m21_page22","lb_operacao - empilhador":"m22_page23","lb_operacao - envolvedor":"m23_page24","lb_operacao - pesagem":"m24_page25","lb_manual_seletor":"m25_page26","lb_manual - empiilhador motores":"m26_page27","lb_manual - envolvedor motores":"m27_page28","lb_manual - empilhador atuadores":"m28_page29","lb_manual - envolvedor atuadores":"m29_page30","lb_receitas":"m30_page31","lb_parametros - empilhador garra":"m31_page32","lb_parametros - empilhador movimento":"m32_page33","lb_parametros - envolvedor":"m33_page34","lb_dados - celula t1":"m34_page35","lb_dados - celulas t2":"m35_page36","lb_dados - celulas t3":"m36_page37","lb_seguranca":"m37_page38","selecao lado":"m38_page39","la_geral":"t1_page40","lb_geral":"t2_page41"},"precached":[],"categories":{"Unified":{"name":"Unified","technology":7,"useragent":"*","minSize":[0,0],"maxSize":[-1,-1],"home":"Selecao Lado","pages":["m1_page1","m2_page2","m3_page3","m4_page4","m5_page5","m6_page6","m7_page7","m8_page8","m9_page9","m10_page10","m11_page11","m12_page12","m13_page13","m14_page14","m15_page15","m16_page16","m17_page17","m18_page18","m19_page19","m20_page20","m21_page22","m22_page23","m23_page24","m24_page25","m25_page26","m26_page27","m27_page28","m28_page29","m29_page30","m30_page31","m31_page32","m32_page33","m33_page34","m34_page35","m35_page36","m36_page37","m37_page38","m38_page39"],"dialogs":["d1_page21"],"templates":["t1_page40","t2_page41"],"umpages":["adduser","changepassword","deleteuser","loginpage","loginpage_combo","signaturedialog","switchuserloginpage","switchuserloginpage_combo","usereditor"],"alias":{}}}},p0_page0,p0_page0),
p0_wgt2=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt2"},"_ProjectMLTextMgr",{"texts":{},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt4=new $hmi.defs.hmiTagMgr({"wgtId":"p0_wgt4"},"_TagMgr",{},p0_page0,p0_page0),
p0_wgt7=new $hmi.defs.hmiTrendMgr({"wgtId":"p0_wgt7"},"_TrendMgr",{},p0_page0,p0_page0),
p0_wgt11=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt11"},"_AlarmMLTextMgr",{},p0_page0,p0_page0),
p0_wgt12=new $hmi.defs.hmiAlarmsMgr({"wgtId":"p0_wgt12"},"_AlarmsMgr",{},p0_page0,p0_page0),
p0_wgt14=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt14"},"_ScheduleMLTextMgr",{"texts":{"0":{"L1":"Every"},"1":{"L1":"Hourly"},"2":{"L1":"Daily"},"3":{"L1":"Weekly"},"4":{"L1":"Monthly"},"5":{"L1":"Yearly"},"6":{"L1":"By Date"},"7":{"L1":"Hi-Res"},"8":{"L1":"Time"},"9":{"L1":"Sunrise+"},"10":{"L1":"Sunrise-"},"11":{"L1":"Sunset+"},"12":{"L1":"Sunset-"},"13":{"L1":"Random10"},"14":{"L1":"Random20"}},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt15=new $hmi.defs.hmiScheduleMgrWgt({"wgtId":"p0_wgt15"},"_ScheduleMgr",{},p0_page0,p0_page0),
p0_wgt19=new $hmi.defs.hmiRecipeMgr({"wgtId":"p0_wgt19"},"_RecipeMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[":_IdalRecipe>:recipeIOSrc|R/W"]},p0_page0,p0_page0),
p0_wgt20=new $hmi.defs.hmiAuditTrailMgrWgt({"wgtId":"p0_wgt20"},"_AuditTrailMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[],"configFileName":"audittrail.json"},p0_page0,p0_page0),
p0_wgt22=new $hmi.defs.hmiIndexedTagSetMgr({"wgtId":"p0_wgt22"},"_IndexedTagSetMgr",{},p0_page0,p0_page0),
p0_wgt23=new $hmi.defs.hmiDBConnectorMgrWgt({"wgtId":"p0_wgt23"},"_DBConnectorMgr",{"enable":false},p0_page0,p0_page0),
p0_wgt25=new $hmi.defs.hmiUserGroupMgr({"wgtId":"p0_wgt25"},"_UserGroupMgr",{},p0_page0,p0_page0),
p0_wgt30=new $hmi.defs.hmiVariablesWgt({"wgtId":"p0_wgt30"},"_VariablesWgt",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[]},p0_page0,p0_page0),
p0_wgt32=new $hmi.defs.hmiSystemVars({"wgtId":"p0_wgt32"},"_SysPropMgr",{},p0_page0,p0_page0);var p0_wgt19_l0=$hmi.hmiAttach(p0_wgt19,"undefined",{"rw":"rw","attr":"recipeIOSrc","tag":"","srcType":"Recipe","dataSource":"_IdalRecipe","tagIndex":0,"wT":-1,"id":"p0_wgt19_l0"},stage);
p0_page0.addModule({"name":"com.hmi.calendarkeypadmodule-:1.2.0","webid":"cw_cwgt0","conf":null,"template": null, "js":function(webWgt){var defs=webWgt.getProject().getWidgetDefinitions();var hmiModuleLoader = webWgt.getProject().getHmiModuleLoader();var State = hmiModuleLoader.import( "State" );var wgt=new defs.hmiIWidget(webWgt);var page=new defs.hmiIPage(webWgt.getProject().getFocusPage());var project=new defs.hmiIProject(webWgt.getProject());page.__eval__=function(a){return eval(a);};
// START USERCODE

var calWgt = wgt.getWidget(wgt.id+".keypad_Value");
var dateTime = wgt.getWidget(wgt.id+".dateShownField");

this.cancelBtn = function()
{
    page.reject();
}

this.okBtn = function()
{
    page.accept();
}

this.leftMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()-1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.prevMonth(); //instead of js dang code, use an internal safe Qt method
						//with additional check to date previous 01/01/1970
}

this.rightMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()+1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.nextMonth(); //instead of js dang code, use an internal safe Qt method
}// END USERCODE

},"props":null,"tr":null});p0_page0.hideLoading();
p0_page0.execJS();
$hmi.enableRendering();
return p0_page0;})