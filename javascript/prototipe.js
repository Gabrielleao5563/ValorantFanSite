var nome = "";

var biografia = "";

var classe = "";

var nome_Q = "";
var link_Q = "";
var info_Q = "";

var nome_E = "";
var link_E = "";
var info_E = "";

var nome_C = "";
var link_C = "";
var info_C = "";

var nome_X = "";
var link_X = "";
var info_X = "";

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