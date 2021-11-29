var resul=86;
var retorno='';

if (resul>100 || resul<0){
    retorno='ERRO, nota invalida'
}
else if (resul>=90){
    retorno='A'
}
else if(resul>=80){
    retorno='B'
}
else if(resul>=70){
    retorno='C'
}
else if(resul>=60){
    retorno='D'
}
else if(resul>=50){
    retorno='E'
}
else if(resul<50){
    retorno='F'
}

console.log(retorno)