var nome = "Breach";

var biografia = "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.";

var classe = "iniciador";

var nome_Q = "Estopim";
var link_Q = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4";
var info_Q = "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.";

var nome_E = "Falha Tectônica";
var link_E = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4";
var info_E = "EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona.";

var nome_C = "Pós-Choque";
var link_C = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4";
var info_C = "EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.";

var nome_X = "Onda Trovejante";
var link_X = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4";
var info_X = "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.";

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