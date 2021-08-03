function IsMyNumberEven(number) {
    if (number % 2 == 0) {
        return true;

    }
    return false;

}

var number = 121;//Variable declare
var result = IsMyNumberEven(number);//function call
if (result == true) {
    console.log('We are EVEN');
}
else {
    console.log('Oh shit!! We are ODD');
}
