let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let imp=0

for (var i of numbers){
    if (i%2==1){
        imp+=1
    }
}

if (imp>0){
    console.log(imp)
}
else {
    console.log('Nenhum valor impar encontrado')
}
