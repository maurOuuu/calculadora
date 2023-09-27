btn.addEventListener("click", function(){

var a = parseInt (valorA.value);
var b = parseInt(valorB.value);
var op = operação.value;


if(op == 1){
    //alert(a+b);
    resultado.innerHTML ="RESULTADO: " + (a+b);
}


if(op == 2){
    //alert(a+b);
    resultado.innerHTML ="RESULTADO: " + (a-b);
}


if(op == 3){
    //alert(a+b);
    resultado.innerHTML ="RESULTADO: " + (a*b);
}


if(op == 4){
    //alert(a+b);
    resultado.innerHTML ="RESULTADO: " + (a/b);
}


});