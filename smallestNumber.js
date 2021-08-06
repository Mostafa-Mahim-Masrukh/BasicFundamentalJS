function SmallestNumber(ages) {
    let smallest = 5;
    for (let i = 0; i < ages.length; i++) {
        let element = ages[i];
        if (smallest > element) {
            smallest = element;
        }

    }
    return smallest;
}



let ages = [5, 6, 90, 1, 2, 10];
let result = SmallestNumber(ages);
console.log('sobar chotojoner boyosh holo:', result);