
function LowestElement(ages) {
    let largest = 0;
    for (let i = 0; i < ages.length; i++) {
        let element = ages[i];
        if (largest < element) {
            largest = element;

        }


    }
    return largest;

}
let ages = [1, 5, 2, 10];
let result = LowestElement(ages);
console.log(result);

