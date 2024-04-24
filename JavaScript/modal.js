//모달 노출하기
const modal = document.querySelector(".buyModal");
const modalOpenBtn = document.querySelector(".buy-button");
const modalCloseBtn = document.querySelector(".material-symbols-outlined");
const purchaseBtn = document.querySelector(".buyModalButton");
const buyListArea = document.querySelector(".buyListArea");

//구매하기 버튼 눌렀을 때 모달 노출하기
modalOpenBtn.addEventListener("click", () => {
  modal.classList.add("on");
  buyListArea.appendChild(total);
  console.log(total);
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
}
