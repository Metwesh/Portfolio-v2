/* 
I'm dividing these JS files for readability only.
The files are being bundled & minified with the build script in the package.json file.
*/
class IntervalClass {
  constructor() {
    this.handle = 0;
  }
  static start(func, ms) {
    this.stop();
    this.handle = setInterval(func, ms);
  }
  static stop() {
    if (this.handle) {
      clearInterval(this.handle);
      this.handle = 0;
    }
  }
}

const displayImgContainer = document.querySelector("#displayImgContainer");
const displayImages = document.querySelectorAll(".display-img");
const displayTextContainer = document.querySelector("#displayTextContainer");
const displayTextWrapper = document.querySelectorAll(".display-text-wrapper");
const displayTextArea = document.querySelectorAll(".display-text-area");
const headingText = document.querySelectorAll(".heading-text");
const slideshowItems = document.querySelectorAll(".slideshow-item");
const closeContainers = document.querySelectorAll(".close-container");
const autoPlaySlideShow = document.querySelector("#autoPlaySlideShow");
const flipCardButtonContainers = document.querySelectorAll(".button-container");
const disabledButtons = document.querySelectorAll(".disabled");

const TITLES = [
  "Online Bookstore",
  "Clinic website",
  "Budget calculator",
  "Face detector",
  "Task handler",
];
const ANIMATION_INTERVAL = 250;
const PAUSE_TIME = 7000;

function animateOut(element) {
  element.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(90deg)" }],
    {
      duration: ANIMATION_INTERVAL,
      iterations: 1,
    }
  );
  element.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: ANIMATION_INTERVAL,
    iterations: 1,
  });
}

function animateIn(element) {
  element.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: ANIMATION_INTERVAL,
    iterations: 1,
  });
  element.animate(
    [{ transform: "rotateY(-90deg)" }, { transform: "rotateY(0)" }],
    {
      duration: ANIMATION_INTERVAL,
      iterations: 1,
    }
  );
}

function slideOut(element) {
  element.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(20rem)" }],
    {
      duration: ANIMATION_INTERVAL,
      iterations: 1,
    }
  );
  element.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: ANIMATION_INTERVAL,
    iterations: 1,
  });
}

function slideIn(element) {
  element.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: ANIMATION_INTERVAL,
    iterations: 1,
  });
  element.animate(
    [{ transform: "translateX(-20rem)" }, { transform: "translateX(0)" }],
    {
      duration: ANIMATION_INTERVAL,
      iterations: 1,
    }
  );
}

function animatePseudoElement(element, pseudoElement, start, end) {
  if (screen.size < 669) return;
  element.animate(
    {
      transform: [`translateY(${start}rem)`, `translateY(${end}rem)`],
    },
    {
      duration: ANIMATION_INTERVAL,
      iterations: 1,
      pseudoElement: pseudoElement,
    }
  );
}

function changeDisplayImg(curr, prev) {
  displayImages[curr].classList.add("show");
  displayImages[prev].classList.remove("show");
}

function changeDisplayText(curr, prev) {
  displayTextWrapper[curr].classList.add("show");
  displayTextWrapper[prev].classList.remove("show");
}

function flipCardToBack(index) {
  animateOut(displayImages[index]);
  setTimeout(() => {
    closeContainers[index].setAttribute("tabindex", 0);
    flipCardButtonContainers[index].children[0].style.visibility = "visible";
    flipCardButtonContainers[index].children[1].style.visibility = "visible";
    displayImages[index].classList.remove("show");
    animateIn(displayTextContainer);
    displayTextContainer.classList.add("show");
    displayTextWrapper[index].classList.add("show");
  }, ANIMATION_INTERVAL);
}

function flipCardToFront(index) {
  animateOut(displayTextContainer);
  setTimeout(() => {
    closeContainers[index].removeAttribute("tabindex");
    flipCardButtonContainers[index].children[0].style.visibility = "hidden";
    flipCardButtonContainers[index].children[1].style.visibility = "hidden";
    displayTextContainer.classList.remove("show");
    displayTextWrapper[index].classList.remove("show");
    animateIn(displayImages[index]);
    displayImages[index].classList.add("show");
  }, ANIMATION_INTERVAL);
}

