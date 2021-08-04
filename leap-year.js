function LeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}


let result = LeapYear(2024);
if (result == false) {
    console.log('No leap Year');
}
else {
    console.log("yes.The year is leap year");
}

