// import { includeHTML } from "./include.js";
// includeHTML();

const bt = document.querySelectorAll(".minus_button");
const bt_1 = document.querySelectorAll(".plus_button");
const ct = document.querySelectorAll(".count");
const count_bt = document.querySelectorAll(".total_price");
const btn1 = document.querySelector(".button_fixed3");
const btf2 = document.querySelector(".button_fixed2");
const showpping = document.querySelector(".basket_button");
let count = 1;
let price = 2480;

bt_1.forEach(function (value, index) {
  value.addEventListener("click", () => {
    count += 1;
    ct.forEach(function (value, index) {
      value.textContent = `${count}`;
      let totalPrice = count * price;
      count_bt[index].textContent = `${totalPrice.toLocaleString()}원`;
    });
  });
});

bt.forEach(function (value, index) {
  value.addEventListener("click", () => {
    if (count >= 2) count -= 1;

    ct.forEach(function (value, index) {
      value.textContent = `${count}`;
      let totalPrice = count * price;
      count_bt[index].textContent = `${totalPrice.toLocaleString()}원`;
    });
  });
});
btn1.addEventListener("click", () => {
  // 토글 할 버튼 선택 (btn1)
  // btn1 숨기기 (display: none)
  if (btf2.style.display === "block") {
    btf2.style.display = "none";
  }
  // btn` 보이기 (display: block)
  else {
    btf2.style.display = "block";
  }
});

showpping.addEventListener("click", () => {
  alert("로그인이 필요합니다");
});

// fix 하단 장바구니 바 보이고 사라지기
function basketgo() {
  const productBase = document.querySelector(".num1"); //헤더부분획득
  const productBaseHeight = productBase.clientHeight; //헤더높이
  document.addEventListener("scroll", onScroll, { passive: true }); //스크롤 이벤트
  function onScroll() {
    const scrollposition = pageYOffset; //스크롤 위치
    const basket = document.querySelector(".button_fixed"); //하단
    const basketBox = document.querySelector(".button_fixed2"); //네비게이션
    if (productBaseHeight <= scrollposition) {
      //만약 헤더높이<=스크롤위치라면
      basket.style.display = "block"; //fix 메뉴 보이기
    } else {
      //그 외의 경우
      basket.style.display = "none"; //fix 메뉴 가리기
      basketBox.style.display = "none"; //fix 메뉴 가리기
    }
  }
}
basketgo();
