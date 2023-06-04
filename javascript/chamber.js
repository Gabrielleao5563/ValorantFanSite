var nome = "Chamber";

var biografia = "Bem vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com uma precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.";

var classe = "Sentinela";

var nome_Q = "Caçadora de Cabeças";
var link_Q = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4";
var info_Q = "ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar.";

var nome_E = "Renderzvous";
var link_E = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt060399adf0531693/63937bd46675d51080de0e5d/Chamber_E_rework_web.mp4";
var info_E = "POSICIONE uma âncora de teleporte. Enquanto estiver no chão e dentro do alcance da âncora, REATIVE para teleportar rapidamente até a âncora. A âncora pode ser recuperada para ser REPOSICIONADA.";

var nome_C = "Marca Registrada";
var link_C = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt10d79f98d5c3a553/63937a1c956fc631a94dbe53/Chamber_C_rework_web.mp4";
var info_C = "POSICIONE uma armadilha que busca por inimigos. Quando um inimigo visível entrar no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que reduz a velocidade dos jogadores. A armadilha pode ser recuperada para ser REPOSICIONADA.";

var nome_X = "Tour de Force";
var link_X = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta33b5e15a758d337/63937c9ddd9cc310b3158737/Chamber_X_rework_web.mp4";
var info_X = "ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto. Abater um inimigo cria um campo duradouro que reduz a velocidade dos jogadores dentro dele.";

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