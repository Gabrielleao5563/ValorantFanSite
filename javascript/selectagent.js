const pesquisaInput = document.getElementById("pesquisa");
const resultados = document.getElementsByClassName("agentdiv");

pesquisaInput.addEventListener('input', function() {

    const termoPesquisado = this.value.toLowerCase();
    console.log(termoPesquisado);

    for(let i = 0; i < resultados.length; i++){

        const resultadoTexto = resultados[i].innerText.toLowerCase();

        if(resultadoTexto.includes(termoPesquisado)){

            resultados[i].classList.remove("hide");

        }else{

            resultados[i].classList.add("hide")

        }

    }

})