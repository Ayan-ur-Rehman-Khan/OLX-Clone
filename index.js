async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let { products } = data;
    let cardContainer = document.getElementById("cards");

    products.forEach(product => {
        let { title, description, price, images } = product;

        let card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${images[0]}" alt="Product Image">
            </div>
            <div class="product-details">
                <h2 class="product-title">${title}</h2>
                <div class="product-rating">★★★★☆ (12,345)</div>
                <div class="product-price">
                    $${price}
                    <small>$59.99</small>
                </div>
                <p class="product-description">${description}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

getData();
