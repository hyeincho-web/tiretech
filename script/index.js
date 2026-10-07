// more버튼을 누르면 sns내용이 더 보임
const moreBtn = document.querySelector(".moreBtn");
const itemWrap2 = document.querySelector(".itemWrap2");
const more = document.querySelector(".more");

moreBtn.addEventListener("click", function () {
  // console.log('function')
  itemWrap2.style.display = "block";
  more.style.display = "none";
});

// popup 버튼을 클릭하면 popup창 닫기
const popup = document.querySelector("#popup");
const popupClose = document.querySelector(".popup_close");
const todayCheck = document.querySelector("#popup input[type='checkbox']");

// document.querySelector(".popup_close").addEventListener("click", () => {
//   document.querySelector("#popup").style.display = "none";
// });

// 오늘 날짜 만들기
const today = new Date().toDateString();
const savedDate = localStorage.getItem("popupCloseDate");

// 오늘 이미 닫은 경우
if (savedDate === today) {
  popup.style.display = "none";
}

// 닫기 버튼 클릭
popupClose.addEventListener("click", function () {
  // ❗❗❗ function (e) 에서 e 없애고 e.preventDefault 없애니까 작동 됨
  console.log("닫기 클릭됨");

  // 체크되어 있다면 오늘 날짜 저장
  if (todayCheck.checked) {
    localStorage.setItem("popupCloseDate", today);
    // ⬆ "오늘 날짜를 브라우저에 기억해"
  }

  popup.style.display = "none";
  console.log(localStorage.getItem("popupCloseDate"));
});

/* 프롬프트 내용 */
