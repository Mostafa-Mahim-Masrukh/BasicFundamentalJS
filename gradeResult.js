function ResultCalculation(number) {
    if (number == 0 || number < 50) {
        console.log('F');
        result = 'F';
    }
    else if (number == 50 || number < 60) {
        console.log("D");

    }
    else if (number == 60 || number < 70) {
        console.log("C");
        result = "C";
    }
    else if (number == 70 || number < 80) {
        console.log("B");
        result = "B";
    }
    else if (number == 80 || number < 90) {
        console.log("A");
        result = "A";
    }
    else if (number == 90 || number < 101) {
        console.log("A+");
        result = "A+";
    }
    return result;
}
var finalGrade = ResultCalculation(89);
console.log('result is', finalGrade);
