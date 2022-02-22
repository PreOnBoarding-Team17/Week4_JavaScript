let winWidth;
let curFlag;
const bannerItem = document.querySelectorAll(".carousel-item");

window.onload = function () {
  winWidth = window.innerWidth;
  // console.log("hi", window.innerWidth);
  curFlag = window.innerWidth > 1024 ? true : false;
  if (winWidth > 1024) {
    bannerItem[0].classList.add("active");
    bannerItem[1].classList.add("active");
    carouselInner.style.width = window.innerWidth;
    curFlag = true;
  } else if (winWidth <= 1024) {
    bannerItem[1].classList.remove("active");
    handleCarousel();
    curFlag = false;
  }
  // handleCarousel();
};

const carouselInner = document.querySelector(".carousel-inner");

const handleCarousel = () => {
  carouselInner.style.width = `${(window.innerWidth - 40) * 2}px`;
};

window.onresize = function () {
  winWidth = window.innerWidth;
  if (curFlag && winWidth > 1024) {
    bannerItem[0].classList.add("active");
    bannerItem[1].classList.add("active");
    carouselInner.style.width = window.innerWidth;
    curFlag = false;
  } else if (winWidth <= 1024) {
    bannerItem[1].classList.remove("active");
    curFlag = true;
    handleCarousel();
  }
};

let curPos = 0;
let postion = 0;
let start_x, end_x, x;
let IMAGE_WIDTH = window.innerWidth - 40;
let pressed = false;
const images = document.querySelector(".carousel-inner");
const sliderNav = document.querySelectorAll(".banner__carousel__nav-item");

images.addEventListener("touchstart", touch_start);
images.addEventListener("touchend", touch_end);
images.addEventListener("mousedown", (e) => {
  e.preventDefault();
  pressed = true;
  start_x = e.offsetX - images.offsetLeft;
  console.log(
    e.offsetX,
    images.offsetLeft,
    parseInt(e.offsetX) - parseInt(images.offsetLeft)
  );
  images.style.cursor = "grabbing";
});
images.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  images.style.cursor = "grab";
});
images.addEventListener("mouseup", (e) => {
  e.preventDefault();
  images.style.cursor = "grab";
});

function prev() {
  if (curPos > 0) {
    postion += window.innerWidth - 40;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
  sliderNav[0].classList.add("active");
  sliderNav[1].classList.remove("active");
}
function next() {
  if (curPos < 1) {
    postion -= window.innerWidth - 40;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
  sliderNav[1].classList.add("active");
  sliderNav[0].classList.remove("active");
}
window.addEventListener("mouseup", (e) => {
  e.preventDefault();
  if (x - start_x < 0 && x - start_x > window.innerWidth / 3) {
    console.log("first");
    next();
  } else if (x - start_x > 0 && x - start_x < window.innerWidth / 3) {
    console.log("second");
    prev();
  } else {
    console.log("third");
    if (sliderNav[0].classList.contains("active")) {
      console.log("prev");
      setTimeout(() => prev(), 100);
      // prev();
    } else {
      console.log("next");
      setTimeout(() => next(), 100);
      // next();
    }
  }
  pressed = false;
});
images.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;

  console.log(start_x, x, start_x - x);
  images.style.transform = `translateX(${x - start_x}px)`;
});

function touch_start(event) {
  start_x = event.touches[0].pageX;
  console.log("a");
}

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if (start_x > end_x) {
    next();
  } else {
    prev();
  }
}

// slider nav

sliderNav[0].addEventListener("click", () => prev());
sliderNav[1].addEventListener("click", () => next());
