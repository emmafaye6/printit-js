const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
let dotsContainer = document.getElementsByClassName("dots")[0];
const slideText = document.querySelector("#banner > p");

// generating navigation dots

function generateDots() {
  dotsContainer.classList.add("dots");
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

    if (i == 0) {
      dot.classList.add("dot_selected");
    }
  }
}

// telling the browser to generate dots only when page is loaded

window.addEventListener("load", function (a) {
  generateDots();
});

let slideIndex = 0;

// i use this function to declare all reusable variables

function slideElements() {
  let image = document.getElementsByClassName("banner-img")[0];
  image.src = `/assets/images/slideshow/${slides[slideIndex].image}`;

  let slideText = document.querySelector("#banner p");
  slideText.innerHTML = slides[slideIndex].tagLine;
}

// adding a listener for a click on right arrow

rightArrow.addEventListener("click", function (event) {
  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }

  slideElements();

  let dots = document.getElementsByClassName("dot");
  dots[slideIndex].classList.add("dot_selected");

  if (slideIndex == 0) {
    dots[slides.length - 1].classList.remove("dot_selected");
  } else {
    dots[slideIndex - 1].classList.remove("dot_selected");
  }
});

// adding a listener for a click on left arrow

leftArrow.addEventListener("click", function (event) {
  if (slideIndex == 0) {
    slideIndex = slides.length;
  }

  slideIndex = slideIndex - 1;
  slideElements();

  let dots = document.getElementsByClassName("dot");
  dots[slideIndex].classList.add("dot_selected");

  if (slideIndex == slides.length - 1) {
    dots[0].classList.remove("dot_selected");
  } else {
    dots[slideIndex + 1].classList.remove("dot_selected");
  }
});
