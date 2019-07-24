function calcular() {
    var op = document.getElementById("operacao").value;
    var num1 = document.getElementById("nr1").value;
    var num2 = document.getElementById("nr2").value;

    if(num1 == "" || num1 == null || num2 == "" || num2 == null){
        alert("Erro: Insira valores válidos!");
        return false;
    }
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = null;

    switch (op) {
        case "1": //sub
            resultado = num1 - num2;
            break;
        case "2": //ad
            resultado = num1 + num2;
            break;
        case "3": //mult
            resultado = num1 * num2;
            break;
        case "4": //div
            if(num2 != 0){
                resultado = num1 - num2;
            }else{
                alert("Erro: É matemáticamente impossível dividir por 0!");
                return false;
            }
            break;
        default:
            alert("A opção selecionada é inválida");
            return false;
    }

    document.getElementById("resultado").value = resultado;
}