/* eslint-disable no-undef */
const viewMode = document.querySelector("#view-mode");
const viewModeDisc = document.querySelector(".view-mode-disc");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const markedItems = document.querySelectorAll(".marked");

let rotation = 540;

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
  toggleSunAndMoon();
  invertImages();
  changeButtonTitle();
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  document.body.classList.add("light-mode");
  changeButtonTitle();
}

function invertImages() {
  for (const markedItem of markedItems) {
    if (markedItem.classList.contains("whiten")) {
      markedItem.classList.toggle("invert-whiten");
    } else {
      markedItem.classList.toggle("invert");
    }
  }
}

function toggleSunAndMoon() {
  sun.classList.toggle("show");
  moon.classList.toggle("show");
  changeButtonTitle();
}

function changeButtonTitle() {
  if (sun.classList.contains("show")) viewMode.title = "Light mode";
  if (moon.classList.contains("show")) viewMode.title = "Dark mode";
}

function rotateDisc() {
  viewModeDisc.style.transform = `rotate(${rotation}deg)`;
  rotation += 540;
  toggleSunAndMoon();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  invertImages();
}

function removeHamburgerTransition() {
  for (let i = 0; i < hamburgerMenu.children.length; i++) {
    if (i === 1) {
      hamburgerMenu.children[1].style.transition =
        "transform 300ms ease-in-out, width 300ms ease-in-out, opacity 300ms ease-in-out";
      continue;
    }
    hamburgerMenu.children[i].style.transition =
      "transform 300ms ease-in-out 300ms";
  }
}

viewMode.addEventListener("click", (e) => {
  e.preventDefault();
  rotateDisc();
  toggleDarkMode();
  removeHamburgerTransition();
});

viewMode.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    viewMode.click();
  }
});
