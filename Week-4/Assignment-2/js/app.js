const productList = document.getElementById('product');

function ajax(src, callback) { 
    fetch(src)
        .then(response => response.json())
        .then(callback)

}
function render(data) {
    data.map(product => {
        const section = document.createElement('section');
        productList.appendChild(section);
        section.innerHTML = `
          <h2>${product.name}</h2>
          <p>\$${product.price}</p>
          <p>${product.description}</p>
        `
    })
}

ajax( 'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products', function (response) {
    render(response); }
); // you should get product information in JSON format and render data in the page