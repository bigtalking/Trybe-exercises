let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var res=0;

for (var x of numbers){
    res += x
}
var med=res/numbers.length

if (med>20){
    console.log('Valor maior que 20')
}
else {
    console.log('Valor menor ou igual a 20')
}
