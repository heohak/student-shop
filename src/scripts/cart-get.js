/* Getting from cart functionality. For building /cart page. */


/* Done at the load of cart page: */
const cartContainerElement = document.querySelector(".cart-products-container");

cartContainerElement.innerHTML = "";
addCartElementsToPage();
addCartTotalToPage();

if (cartContainerElement.innerHTML === "") {
    cartContainerElement.innerHTML = `<div class="cart-product-title">Ostukorv on tühi.</div>`;
    document.querySelector(".single-product-button").style = "display: none;";
    document.querySelector(".cart-total-price").style = "display: none;";
}
/* --------------------------- */

function addCartElementsToPage() {
    getCartObject().forEach(product => {
        // Add product to cart container
        cartContainerElement.innerHTML += `
<div class="cart-product">

    <div class="cart-product-image">
        <img src="${product.imageUrl}">
    </div>
    <div class="cart-product-title">${product.name} <span class="cart-product-size">(${product.size})</span></div>
    <div class="cart-product-price">${priceIntToString(product.price)}</div>

</div>`;

        // Add link to just added element
        cartContainerElement.lastChild.addEventListener("click", () => {
           document.location.assign(product.url);
        });
    });
}

function addCartTotalToPage() {
    document.querySelector(".cart-total-price").innerHTML = "Kokku: " + priceIntToString(getCartTotal());
}

function getCartTotal() {
    let total = 0;
    getCartObject().forEach(product => {
        total += product.price;
    });

    total = total.toFixed(2);
    return total
}

function priceIntToString(price) {
    return String(price).replace(".", ",") + "€";
}

function getCartObject() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}
