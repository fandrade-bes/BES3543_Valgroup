$hmi.addPagesScript({// ------------------------------------  LA_Receitas  ------------------------------ 

"m11_page11": function(){
// ------------------------------------  Header ------------------------------
var $=null;var jQuery=null;
$hmi.getActivePage().__eval__ = function(a){return eval(a);}
var project = $hmi.getProjectInterface();
var page = new $hmi.defs.hmiIPage($hmi.getActivePage());
page.__eval__=$hmi.getActivePage().__eval__;
var Group = $hmi.getJSModule('Group');var State = $hmi.getJSModule('State');
// --------------------------------------User code -------------------------------
//função para atualizar nome de receitas na caixa de index
function atualizarListaReceitas()
{
    // Quantidade de receitas disponíveis no CLP
    var QTD_RECEITAS = 20;

    var receitas = [];

    for (var i = 1; i <= QTD_RECEITAS; i++)
    {
        var estado = new State();

        var tag = "Application/LA_IHM/nome_RECEITA_" + i;

        var nome = project.getTag(tag, estado, 0);

        if (nome === null)
        {
            nome =  "(Sem leitura)";
        }
        else if (String(nome).trim() == "")
        {
            nome =  "----------------------";
        }

        receitas.push([String(nome), i, true]);
    }

    try
    {
        var lista = page.getWidget(
            "controlListbtn.controlList"
        );

        if (lista === null)
        {
            alert("Control List nao encontrado");
            return;
        }

        var resultado = lista.setProperty(
            "listData", receitas
        );

        if (resultado !== true)
        {
            alert("Falha ao atualizar receitas");
        }
    }
    catch (erro)
    {
        alert("Erro: " + erro);
    }
}

//--------------//-----------------------//----------------------//-------------------//-------------
//--------------//-----------------------//----------------------//-------------------//-------------


//atualiza a lista de receitas toda vez que detectar uma mudança
function JSFunctBlock_onDataUpdate(me, eventInfo)
{
    atualizarListaReceitas();
    
    return false; 
}

//atualiza a lista de receitas após 50ms toda vez que abrir a página
function LA_Receitas_onActivate(me, eventInfo)
{
    page.setTimeout("atualizarListaReceitas()", 50);
}// ------------------------------------  Footer  ------------------------------
page.bindJSCallback(false);

}
});