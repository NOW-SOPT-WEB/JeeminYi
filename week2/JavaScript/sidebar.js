//sidebar
const sideBar = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".menu-btn");
const BackBtn = document.querySelector(".material-symbols-outlined");

function openToggle() {
  sideBar.classList.toggle("active");
}

sideBarBtn.addEventListener("click", openToggle);
BackBtn.addEventListener("click", function () {
  openToggle();
});

const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", function () {
  const cartPageUrl = "cart.html";

  window.location.href = cartPageUrl;
});
