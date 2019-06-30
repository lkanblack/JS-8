let num = 266219; 
let result = 1;

let numbers = num.toString().split(''); 

for (var i = 0; i < numbers.length; i++) {
    result = result * numbers[i] ** 3;
}
alert(result.toString().slice(0, 2));
