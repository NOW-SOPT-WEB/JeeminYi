// //상수 데이터 랜더링하기
import { ITEM_LIST } from "./constants.js";

//페이지 이동
const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", function () {
  const homePageUrl = "index.html";

  window.location.href = homePageUrl;
});

// //상수 데이터 > 전체 상품 넣기
const productContainer = function () {
  const productSection = document.querySelector(".wishList");
  const productImg = ITEM_LIST.map((item) => {
    return `
    <article class = "wishItem" data-category="${item.category}" data-id="${
      item.id
    }">
      <img src=${`img/${item.category}/${item.img}`}>
      <span class="likeBtn">♥</span>
      <h4>${item.item_name}</h4>
      <p>${item.item_price}</p>
    </article>
    `;
  });
  productSection.innerHTML = productImg.join("");
};
productContainer();

// item 클릭 시 알럿 노출
document.addEventListener("DOMContentLoaded", function () {
  const SHOPPING_LIST = document.querySelectorAll(".wishItem");
  SHOPPING_LIST.forEach(function (productList) {
    productList.addEventListener("click", function (event) {
      const itemId = productList.getAttribute("data-id");
      const imageSrc = productList.querySelector("img").src;
      const itemName = productList.querySelector("h4").textContent;
      const itemPrice = productList.querySelector("p").textContent;
      const itemCategory = productList.getAttribute("data-category");

      //확인버튼 눌렀을 경우
      const confirmed = confirm(`장바구니에 ${itemName} 담기!`);

      if (confirmed) {
        const productListInfo = {
          id: itemId,
          name: itemName,
          price: itemPrice,
          image: imageSrc,
          categoryName: itemCategory,
        };

        const cartItem = JSON.parse(localStorage.getItem("item")) || []; // [] 기존배열
        cartItem.push(productListInfo); // 기존배열 + 새아이템 => []
        localStorage.setItem("item", JSON.stringify(cartItem));
        alert("장바구니 담기 완료!");

        // window.location.href = "cart.html";
      } else {
        alert("장바구니 담기가 취소되었습니다");
      }
    });
  });
});
