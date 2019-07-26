$(document).ready(function(){
    /*$("#campo1").keydown(function(){ //detecta todas teclas
        alert("Botão foi pressionado");
    });
    $("#campo1").keypress(function(){ //desconsidera algumas teclados especiais
        alert("Botão foi pressionado");
    });*/
    $("#campo1").keyup(function(){ //é disparado quando a tecla é liberada - detecta todas as teclas
        alert("Botão foi pressionado");
    });
    
});