var agentname = "Astra";
var agentsubtext = "A controladora cósmica!";
var agentbiograpy = "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.";
var agentclass = "Controlador";

var skill1name = "Pulso Nova";
var skill1info = "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área."
var skill1link = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4";

var skill2name = "Nebulosa";
var skill2info = "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). Utilize (F) em uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.";
var skill2link = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4";

var skill3name = "Poço Gravitácional";
var skill3info = "Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.";
var skill3link = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4";

var skill4name = "Divísa cósmica";
var skill4info = "ATIVE (X) para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO ALTERNATIVO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, utilize o DISPARO SECUNDÁRIO na Forma Astral para começar a mirar e, depois, o DISPARO PRIMÁRIO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.";
var skill4link = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4";

//------------------------------------------------------------

var selected = "Q";

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

function start(){
    document.title=String(agentname + " - " + agentsubtext);
    agentimg.src=String("../../images/" + agentname.toLowerCase() + ".png");
    classtext.innerHTML=agentclass.toUpperCase();
    classicon.src=String("../../icons/" + agentclass + ".png");
    biograpy.innerHTML=agentbiograpy;
    btn1.src=String("../../icons/" + agentname + "_Q.png");
    btn2.src=String("../../icons/" + agentname + "_E.png");
    btn3.src=String("../../icons/" + agentname + "_C.png");
    btn4.src=String("../../icons/" + agentname + "_X.png");

    mudar(1);
}

function mudar(qual){
    
    switch(qual){
        case 1:
            vid.src=skill1link;
            selected = "Q";
            skillicon.src=String("../../icons/" + agentname + "_" + selected + ".png");
            skillname.innerHTML=skill1name.toUpperCase();
            skillinfo.innerHTML=skill1info;
            break;
        case 2:
            vid.src=skill2link;
            selected = "E";
            skillicon.src=String("../../icons/" + agentname + "_" + selected + ".png");
            skillname.innerHTML=skill2name.toUpperCase();
            skillinfo.innerHTML=skill2info;
            break;
        case 3:
            vid.src=skill3link;
            selected = "C";
            skillicon.src=String("../../icons/" + agentname + "_" + selected + ".png");
            skillname.innerHTML=skill3name.toUpperCase();
            skillinfo.innerHTML=skill3info;
            break;
        case 4:
            vid.src=skill4link;
            selected = "X";
            skillicon.src=String("../../icons/" + agentname + "_" + selected + ".png");
            skillname.innerHTML=skill4name.toUpperCase();
            skillinfo.innerHTML=skill4info;
            break;
    }

}