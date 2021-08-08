function CalculateFibo(numbers) {
    let result = 0;
    for (let i = 2; i < 10; i++) {
        numbers[i] = numbers[i - 1] + numbers[i - 2];


    }
    return numbers;
}
var numbers = [1, 0];
let FinalResult = CalculateFibo(numbers);
console.log(numbers);
