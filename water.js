document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');
    
    // Dummy data for products (replace this with your actual product data)
    const products = [
        { name: "Water Bottle 1", price: 19.99, image: "images/bottle 1.jpg" },
        { name: "Water Bottle 2", price: 29.99, image: "images/bottle 2.jpg" },
        { name: "Water Bottle 3", price: 29.99, image: "images/bottle 3.jpg" }
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