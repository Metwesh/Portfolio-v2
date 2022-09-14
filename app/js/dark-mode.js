const viewMode = document.querySelector("#view-mode");
const viewModeDisc = document.querySelector(".view-mode-disc");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const markedItems = document.querySelectorAll(".marked");

let rotation = 180;

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  toggleSunAndMoon();
  invertImages();
}

function toggleSunAndMoon() {
  sun.classList.toggle("show");
  moon.classList.toggle("show");
}

function invertImages() {
  for (let markedItem of markedItems) {
    if (markedItem.classList.contains("whiten")) {
      markedItem.classList.toggle("invert-whiten");
    } else {
      markedItem.classList.toggle("invert");
    }
  }
}

function rotateDisc() {
  viewModeDisc.style.transform = `rotate(${rotation}deg)`;
  rotation += 180;
  toggleSunAndMoon();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  invertImages();
}

viewMode.addEventListener("click", (e) => {
  e.preventDefault();
  rotateDisc();
  toggleDarkMode();
});

viewMode.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    viewMode.click();
  }
});
