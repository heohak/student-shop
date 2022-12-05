/* Adding to cart functionality. */

const selectedSizeElement = document.querySelector(".size-selector");
const addToCartElement = document.querySelector(".add-to-cart");

addToCartElement.addEventListener("click", addToCartClick);

function addToCartClick(event) {
    const selectedSize = selectedSizeElement.value;

    if (selectedSize === "Vali suurus") {
        event.preventDefault();
        alert("Palun valige suurus.");
    } else {
        event.preventDefault();

        addToCart(getProductName(), selectedSize, getProductURL(), getProductImageURL());
    }
}

function addToCart(productName, productSize, productURL, productImageURL) {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart
    cart.push({
        name: productName,
        size: productSize,
        url: productURL,
        imageUrl: productImageURL,
    });

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}


function getProductName() {
    return document.querySelector(".product-title").innerText;
}

function getProductURL() {
    return document.location.href;
}

function getProductImageURL() {
    return document.querySelector("#ProductImg").src;
}

