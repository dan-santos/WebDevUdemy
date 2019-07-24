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
    var qtdBaloes = 10;
    criaBaloes(qtdBaloes);

}
function criaBaloes(qtdBaloes){
    for(var i = 0; i<= qtdBaloes; i++){
        var balao = document.createElement("img");
        balao.src = "../img/balao_azul_pequeno.png";
        document.getElementById('cenario').appendChild(balao); //coloca elementos dentro da div
    }
}