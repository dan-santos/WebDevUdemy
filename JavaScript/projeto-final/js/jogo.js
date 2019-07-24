var timer = 0; //variável que conta os segundos
function iniciaJogo(){
    var url = window.location.search; //O atributo search pega tudo que está na query string, isto é, tudo que se encontra depois do "?" da url
    var nivel_jogo = url.replace("?", ""); //retirar o ? da query string
    
    //1 = 120 seg
    //2 = 60 seg
    //3 = 30 seg
    var segundos = 0;
    if(nivel_jogo == 1){
        segundos = 120;
    }else if(nivel_jogo == 2){
        segundos = 60;
    }else{
        segundos = 30;
    }

    document.getElementById("cronometro").innerHTML = segundos; //innerHTML = coloca um valor dentro de uma tag
    
    //qtd de baloes
    var qtdBaloes = 80;
    var baloesEstourados = 0;

    criaBaloes(qtdBaloes);

    document.getElementById("nrBaloesInteiros").innerHTML = qtdBaloes;
    document.getElementById("nrBaloesEstourados").innerHTML = baloesEstourados;

    contagemRegr(segundos+1);

}
function criaBaloes(qtdBaloes){
    for(var i = 0; i< qtdBaloes; i++){
        var balao = document.createElement("img");
        balao.src = "../img/balao_azul_pequeno.png";
        balao.style.margin = "10px";

        balao.id = "b"+i;
        balao.onclick = function(){estourar(this);}

        document.getElementById('cenario').appendChild(balao); //coloca elementos dentro da div
    }
}
function contagemRegr(segundos){
    segundos--;
    if(segundos == -1){
        clearTimeout(timer); //Para a execução da função setTimeOut
        gameOver();
        return false;
    }
    document.getElementById("cronometro").innerHTML = segundos;
    timer = setTimeout("contagemRegr("+segundos+")", 1000); //A cada 1000 milisegundos (1 segundo), a função é chamada
}
function gameOver(){
    alert("Game Over!");
}
function estourar(e){
    e.src = "../img/balao_azul_pequeno_estourado.png";
    document.getElementById(e.id).setAttribute("onclick", ""); //impede que o mesmo balão seja clicado mais de uma vez
    pontuacao();
}
function pontuacao(){
    var qtdBaloesInteiros = document.getElementById("nrBaloesInteiros").innerHTML;

    var qtdBaloesEstourados = document.getElementById("nrBaloesEstourados").innerHTML;
    qtdBaloesInteiros = parseInt(qtdBaloesInteiros);
    qtdBaloesEstourados = parseInt(qtdBaloesEstourados);

    qtdBaloesInteiros--;
    document.getElementById("nrBaloesInteiros").innerHTML = qtdBaloesInteiros;

    qtdBaloesEstourados++;
    document.getElementById("nrBaloesEstourados").innerHTML = qtdBaloesEstourados;

    situacaoJogo(qtdBaloesInteiros);
}

function situacaoJogo (nr){
    if(nr == 0){
        alert("Você ganhou!");
        clearTimeout(timer);
        return false;
    }
}