document.addEventListener("DOMContentLoaded", function() {
    const productGrid = document.getElementById('productGrid');
    
    // Dummy data for featured products (replace this with your actual product data)
    const featuredProducts = [
        { name: "Thrive Flask", price: 19.99, image: "images/bottle 1.jpg" },
        { name: "Thrive Shirt", price: 29.99, image: "images/shirt 2.jpg" },
        { name: "Thrive Hoodie", price: 39.99, image: "imgaes/hoodie 3.jpg" }
    ];

    // Display featured products
    featuredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });
});
