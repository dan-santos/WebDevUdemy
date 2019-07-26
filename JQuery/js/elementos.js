function exibirTag(tag){
    $(tag).show();
}
function ocultarTag(tag){
    $(tag).hide();
}

function exibirClasse(classe){
    $('.'+classe).show(); // o . antes da classe serve para indicar ao jquery que estamos nos referindo a uma classe, e não a uma tag
}
function ocultarClasse(classe){
    $('.'+classe).hide();
}

function exibirId(id){
    $('#'+id).show(); // o # antes da classe serve para indicar ao jquery que estamos nos referindo a um id, e não a uma tag
}
function ocultarId(id){
    $('#'+id).hide();
}