var max = 21;

var agente1 = "brimstone";
var agente2 = "sage";
var agente3 = "breach";
var agente4 = "jett";
var agente5 = "sova";
var agente6 = "phoenix";
var agente7 = "viper";
var agente8 = "omen";
var agente9 = "cypher";
var agente10 = "raze";
var agente11 = "reyna";
var agente12 = "killjoy";
var agente13 = "skye";
var agente14 = "yoru";
var agente15 = "astra";
var agente16 = "kayo";
var agente17 = "chamber";
var agente18 = "neon";
var agente19 = "fade";
var agente20 = "harbor";
var agente21 = "gekko";

var img = document.getElementById("agentchanging");

var intervalo1 = setInterval(change, 2000);

var numero = 0;

function change(){

    var agent = "";

    if(numero == max){
        numero = 0;
    }

    numero++;

    switch(numero){
        case 1:
            agent = agente1;
            break;
        case 2:
            agent = agente2;
            break;
        case 3:
            agent = agente3;
            break;
        case 4:
            agent = agente4;
            break;
        case 5:
            agent = agente5;
            break;
        case 6:
            agent = agente6;
            break;
        case 7:
            agent = agente7;
            break;
        case 8:
            agent = agente8;
            break;
        case 9:
            agent = agente9;
            break;
        case 10:
            agent = agente10;
            break;
        case 11:
            agent = agente11;
            break;
        case 12:
            agent = agente12;
            break;
        case 13:
            agent = agente13;
            break;
        case 14:
            agent = agente14;
            break;
        case 15:
            agent = agente15;
            break;
        case 16:
            agent = agente16;
            break;
        case 17:
            agent = agente17;
            break;
        case 18:
            agent = agente18;
            break;
        case 19:
            agent = agente19;
            break;
        case 20:
            agent = agente20;
            break;
        case 21:
            agent = agente21;
            break;
    }

    img.src=String("../images/" + agent + ".png")

    console.log(numero);
}