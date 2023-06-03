var div = document.getElementById("agents_div");

function digitando(){

    var solicitacao = document.getElementById("pesquisa");

    var quantidade = document.querySelectorAll('#agents_div > a > div > p');

    for(var i = 1; i < quantidade.length; i++){
        var div = document.getElementsByTagName("a")[i];

        var tamanhodotexto = div.name.length;

        console.log(div.name);

        for(var j = 0; j < solicitacao.value.length; j++){

            var letter = solicitacao.value.charAt(j);

            var tocompare = div.name.charAt(j);

            if(letter == tocompare){
                div.style.display="block";
            }else{
                div.style.display="none";
            }
        }
    }
}