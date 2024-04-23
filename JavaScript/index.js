//1번 페이지 이동
const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", function () {
  const homePageUrl = "index.html";

  window.location.href = homePageUrl;
});

//5번 로컬스토리지 정보 가져오기
document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector("#cart-table tbody");

  function addListToCart() {
    const confirmedItems = JSON.parse(localStorage.getItem("item")); // []
    confirmedItems.forEach((confirmedItem) => {
      const addNewRow = document.createElement("tr");

      const addItemCheckbox = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "item-checkbox";
      addItemCheckbox.appendChild(checkbox);

      const addItemImg = document.createElement("td");
      const itemImgSrc = document.createElement("img");
      itemImgSrc.src = confirmedItem.image;
      addItemImg.appendChild(itemImgSrc);

      const addItemName = document.createElement("td");
      addItemName.textContent = confirmedItem.name;

      const addItemPrice = document.createElement("td");
      addItemPrice.textContent = confirmedItem.price;

      const addItemCategory = document.createElement("td");
      addItemCategory.textContent = confirmedItem.categoryName;

      const addItemBuyBtn = document.createElement("tb");
      const BuyBtn = document.createElement("input");
      BuyBtn.type = "button";
      BackBtn.name = "item-buy";
      addItemBuyBtn.appendChild(BuyBtn);

      addNewRow.append(
        addItemCheckbox,
        addItemImg,
        addItemName,
        addItemPrice,
        addItemCategory,
        addItemBuyBtn
      );

      tbody.appendChild(addNewRow);
      console.log(confirmedItem);
    });
  }
  console.log(tbody);
  addListToCart();
});

const cartToHomeBtn = document.querySelector(".go-to-home-button");

cartToHomeBtn.addEventListener("click", function () {
  const TohomePageUrl = "index.html";

  window.location.href = TohomePageUrl;
});
