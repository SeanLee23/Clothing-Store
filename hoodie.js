document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');
    
    // Dummy data for products (replace this with your actual product data)
    const products = [
        { name: "Hoodie 1", price: 29.99, image: "images/hoodie 1.jpg" },
        { name: "Hoodie 2", price: 29.99, image: "images/hoodie 2.jpg" },
        { name: "Hoodie 3", price: 29.99, image: "images/hoodie 3.jpg" },
        { name: "Hoodie 4", price: 29.99, image: "images/hoodie.jpg" },
        { name: "Hoodie 5", price: 39.99, image: "images/hoodie 4.jpg" },
        { name: "Hoodie 6", price: 39.99, image: "images/hoddie 5.jpg" }        
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