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

        nome.innerHTML="Q - PULSO NOVA";
        plus.innerHTML="Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4";
    }
    if(skill == 2){

        nome.innerHTML="E - NEBULOSA";
        plus.innerHTML="Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). Utilize (F) em uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4";
    }
    if(skill == 3){

        nome.innerHTML="C - POÇO GRAVITACIONAL";
        plus.innerHTML="Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4";
    }
    if(skill == 4){

        nome.innerHTML="X - DIVISA COSMICA";
        plus.innerHTML="ATIVE (X) para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO ALTERNATIVO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, utilize o DISPARO SECUNDÁRIO na Forma Astral para começar a mirar e, depois, o DISPARO PRIMÁRIO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.";
        
        tela.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4";
    }
}