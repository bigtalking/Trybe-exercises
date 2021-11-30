let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let big=0

for (var i of numbers){
    if (i>big){
        big=i
    }
}
console.log(big)