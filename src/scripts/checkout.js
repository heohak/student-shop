/* Fake checkout action. Clear cart and go to main page. */
const payButtonElement = document.querySelector(".pay-button");

payButtonElement.addEventListener("click", pay);

function pay(event) {
    event.preventDefault();
    alert("Makse sooritatud! Aitäh!");
    localStorage.clear();
    document.location.assign(document.baseURI);
}
