document.getElementById("claro").addEventListener("click", function() {
        // Alterar o fundo para branco
        document.body.style.backgroundColor = "white";
        
        // Alterar as bordas para branco
        document.querySelector('.border').style.borderColor = "white";
        document.querySelector('.corpo').style.borderColor = "white";
        document.querySelector('#imagem').style.borderColor = "white";

        // Alterar o texto para preto
        document.body.style.color = "black";
        document.querySelector('#back_titulo').style.color = "black";
        document.querySelector('.botao2').style.color = "black";
        document.querySelector('.doccorpo').style.color = "black";
        document.querySelector('#identificação').style.color = "black";
});


document.getElementById("escuro").addEventListener("click", function() {
        // Alterar o fundo para preto
        document.body.style.backgroundColor = "black";
        
        // Alterar as bordas para preto
        document.querySelector('.border').style.borderColor = "black";
        document.querySelector('.corpo').style.borderColor = "black";
        document.querySelector('#imagem').style.borderColor = "black";

        // Alterar o texto para branco
        document.body.style.color = "white";
        document.querySelector('#back_titulo').style.color = "white";
        document.querySelector('.doccorpo').style.color = "white";
        document.querySelector('#identificação').style.color = "white";
});


document.getElementById("inicial").addEventListener("click", function() {
        // Não é necessário fazer nada aqui, pois queremos manter as configurações existentes
});



document.getElementById("personalizado").addEventListener("click", function() {
    // Perguntar ao usuário e obter informações
    var corFundo = prompt("Digite a cor de fundo desejada:");
    var corTexto = prompt("Digite a cor do texto desejada:");

    // Aplicar as configurações com base nas respostas
    document.body.style.backgroundColor = corFundo;
    document.body.style.color = corTexto;
});