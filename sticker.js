document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');
    
    // Dummy data for products (replace this with your actual product data)
    const products = [
        { name: "Sticker 1", price: 1.99, image: "images/sticker 1.jpg" },
        { name: "Sticker 2", price: 2.99, image: "images/sticker 2.jpg" },
        { name: "Sticker 3", price: 3.99, image: "images/sticker 3.jpg" },
        { name: "Sticker 4", price: 3.99, image: "images/sticker 4.jpg" },
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