function renderNewCard() {
  curr++;
  if (curr === 5) curr = 0;
  if (prev === 5) prev = 0;
  animateOut(displayImages[prev]);
  if (window.innerWidth < 669) {
    slideOut(headingText[prev]);
    animateOut(displayTextArea[prev]);
  } else displayTextWrapper[prev].classList.remove("show");
  animatePseudoElement(displayImgContainer, "::before", 0, -20);
  animatePseudoElement(displayImgContainer, "::after", 0, 20);
  if (curr > 0) slideshowItems[prev].dataset.active = false;
  setTimeout(() => {
    if (window.innerWidth > 669) {
      closeContainers[curr].removeAttribute("tabindex");
      flipCardButtonContainers[curr].children[0].style.visibility = "hidden";
      flipCardButtonContainers[curr].children[1].style.visibility = "hidden";
    } else {
      slideIn(headingText[curr]);
      animateIn(displayTextArea[curr]);
      displayTextWrapper[prev].classList.remove("show");
    }
    if (curr === 0) slideshowItems[4].dataset.active = false;
    displayTextWrapper[curr].classList.add("show");
    changeDisplayImg(curr, prev);
    animateIn(displayImages[curr]);
    displayImgContainer.dataset.title = TITLES[curr];
    animatePseudoElement(displayImgContainer, "::before", -20, 0);
    animatePseudoElement(displayImgContainer, "::after", 20, 0);
    slideshowItems[curr].dataset.active = true;
    prev++;
  }, ANIMATION_INTERVAL);
}

let curr = 0;
let prev = 0;

if (window.innerWidth < 669) {
  if (!displayTextContainer.classList.contains("show"))
    displayTextContainer.classList.add("show");
} else {
  closeContainers[0].removeAttribute("tabindex");
  flipCardButtonContainers[0].children[0].style.visibility = "hidden";
  flipCardButtonContainers[0].children[1].style.visibility = "hidden";
}

changeDisplayImg(0, 4);
changeDisplayText(0, 4);

for (let i = 0; i < slideshowItems.length; i++) {
  slideshowItems[i].addEventListener("click", () => {
    IntervalClass.stop();
    autoPlaySlideShow.checked = false;
    if (displayImages[curr].classList.contains("show") && curr !== i)
      animateOut(displayImages[curr]);
    else if (
      displayTextContainer.classList.contains("show") &&
      window.innerWidth > 669
    ) {
      animateOut(displayTextContainer);
      displayTextContainer.classList.remove("show");
      setTimeout(() => {
        animateIn(displayImages[i]);
      }, ANIMATION_INTERVAL);
    }
    if (window.innerWidth < 669 && curr !== i) {
      slideOut(headingText[curr]);
      animateOut(displayTextArea[curr]);
    }
    curr !== i && animatePseudoElement(displayImgContainer, "::before", 0, -20);
    curr !== i && animatePseudoElement(displayImgContainer, "::after", 0, 20);

    setTimeout(() => {
      if (window.innerWidth < 669 && curr !== i) {
        slideIn(headingText[i]);
        animateIn(displayTextArea[i]);
      }
      displayTextWrapper[curr].classList.remove("show");
      displayImages[curr].classList.remove("show");
      curr !== i && animateIn(displayImages[i]);
      displayImages[i].classList.add("show");
      displayTextWrapper[i].classList.add("show");

      if (curr !== i) {
        displayImgContainer.dataset.title = TITLES[i];
        animatePseudoElement(displayImgContainer, "::before", -20, 0);
        animatePseudoElement(displayImgContainer, "::after", 20, 0);
        slideshowItems[curr].dataset.active = false;
        slideshowItems[i].dataset.active = true;
        prev = curr = i;
      }
    }, ANIMATION_INTERVAL);
  });
  slideshowItems[i].addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      slideshowItems[i].click();
    }
  });
}

autoPlaySlideShow.addEventListener("click", () => {
  if (autoPlaySlideShow.checked) {
    setTimeout(() => {
      renderNewCard();
      IntervalClass.start(renderNewCard, PAUSE_TIME);
    }, ANIMATION_INTERVAL * 14);
  } else IntervalClass.stop();
  if (window.innerWidth < 669) return;
  for (let i = 0; i < displayTextWrapper.length; i++) {
    if (
      displayTextWrapper[i].classList.contains("show") &&
      displayTextContainer.classList.contains("show")
    )
      flipCardToFront(i);
  }
});

if (window.innerWidth > 669) {
  for (let i = 0; i < displayImages.length; i++) {
    displayImages[i].addEventListener("click", () => {
      IntervalClass.stop();
      autoPlaySlideShow.checked = false;
      flipCardToBack(i);
    });
  }

  for (let i = 0; i < closeContainers.length; i++) {
    closeContainers[i].addEventListener("click", () => {
      flipCardToFront(i);
      autoPlaySlideShow.checked = true;
      IntervalClass.start(renderNewCard, PAUSE_TIME);
    });
  }
} else {
  for (const disabledButton of disabledButtons) {
    disabledButton.addEventListener("click", () => {
      IntervalClass.stop();
      autoPlaySlideShow.checked = false;
    });
  }
}
