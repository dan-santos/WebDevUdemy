$(document).ready(function(){
    $("#div1").click(function (){
        alert("Elemento foi clicado!");
    });
    $("#div2").dbclick(function (){
        alert("Elemento foi clicado duas vezes");
    });
    $("#div3").mousedown(function (){
        alert("Elemento foi clicado, mas não necessariamente o botão esquerdo do mouse foi solto");
    });
    $("#div4").mouseover(function (){
        alert("Elemento está com o cursor do mouse sobre ele");
    });
    $("#div5").mouseout(function (){
        alert("O cursor do mouse saiu da área do elemento");
    });
});