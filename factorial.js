
// 7! calcculation

// var factorial = 1;
// for (var i = 1; i <= 3; i++) {
//     console.log(i);
//     factorial = factorial * i;

// }
// console.log("result is: ", factorial);

var factorial = 1;
function result(number) {
    for (var i = 1; i <= number; i++) {
        console.log(i);
        factorial = factorial * i;

    }
    return factorial;
}

var FactirialResult = result(3);
console.log('Rslt:', FactirialResult);

