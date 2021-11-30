let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let tiny=0

for (var i of numbers){
    if (tiny==0){
        tiny=i
    }
    else{
        if (i<tiny){
            tiny=i
        }
    }
}
console.log(tiny)