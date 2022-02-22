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

function handleChip(order) {
  while (chipListFirst.hasChildNodes()) {
    chipListFirst.removeChild(chipListFirst.firstChild);
  }
  while (chipListSecond.hasChildNodes()) {
    chipListSecond.removeChild(chipListSecond.firstChild);
  }
  if (order === 3) {
    chip[0].map((element) => {
      chipListFirst.appendChild(appendChip(element));
    });
    chip[1].map((element) => {
      chipListSecond.appendChild(appendChip(element));
    });
  } else if (order === 2) {
    chip[2].map((element) => {
      chipListFirst.appendChild(appendChip(element));
    });
    chip[0].map((element) => {
      chipListSecond.appendChild(appendChip(element));
    });
  } else {
    chip[1].map((element) => {
      chipListFirst.appendChild(appendChip(element));
    });
    chip[2].map((element) => {
      chipListSecond.appendChild(appendChip(element));
    });
  }
}

function handleChange(order) {
  mainImagePC.setAttribute(
    "style",
    `background-image: url('./Asset/Slider/Slider_${order}.jpeg')`
  );
  mainImageMobile.setAttribute(
    "style",
    `background-image: url('./Asset/Slider/Slider_${order}.jpeg')`
  );
  handleChip(order);

  if (order === 3) {
    subImageFirst.setAttribute(
      "style",
      `background-image: url('./Asset/Slider/Slider_1.jpeg')`
    );
    subImageSecond.setAttribute(
      "style",
      `background-image: url('./Asset/Slider/Slider_2.jpeg')`
    );
    subTitleFirst.innerText = title[0];
    subTitleSecond.innerText = title[1];
    subPriceFirst.innerText = price[0];
    subPriceSecond.innerText = price[1];
  } else if (order === 2) {
    subImageFirst.setAttribute(
      "style",
      `background-image: url('./Asset/Slider/Slider_3.jpeg')`
    );
    subImageSecond.setAttribute(
      "style",
      `background-image: url('./Asset/Slider/Slider_1.jpeg')`
    );
    subTitleFirst.innerText = title[2];
    subTitleSecond.innerText = title[0];
    subPriceFirst.innerText = price[2];
    subPriceSecond.innerText = price[0];
  } else {
    subImageFirst.setAttribute(
      "style",
      `background-image: url('./Asset/Slider/Slider_2.jpeg')`
    );
    subImageSecond.setAttribute(
      "style",
      `background-image: url('./Asset/Slider/Slider_3.jpeg')`
    );
    subTitleFirst.innerText = title[1];
    subTitleSecond.innerText = title[2];
    subPriceFirst.innerText = price[1];
    subPriceSecond.innerText = price[2];
  }
}

if (window.addEventListener) {
  nextButton.addEventListener("click", function (index) {
    if (index) {
      order++;
      if (order === 4) order = 1;
    }
    handleChange(order);
  });

  prevButton.addEventListener("click", function (index) {
    if (index) {
      order--;
      if (order === 0) order = 3;
    }
    handleChange(order);
  });
} else {
  nextButton.attachEvent("click", function (index) {
    if (index) {
      order++;
      if (order === 4) order = 1;
    }
    handleChange(order);
  });

  prevButton.attachEvent("click", function (index) {
    if (index) {
      order--;
      if (order === 0) order = 3;
    }
    handleChange(order);
  });
}
