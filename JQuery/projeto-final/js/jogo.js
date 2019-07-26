var rodada = 1;
var matriz = Array(3);
matriz["A"] = Array(3);
matriz["B"] = Array(3);
matriz["C"] = Array(3);

for(var i = 0; i < 9; i++){ //setando o valor 0 para todas as posições da matriz
    if(i < 3){
        matriz["A"][i] = 0;
    }else{
        if(i < 6){
            matriz["B"][i - 3] = 0;
        }else{
            matriz["C"][i - 6] = 0;
        }
    }
}

$(document).ready(function(){
    $("#btnIniciar").click(function(){ //Quando o "botão" inciar é clicado

        if($("#player1").val() == "" || $("#player2").val() == ""){
            alert("Erro: O nome para os dois jogadores deve ser definido.");
            return false;
        }

        //Insere dentro dos spans os nomes passados nos inputs
        $("#nomePlayer1").html($("#player1").val());
        $("#nomePlayer2").html($("#player2").val());

        //mostrar tabuleiro do jogo da velha e esconde menu onde se inicia o jogo
        $("#paginaInicial").hide();
        $("#jogo").show();

    });

    $(".jogada").click(function(){ //Quando o usuário clicar em uma das posições do tabuleiro
        var id = this.id; //retorna o id do campo clicado
        $("#"+id).off(); //Impossibilita que o elemento clicado seja clicado novamente
        jogada(id);
    });

    function jogada(id){
        /*Sempre que o jogador 1 jogar, seu ponto será igual a -1, para que a verificação de um 
        possível ganhador a cada rodada fique mais simples, bastando somar os valores da linhas
        colunas e diagonais separadamente e verificar se em algum dos casos, a soma é igual a -3 ou 3*/
        var icone = "";
        var ponto = 0;

        if((rodada % 2) == 1){ //Jogador um
            icone = "url(../img/marcacao_1.png)";
            ponto = -1;
        }else{ //jogador 2
            icone = "url(../img/marcacao_2.png)";
            ponto = 1;
        }
        rodada++;
        $("#"+id).css("background-image", icone);

        var linhaColuna = id.split("-"); //identificando qual a cordenada da marcacao,
        //o primeiro valor é armazenado na posicao 0 do array "linhaColuna" e o segundo é armazenado na posição seguinte
        
        matriz[linhaColuna[0]][linhaColuna[1]] = ponto; //linhaColuna[0] = linha e linhaColuna[1] = coluna
        verificar();
    }

    function verificar(){ //verifica combinações/se houve um jogador que completou o jogo

        //Horizontal
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos += matriz["A"][i];
        }
        ehGanhador(pontos);
        pontos = 0;

        for(var i = 1; i <= 3; i++){
            pontos += matriz["B"][i];
        }
        ehGanhador(pontos);
        pontos = 0;

        for(var i = 1; i <= 3; i++){
            pontos += matriz["C"][i];
        }
        ehGanhador(pontos);

        //Vertical
        for(var i = 1; i <= 3; i++){
            pontos = 0;
            pontos += matriz["A"][i];
            pontos += matriz["B"][i];
            pontos += matriz["C"][i];

            ehGanhador(pontos);
        }

        pontos = 0;
        pontos = matriz["A"][1] + matriz["B"][2] + matriz["C"][3];
        ehGanhador(pontos);

        pontos = 0;
        pontos = matriz["A"][3] + matriz["B"][2] + matriz["C"][1];
        ehGanhador(pontos);
    }

    function ehGanhador(pontos){
        if(pontos == -3){
            alert($("#player1").val() + " ganhou");
            $(".jogada").off(); //Desabilita a possibilidade de clique de todos os campos
        }else if(pontos == 3){
            alert($("#player2").val() + " ganhou");
            $(".jogada").off();
        }
    }
});