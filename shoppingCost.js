
function budget(products) {
    let totalShoppingCost = 0;
    let productPrice = 0;
    for (let product of products) {
        // console.log(product.Price);
        let productPrice = product.Price * product.Quantity;
        totalShoppingCost = totalShoppingCost + productPrice;

    }
    // console.log(totalShoppingCost);
    return totalShoppingCost;
}




let products = [
    { name: 'Laptop', Price: 90000, Quantity: 1 },
    { name: 'Shirt', Price: 500, Quantity: 3 },
    { name: 'Watch', Price: 3500, Quantity: 2 }
];

let result = budget(products);
console.log(result);
