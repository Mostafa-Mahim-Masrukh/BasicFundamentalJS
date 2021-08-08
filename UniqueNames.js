/*
function UniqueNames(values) {
    let NewArray = [];
    for (let i = 0; i < values.length; i++) {
        let element = values[i];
        if (NewArray.indexOf(element) == -1) {
            NewArray.push(element);
        }

    }
    return NewArray;
}



let values = [10, 20, 10, 40, 20, 50, 10, 20, 60, 70, 80, 10];
let result = UniqueNames(values);
console.log(result);
*/



function BiraniPabe(names) {
    let nameList = [];
    for (let i = 0; i < names.length; i++) {
        let manush = names[i];

        if (nameList.indexOf(manush) == -1) {
            nameList.push(manush);
        }
    }
    return nameList;
}


let names = ['akash', 'arshi', 'pixie', 'arshi', 'pixie', 'snowie', 'snowie', 'wasi'];

let result = BiraniPabe(names);
console.log('birani khaoar list:', result);