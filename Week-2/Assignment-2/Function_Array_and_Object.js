// Calculate the average price of the products in the data.
function avg(data) { 
    const average = data.products
        .reduce((total, product) => total + product.price, 0) / data.size;
    return average;
}

console.log( 
    avg({
        size: 3, 
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
); // should print the average price of all products