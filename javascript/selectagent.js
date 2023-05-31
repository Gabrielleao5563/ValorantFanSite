
function set_astra(){
    sessionStorage.clear();

    sessionStorage.setItem('nome', 'Astra');
    sessionStorage.setItem('subtexto', 'A controladora cósmica!');
    sessionStorage.setItem('biografia', 'Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.');

    location.href = "agent.html";
}

//--------------------------------------------------------------

function blank(){
    sessionStorage.clear();

    sessionStorage.setItem('nome');
    sessionStorage.setItem('subtexto');
    sessionStorage.setItem('biografia');

    location.href = "agent.html";
}