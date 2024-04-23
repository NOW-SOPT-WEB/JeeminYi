//3번 sidebar
const sideBar = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".menu-btn");
const BackBtn = document.querySelector(".material-symbols-outlined");

function openToggle() {
  sideBar.classList.toggle("active");
}

sideBarBtn.addEventListener("click", openToggle);
BackBtn.addEventListener("click", function () {
  //왜 여기서는 그냥 openToggle을 바로 쓰지 않는지 궁금합니다.
  openToggle();
});

const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", function () {
  const cartPageUrl = "cart.html";

  window.location.href = cartPageUrl;
});
