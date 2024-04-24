// //nav filter
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-button");
  const productSection = document.querySelector(".wishList");

  function filterItems(category) {
    const productItems = productSection.querySelectorAll(".wishItem");
    productItems.forEach(function (item) {
      const itemCategory = item.getAttribute("data-category");
      if (category === "all" || itemCategory === category) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  // 버튼에 클릭 이벤트 리스너 추가
  navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filterCategory = button.getAttribute("data-filter-nav");
      filterItems(filterCategory);
    });
  });
});
