//Função hack para fazer todos os calculos
function calculate(){
    var display = document.getElementById("display").innerHTML;
    if(display){
        document.getElementById('display').innerHTML = eval(display);
    } 
}

//Função para inserir
function insert(num){
    document.getElementById("display").innerHTML+= num;
}

//Função para limpar 
function clean(){
    document.getElementById("display").innerHTML= "";
}

//Função para dar rollback
function back(){
    var display= document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= display.substring(0, display.length -1);
}