const modal = document.querySelector(".modal");
const cardButton = document.querySelector("#cart-button");
const closeButton = document.querySelector(".close");

function toggleModal() {
  if (modal) {
    modal.classList.toggle("is-open");
  } else {
    console.warn("Modal not found");
  }
  
}

if (cardButton) {
  cardButton.addEventListener("click", toggleModal);
}
if (closeButton) {
  closeButton.addEventListener("click", toggleModal);
}

new WOW().init();
