/* 
I'm dividing these JS files for readability only.
The files are being concatenated together & minified with the build script in the package.json file.
*/
const ANIMATION_INTERVAL = 250;
const PAUSE_TIME = 7000;

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

const displayImages = document.getElementsByClassName("display-img");
const displayTextContainer = document.getElementById("displayTextContainer");
const displayTextFields = displayTextContainer.children;
const slideshowItems = document.getElementById("slideshowContainer").children;
const closeContainer = document.getElementsByClassName("close-container");
const autoPlaySlideShow = document.getElementById("autoPlaySlideShow");

function changeDisplayImg(curr, prev) {
  displayImages[curr].classList.add("show");
  displayImages[prev].classList.remove("show");
}

function changedisplayText(curr, prev) {
  displayTextFields[curr].classList.add("show");
  displayTextFields[prev].classList.remove("show");
}

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

function renderNewCard() {
  curr++;
  if (curr === 5) curr = 0;
  if (prev === 5) prev = 0;
  animateOut(displayImages[prev]);
  if (screen.width < 669) {
    animateOut(displayTextFields[prev]);
  }
  if (screen.width > 669) displayTextFields[prev].classList.remove("show");
  if (curr > 0) slideshowItems[prev].dataset.active = false;
  setTimeout(() => {
    if (screen.width < 669) {
      animateIn(displayTextFields[curr]);
      displayTextFields[prev].classList.remove("show");
    }
    if (curr === 0) slideshowItems[4].dataset.active = false;
    displayTextFields[curr].classList.add("show");
    changeDisplayImg(curr, prev);
    animateIn(displayImages[curr]);
    slideshowItems[curr].dataset.active = true;
    prev++;
  }, ANIMATION_INTERVAL);
}

let curr = 0;
let prev = 0;

if (screen.width < 669 && !displayTextContainer.classList.contains("show")) {
  displayTextContainer.classList.add("show");
}

changeDisplayImg(0, 4);
changedisplayText(0, 4);

IntervalClass.start(renderNewCard, PAUSE_TIME);

for (let i = 0; i < slideshowItems.length; i++) {
  slideshowItems[i].addEventListener("click", () => {
    IntervalClass.stop();
    autoPlaySlideShow.checked = false;
    if (displayImages[curr].classList.contains("show"))
      animateOut(displayImages[curr]);
    else if (
      displayTextContainer.classList.contains("show") &&
      screen.width > 669
    ) {
      animateOut(displayTextContainer);
      displayTextContainer.classList.remove("show");
    }
    if (screen.width < 669) {
      animateOut(displayTextFields[curr]);
    }

    setTimeout(() => {
      if (screen.width < 669) {
        animateIn(displayTextFields[i]);
      }
      displayTextFields[curr].classList.remove("show");
      displayImages[curr].classList.remove("show");
      animateIn(displayImages[i]);
      displayImages[i].classList.add("show");
      displayTextFields[i].classList.add("show");
      slideshowItems[curr].dataset.active = false;
      slideshowItems[i].dataset.active = true;
      prev = curr = i;
    }, ANIMATION_INTERVAL);
  });
}

if (screen.width > 669) {
  for (let i = 0; i < displayImages.length; i++) {
    displayImages[i].addEventListener("click", () => {
      IntervalClass.stop();
      autoPlaySlideShow.checked = false;
      animateOut(displayImages[i]);
      setTimeout(() => {
        displayImages[i].classList.remove("show");
        animateIn(displayTextContainer);
        displayTextContainer.classList.add("show");
        displayTextFields[i].classList.add("show");
      }, ANIMATION_INTERVAL);
    });
  }

  for (let i = 0; i < closeContainer.length; i++) {
    closeContainer[i].addEventListener("click", () => {
      animateOut(displayTextContainer);
      setTimeout(() => {
        displayTextContainer.classList.remove("show");
        displayTextFields[i].classList.remove("show");
        animateIn(displayImages[i]);
        displayImages[i].classList.add("show");
      }, ANIMATION_INTERVAL);
      autoPlaySlideShow.checked = true;
      IntervalClass.start(renderNewCard, PAUSE_TIME);
    });
  }
}

autoPlaySlideShow.addEventListener("click", () => {
  if (autoPlaySlideShow.checked) {
    IntervalClass.start(renderNewCard, PAUSE_TIME);
  } else {
    IntervalClass.stop();
  }
});
