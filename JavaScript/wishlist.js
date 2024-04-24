let total = 0;
//로컬스토리지 정보 가져오기
document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.querySelector("#cart-table tbody");

  function addListToCart() {
    const confirmedItems = JSON.parse(localStorage.getItem("item")); // []
    confirmedItems.forEach((confirmedItem) => {
      total += Number(confirmedItem.price);
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
      addItemPrice.textContent = Number(confirmedItem.price).toLocaleString();

      const addItemCategory = document.createElement("td");
      addItemCategory.textContent = confirmedItem.categoryName;

      const addItemBuyBtn = document.createElement("td");
      const BuyBtn = document.createElement("input");
      BuyBtn.type = "button";
      BuyBtn.name = "item-delete";
      BuyBtn.value = "삭제";
      BuyBtn.addEventListener("click", () => {
        const currentId = confirmedItem.id;

        const cartItem = JSON.parse(localStorage.getItem("item")) || []; // [] 기존배열
        cartItem.forEach((item, index) => {
          console.log("idx", index, "item", item);
          if (item.id === currentId) {
            cartItem.splice(index, 1);
          }
        });
        localStorage.setItem("item", JSON.stringify(cartItem));
        location.reload();
      });
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
    console.log(total);
  }
  console.log(tbody);
  addListToCart();
});

const cartToHomeBtn = document.querySelector(".go-to-home-button");

cartToHomeBtn.addEventListener("click", function () {
  const TohomePageUrl = "index.html";

  window.location.href = TohomePageUrl;
});

//모달 노출하기
const modal = document.querySelector(".buyModal");
const modalOpenBtn = document.querySelector(".buy-button");
const modalCloseBtn = document.querySelector(".material-symbols-outlined");
const purchaseBtn = document.querySelector(".buyModalButton");
const modalListArea = document.querySelector(".buyListArea");

//구매하기 버튼 눌렀을 때 모달 노출하기
modalOpenBtn.addEventListener("click", () => {
  addListToModal();
  modal.classList.add("on");
});
//x 버튼 눌렀을 때 모달 사라지기
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("on");
});
//모달 내 구매 확정 버튼 눌렀을 때 알럿 노출하기
purchaseBtn.addEventListener("click", () => {
  alert("선물 구매 완료~! 야호");
  modal.classList.remove("on");
});

//모달 내 아이템 리스트 및 총 금액 표시
function addListToModal() {
  const purchaseItem = JSON.parse(localStorage.getItem("item"));

  const modalListArea = document.querySelector(".buyListArea");
  modalListArea.innerHTML = "";

  purchaseItem.forEach((item) => {
    const modalListItem = document.createElement("div");
    modalListItem.classList.add("modal-item");

    const modalItemImg = document.createElement("img");
    modalItemImg.src = item.image;

    const modalItemName = document.createElement("span");
    modalItemName.textContent = item.name;

    const modalItemPrice = document.createElement("span");
    modalItemPrice.textContent = Number(item.price).toLocaleString();

    modalListItem.append(modalItemImg, modalItemName, modalItemPrice);

    modalListArea.appendChild(modalListItem);
  });

  const totalPrice = document.createElement("div");
  totalPrice.classList.add("total-price");
  totalPrice.textContent = "총 금액: " + total.toLocaleString() + "원";

  modalListArea.appendChild(totalPrice);
}
