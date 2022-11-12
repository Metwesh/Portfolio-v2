/* 
I'm dividing these JS files for readability only.
The files are being concatenated together & minified with the build script in the package.json file.
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

const displayImages = document.querySelectorAll(".display-img");
const displayTextContainer = document.querySelector("#displayTextContainer");
const displayTextFields = displayTextContainer.children;
const slideshowItems = document.querySelectorAll(".slideshow-item");
const closeContainers = document.querySelectorAll(".close-container");
const autoPlaySlideShow = document.querySelector("#autoPlaySlideShow");
const displayImgContainer = document.querySelector("#displayImgContainer");
const flipCardButtons = document.querySelectorAll(".button-container");

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

function changedisplayText(curr, prev) {
  displayTextFields[curr].classList.add("show");
  displayTextFields[prev].classList.remove("show");
}

function flipCardToBack(index) {
  animateOut(displayImages[index]);
  setTimeout(() => {
    closeContainers[index].setAttribute("tabindex", 0);
    flipCardButtons[index].children[0].style.visibility = "visible";
    flipCardButtons[index].children[1].style.visibility = "visible";
    displayImages[index].classList.remove("show");
    animateIn(displayTextContainer);
    displayTextContainer.classList.add("show");
    displayTextFields[index].classList.add("show");
  }, ANIMATION_INTERVAL);
}

function flipCardToFront(index) {
  animateOut(displayTextContainer);
  setTimeout(() => {
    closeContainers[index].removeAttribute("tabindex");
    flipCardButtons[index].children[0].style.visibility = "hidden";
    flipCardButtons[index].children[1].style.visibility = "hidden";
    displayTextContainer.classList.remove("show");
    displayTextFields[index].classList.remove("show");
    animateIn(displayImages[index]);
    displayImages[index].classList.add("show");
  }, ANIMATION_INTERVAL);
}

// TODO: Refactor this function
function renderNewCard() {
  curr++;
  if (curr === 5) curr = 0;
  if (prev === 5) prev = 0;
  animateOut(displayImages[prev]);
  if (screen.width < 669) animateOut(displayTextFields[prev]);
  else displayTextFields[prev].classList.remove("show");
  animatePseudoElement(displayImgContainer, "::before", 0, -20);
  animatePseudoElement(displayImgContainer, "::after", 0, 20);
  if (curr > 0) slideshowItems[prev].dataset.active = false;
  setTimeout(() => {
    if (screen.width > 669) {
      closeContainers[curr].removeAttribute("tabindex");
      flipCardButtons[curr].children[0].style.visibility = "hidden";
      flipCardButtons[curr].children[1].style.visibility = "hidden";
    } else {
      animateIn(displayTextFields[curr]);
      displayTextFields[prev].classList.remove("show");
    }
    if (curr === 0) slideshowItems[4].dataset.active = false;
    displayTextFields[curr].classList.add("show");
    changeDisplayImg(curr, prev);
    animateIn(displayImages[curr]);
    displayImgContainer.dataset.title = TITLES[curr];
    animatePseudoElement(displayImgContainer, "::before", -20, 0);
    animatePseudoElement(displayImgContainer, "::after", 20, 0);
    slideshowItems[curr].dataset.active = true;
    prev++;
  }, ANIMATION_INTERVAL);
}

// window.addEventListener("resize", () => {});
let curr = 0;
let prev = 0;

if (screen.width < 669) {
  if (!displayTextContainer.classList.contains("show"))
    displayTextContainer.classList.add("show");
} else {
  closeContainers[0].removeAttribute("tabindex");
  flipCardButtons[0].children[0].style.visibility = "hidden";
  flipCardButtons[0].children[1].style.visibility = "hidden";
}

changeDisplayImg(0, 4);
changedisplayText(0, 4);

IntervalClass.start(renderNewCard, PAUSE_TIME);

// TODO: Refactor this behemoth
for (let i = 0; i < slideshowItems.length; i++) {
  slideshowItems[i].addEventListener("click", () => {
    IntervalClass.stop();
    autoPlaySlideShow.checked = false;
    if (displayImages[curr].classList.contains("show") && curr !== i)
      animateOut(displayImages[curr]);
    else if (
      displayTextContainer.classList.contains("show") &&
      screen.width > 669
    ) {
      animateOut(displayTextContainer);
      displayTextContainer.classList.remove("show");
      setTimeout(() => {
        animateIn(displayImages[i]);
      }, ANIMATION_INTERVAL);
    }
    screen.width < 669 && curr !== i && animateOut(displayTextFields[curr]);
    curr !== i && animatePseudoElement(displayImgContainer, "::before", 0, -20);
    curr !== i && animatePseudoElement(displayImgContainer, "::after", 0, 20);

    setTimeout(() => {
      if (screen.width < 669 && curr !== i) {
        animateIn(displayTextFields[i]);
      }
      displayTextFields[curr].classList.remove("show");
      displayImages[curr].classList.remove("show");
      curr !== i && animateIn(displayImages[i]);
      displayImages[i].classList.add("show");
      displayTextFields[i].classList.add("show");

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

if (screen.width > 669) {
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
}

autoPlaySlideShow.addEventListener("click", () => {
  if (autoPlaySlideShow.checked) {
    setTimeout(() => {
      renderNewCard();
      IntervalClass.start(renderNewCard, PAUSE_TIME);
    }, ANIMATION_INTERVAL * 14);
  } else IntervalClass.stop();
  if (screen.width < 669) return;
  for (let i = 0; i < displayTextFields.length; i++) {
    if (
      displayTextFields[i].classList.contains("show") &&
      displayTextContainer.classList.contains("show")
    )
      flipCardToFront(i);
  }
});
