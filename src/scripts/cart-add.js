/* Adding to cart functionality. */
const selectedSizeElement = document.querySelector(".size-selector");
const addToCartElement = document.querySelector(".add-to-cart");

addToCartElement.addEventListener("click", addToCartClick);

function addToCartClick(event) {
    const selectedSize = selectedSizeElement.value;

    if (selectedSize === "Vali suurus") {
        event.preventDefault()  // disable opening cart when size not selected
        alert("Palun valige suurus.");
    } else {
        addToCart(getProductName(), selectedSize, getProductPrice(), getProductURL(), getProductImageURL());
    }
}

function addToCart(productName, productSize, productPrice, productURL, productImageURL) {
    // Get the current cart from localStorage
    let cart = getCartObject();

    // Add the new product to the cart
    cart.push({
        name: productName,
        size: productSize,
        price: productPrice,
        url: productURL,
        imageUrl: productImageURL,
    });

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartObject() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function getProductName() {
    return document.querySelector(".product-title").innerText;
}

function getProductPrice() {
    let price = document.querySelector(".product-price").innerText;
    price = price.replace(",", ".").replace("€", "");
    price = Number(price);
    return price
}

function getProductURL() {
    return document.location.href;
}

function getProductImageURL() {
    return document.querySelector("#product-image-selected").src;
}
