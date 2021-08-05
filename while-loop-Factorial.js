/*

var i = 0;
while (i < 7) {
    //statement
    i++;
}

*/


/*

var factorial = 1;
function FactorilaCalculation(number) {
    var i = 1;
    while (i <= number) {
        // console.log(i);
        factorial = factorial * i;
        i++;
    }
    return factorial;

}
var InputValue = 4;
var result = FactorilaCalculation(InputValue);
console.log(result);

*/


// 4 * 3 * 2 * 1=24


function FactorilaCalculation(number) {
    var factorial = 1;
    var i = number;
    while (i >= 1) {
        // console.log(i);
        factorial = factorial * i;
        i--;
    }
    return factorial;

}
var InputValue = 2;
var result = FactorilaCalculation(InputValue);
console.log(result);



