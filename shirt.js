document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');
    
    // Dummy data for products (replace this with your actual product data)
    const products = [
        { name: "Shirt 1", price: 19.99, image: "images/shirt 1.jpg" },
        { name: "Shirt 2", price: 19.99, image: "images/shirt 2.jpg" },
        { name: "Shirt 3", price: 19.99, image: "images/shirt 3.jpg" }
    ];

    // Display products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});