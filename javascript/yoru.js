var nome = "Yoru";

var biografia = "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.";

var classe = "Duelista";

var nome_Q = "Ponto Cego";
var link_Q = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4";
var info_Q = "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.";

var nome_E = "Passagem Dimensional";
var link_E = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4";
var info_E = "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o MODO SECUNDÁRIO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.";

var nome_C = "Distração";
var link_C = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4";
var info_C = "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles.";

var nome_X = "Espionagem Dimensional";
var link_X = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4";
var info_X = "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora.";

//--------------------------------------------------

var agentimg = document.getElementById("agentimage");
var classtext = document.getElementById("classtext");
var classicon = document.getElementById("classicon");
var biograpy = document.getElementById("biograpy");
var vid = document.getElementById("screen");
var skillname = document.getElementById("skillname");
var skillicon = document.getElementById("skillicon");
var skillinfo = document.getElementById("skillinfo");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function load(){
    document.title=String(nome + " - " + biografia);
    var nameforcode = nome.toLowerCase();
    var classeforcode = classe.toLowerCase();

    agentimg.src="../../images/" + nameforcode + ".png";
    classtext.innerHTML=classe.toUpperCase();
    classicon.src="../../icons/" + classeforcode + ".png";
    biograpy.innerHTML=biografia;

    btn1.src="../../icons/" + nameforcode + "_Q.png";
    btn2.src="../../icons/" + nameforcode + "_E.png";
    btn3.src="../../icons/" + nameforcode + "_C.png";
    btn4.src="../../icons/" + nameforcode + "_X.png";

    set_Q();
}

function set_Q(){
    skillname.innerHTML=nome_Q;
    skillinfo.innerHTML=info_Q;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_Q.png");
    vid.src=link_Q;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn1.classList.add("selected");
}

function set_E(){
    skillname.innerHTML=nome_E;
    skillinfo.innerHTML=info_E;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_E.png");
    vid.src=link_E;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn2.classList.add("selected");
}

function set_C(){
    skillname.innerHTML=nome_C;
    skillinfo.innerHTML=info_C;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_C.png");
    vid.src=link_C;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn3.classList.add("selected");
}

function set_X(){
    skillname.innerHTML=nome_X;
    skillinfo.innerHTML=info_X;
    skillicon.src=String("../../icons/" + nome.toLowerCase() + "_X.png");
    vid.src=link_X;

    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");

    btn4.classList.add("selected");
}

//----------------------------------------------

document.addEventListener('keypress', function(e){
    if(e.key === "q" || e.key === "Q"){
        set_Q();
    }
    if(e.key === "e" || e.key === "E"){
        set_E();
    }
    if(e.key === "c" || e.key === "C"){
        set_C();
    }
    if(e.key === "x" || e.key === "X"){
        set_X();
    }
})