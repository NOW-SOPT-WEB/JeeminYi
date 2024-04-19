//1번 페이지 이동
const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", function() {
    const homePageUrl = "index.html"

    window.location.href = homePageUrl;
});


//2번 nav filter
document.addEventListener("DOMContentLoaded", function() {

    const navButtons = document.querySelectorAll(".nav-button");
    const wishItems = document.querySelectorAll(".wish-img");


    function filterItems(category) {
        wishItems.forEach(function(item) {
            const itemCategory = item.getAttribute("data-filter");
            if (category === "all-things" || itemCategory === category) {
                item.style.display = "block";
                item.style.textAlign = "center"; // css 스타일 유지
            } else {
                item.style.display = "none";
            }
        });
    }

    // 버튼에 클릭 이벤트 리스너 추가
    navButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const filterCategory = button.getAttribute("data-filter-nav");
            filterItems(filterCategory);
        });
    });
});


//3번 sidebar
const sideBar = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".menu-btn");
const BackBtn = document.querySelector(".material-symbols-outlined");

function openToggle() {
    sideBar.classList.toggle('active');
}

sideBarBtn.addEventListener('click', openToggle);
BackBtn.addEventListener('click', function() { //왜 여기서는 그냥 openToggle을 바로 쓰지 않는지 궁금합니다.
    openToggle();
});

const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", function() {
    const cartPageUrl = "cart.html"

    window.location.href = cartPageUrl;
})


//4번 item 클릭 시 알럿 노출
document.addEventListener("DOMContentLoaded", function(){
    const SHOPPING_LIST = document.querySelectorAll(".wish-img");

    SHOPPING_LIST.forEach(function(listItem) {
        listItem.addEventListener("click", function(event) {

            const imageSrc = listItem.querySelector("img").src;
            const itemName = listItem.querySelector(".item_name").textContent;
            const itemPrice = listItem.querySelector(".item_price").textContent;
            const itemCategory = listItem.getAttribute("data-filter");

            //확인버튼 눌렀을 경우
            const confirmed = confirm(`장바구니에 ${itemName} 담기!`);

            if (confirmed) {
                const listItemInfo = {
                    name : itemName,
                    price : itemPrice,
                    image : imageSrc,
                    categoryName : itemCategory,
                };
                localStorage.setItem('item',JSON.stringify(listItemInfo));
                alert('장바구니 담기 완료!');

                window.location.href = 'cart.html';
            } else {
                alert("장바구니 담기가 취소되었습니다");
            }
        })
    });
});

//5번 로컬스토리지 정보 가져오기
document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("#cart-table tbody");

    function addListToCart() {
        const confirmedItem = localStorage.getItem('item');
        if (confirmedItem) { //일단 로컬스토리지 값 가져오기 > 정보 불러오기 > 행 생성하기 > 셀마다 들어갈 값 정의 > 셀에 값 할당 > 함수 호출
            //정보 파싱
            const parseInfomation = JSON.parse(confirmedItem);
            //행 생성
            const addNewRow = document.createElement('tr');

            const addItemCheckbox = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'item-checkbox';
            addItemCheckbox.appendChild(checkbox);

            const addItemImg = document.createElement('td');
            const itemImgSrc = document.createElement('img');
            itemImgSrc.src = parseInfomation.image;
            addItemImg.appendChild(itemImgSrc);

            const addItemName = document.createElement('td');
            addItemName.textContent = parseInfomation.name;

            const addItemPrice = document.createElement('td');
            addItemPrice.textContent = parseInfomation.price;

            const addItemCategory = document.createElement('td');
            addItemCategory.textContent = parseInfomation.categoryName;

            const addItemBuyBtn = document.createElement('tb');
            const BuyBtn = document.createElement('input');
            BuyBtn.type = 'button';
            BackBtn.name = 'item-buy';
            addItemBuyBtn.appendChild(BuyBtn);

            addNewRow.append(addItemCheckbox, addItemImg, addItemName, addItemPrice, addItemCategory, addItemBuyBtn);

            tbody.appendChild(addNewRow);
            console.log(parseInfomation);
        }
    }
    console.log(tbody);
    addListToCart();
});
