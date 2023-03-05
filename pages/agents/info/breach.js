botao1 = document.getElementById("btn1");
botao2 = document.getElementById("btn2");
botao3 = document.getElementById("btn3");
botao4 = document.getElementById("btn4");

nome = document.getElementById("SkillName");
plus = document.getElementById("SkillText");

tela = document.getElementById("reproduction");

function setSkill(code){
    botao1.style.backgroundColor="rgb(255, 70, 85)";
    botao2.style.backgroundColor="rgb(255, 70, 85)";
    botao3.style.backgroundColor="rgb(255, 70, 85)";
    botao4.style.backgroundColor="rgb(255, 70, 85)";

    if(code == 1){
        botao1.style.backgroundColor="black";

        update(1);
    }
    if(code == 2){
        botao2.style.backgroundColor="black";

        update(2);
    }
    if(code == 3){
        botao3.style.backgroundColor="black";

        update(3);
    }
    if(code == 4){
        botao4.style.backgroundColor="black";

        update(4);
    }
}

function update(skill){
    if(skill == 1){

        nome.innerHTML="Q - ESTOPIM";
        plus.innerHTML="EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4";
    }
    if(skill == 2){

        nome.innerHTML="E - FALHA TECTONICA";
        plus.innerHTML="EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4";
    }
    if(skill == 3){

        nome.innerHTML="C - POS CHOQUE";
        plus.innerHTML="EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4";
    }
    if(skill == 4){

        nome.innerHTML="X - ONDA TROVEJANTE";
        plus.innerHTML="EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4";
    }
}