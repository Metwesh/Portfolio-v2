const viewMode = document.querySelector(".view-mode");
const viewModeDisc = document.querySelector(".view-mode-disc");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const markedItems = document.querySelectorAll(".marked");

let rotation = 180;

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  sun.classList.toggle("show");
  moon.classList.toggle("show");
  for (let markedItem of markedItems) {
    if (markedItem.classList.contains("whiten")) {
      markedItem.classList.toggle("invert-whiten");
    } else {
      markedItem.classList.toggle("invert");
    }
  }
}

function rotateButton() {
  viewModeDisc.style.transform = `rotate(${rotation}deg)`;
  rotation += 180;
  sun.classList.toggle("show");
  moon.classList.toggle("show");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  for (let markedItem of markedItems) {
    if (markedItem.classList.contains("whiten")) {
      markedItem.classList.toggle("invert-whiten");
    } else {
      markedItem.classList.toggle("invert");
    }
  }
}

viewMode.addEventListener("click", () => {
  rotateButton();
  toggleDarkMode();
});
