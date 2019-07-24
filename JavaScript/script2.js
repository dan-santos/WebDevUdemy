//Aqui colocarei apenas funcionalidades que eu não conhecia em outras linguagens

//Vetor multidimensional

var lista_coisas = Array();

lista_coisas["carros"] = Array();
lista_coisas["motos"] = Array();

lista_coisas["carros"][1] = "BMW E36";
lista_coisas["carros"][2] = "VW Fusca";
lista_coisas["carros"][3] = "Mercedes-Benz E190 Evo2";

lista_coisas["motos"][1] = "7 Galo";
lista_coisas["motos"][2] = "Hayabusa";
lista_coisas["motos"][3] = "H-D XR750";

document.write(lista_coisas["carros"]);
document.write("<br/>");
document.write(lista_coisas["motos"]);
document.write("<br/>");

/*
Operadores de comparação

== igual
=== igual e identico
!= <> diferente
!== não identico
< menor
> maior
<= menor ou igual
>= maior ou igual 

Operadores lógicos
&& e
|| ou
! negação (inverte o resultado da expressão)
*/

var x = 5;
var y = '5';
var ehIgualeIdentico = (x === y);
document.write(ehIgualeIdentico);

var nota = prompt("Digite a sua nota (0 a 10):");
nota = parseInt(nota); //força que a variável nota seja necessariamente inteiro
var media = 7;

if(nota > media){
    alert("Sua nota ("+nota+") é maior que a média ("+media+")");
}else if(nota < media){
    alert("Sua nota ("+nota+") é menor que a média ("+media+")");
}else{
    alert("Sua nota ("+nota+") é igual a média");
}

