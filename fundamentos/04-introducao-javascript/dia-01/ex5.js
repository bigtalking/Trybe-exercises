const a=56, b=47, c=-77
var tri= a+b+c

if (a<0 || b<0 || c<0){
    console.log('Angulo invalido')
}
else{
    if(tri==180){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
