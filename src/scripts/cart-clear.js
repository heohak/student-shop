/* Removing from cart functionality. */
const cartClearElement = document.querySelector(".cart-clear-button");

cartClearElement.addEventListener("click", clearCart);

function clearCart(event) {
    event.preventDefault();  // disable opening link

    localStorage.clear();

    location.reload();
}