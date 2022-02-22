var prevButton = document.querySelector(".slider__button-left");
var nextButton = document.querySelector(".slider__button-right");
var mainImagePC = document.querySelector("#main-image_pc");
var mainImageMobile = document.querySelector("#main-image_mobile");
var subImageFirst = document.querySelector("#sub-image_first");
var subImageSecond = document.querySelector("#sub-image_second");
var subTitleFirst = document.querySelector("#title_first");
var subTitleSecond = document.querySelector("#title_second");
var subPriceFirst = document.querySelector("#price_first");
var subPriceSecond = document.querySelector("#price_second");
var chipListFirst = document.querySelector("#chipList_first");
var chipListSecond = document.querySelector("#chipList_second");

var order = 1;
var number = [1, 2, 3];
var title = [
  "취미 클래스(4주 과정)",
  "오아시스 리스(2/21~2/27)",
  "클래식 핸드타이드(2/28~3/6)",
];
var price = ["299,900원", "79,000원", "79,000원"];
var chip = [
  [
    { color: "cyan", place: "잠실점" },
    { color: "orange", place: "월계점" },
    { color: "blue", place: "구로점" },
    { color: "yellow", place: "송파점" },
    { color: "lightblue", place: "부산동래점" },
  ],
  [
    { color: "purple", place: "광화문점" },
    { color: "cyan", place: "잠실점" },
    { color: "orange", place: "월계점" },
    { color: "blue", place: "구로점" },
    { color: "yellow", place: "송파점" },
    { color: "lightblue", place: "부산동래점" },
  ],
  [
    { color: "blue", place: "구로점" },
    { color: "cyan", place: "잠실점" },
    { color: "orange", place: "월계점" },
    { color: "yellow", place: "송파점" },
    { color: "lightblue", place: "부산동래점" },
  ],
];

function appendChip(element) {
  var newChip = document.createElement("a");
  newChip.innerHTML = `${element.place}`;
  newChip.setAttribute("class", `slider__sub--summary-chip ${element.color}`);
  return newChip;
}

function handleChip(number) {
  while (chipListFirst.hasChildNodes()) {
    chipListFirst.removeChild(chipListFirst.firstChild);
  }
  while (chipListSecond.hasChildNodes()) {
    chipListSecond.removeChild(chipListSecond.firstChild);
  }
  chip[number[1] - 1].map((element) => {
    chipListFirst.appendChild(appendChip(element));
  });
  chip[number[2] - 1].map((element) => {
    chipListSecond.appendChild(appendChip(element));
  });
}

function handleChange(number) {
  mainImagePC.setAttribute(
    "style",
    `background-image: url('./Asset/Slider/Slider_${number[0]}.jpeg')`
  );
  mainImageMobile.setAttribute(
    "style",
    `background-image: url('./Asset/Slider/Slider_${number[0]}.jpeg')`
  );
  subImageFirst.setAttribute(
    "style",
    `background-image: url('./Asset/Slider/Slider_${number[1]}.jpeg')`
  );
  subImageSecond.setAttribute(
    "style",
    `background-image: url('./Asset/Slider/Slider_${number[2]}.jpeg')`
  );
  subTitleFirst.innerText = title[number[1] - 1];
  subTitleSecond.innerText = title[number[2] - 1];
  subPriceFirst.innerText = price[number[1] - 1];
  subPriceSecond.innerText = price[number[2] - 1];
  handleChip(number);
}

function handlePlus() {
  var firstNumber = number[0];
  var secondNumber = number[1];
  var thirdNumber = number[2];
  number[1] = firstNumber;
  number[2] = secondNumber;
  number[0] = thirdNumber;
}

function handleMinus() {
  var firstNumber = number[0];
  var secondNumber = number[1];
  var thirdNumber = number[2];
  number[1] = thirdNumber;
  number[2] = firstNumber;
  number[0] = secondNumber;
}

if (window.addEventListener) {
  nextButton.addEventListener("click", function (index) {
    if (index) {
      handlePlus();
    }
    handleChange(number);
  });
  prevButton.addEventListener("click", function (index) {
    if (index) {
      handleMinus();
    }
    handleChange(number);
  });
} else {
  nextButton.attachEvent("click", function (index) {
    if (index) {
      handlePlus();
    }
    handleChange(number);
  });
  prevButton.attachEvent("click", function (index) {
    if (index) {
      handleMinus();
    }
    handleChange(number);
  });
}
