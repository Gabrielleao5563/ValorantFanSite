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

        nome.innerHTML="";
        plus.innerHTML="";
        
        tela.src="";
    }
    if(skill == 2){

        nome.innerHTML="";
        plus.innerHTML="";
        
        tela.src="";
    }
    if(skill == 3){

        nome.innerHTML="";
        plus.innerHTML="";
        
        tela.src="";
    }
    if(skill == 4){

        nome.innerHTML="";
        plus.innerHTML="";
        
        tela.src="";
    }
}