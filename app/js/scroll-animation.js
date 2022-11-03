/* 
I'm dividing these JS files for readability only.
The files are being concatenated together & minified with the build script in the package.json file.
*/
let lastKnownScrollPosition = 0;
let ticking = false;
const coolShape = document.querySelector("#coolShape");
const tinyShape1 = document.querySelector("#tinyShape1");
const tinyShape2 = document.querySelector("#tinyShape2");

function scrollListener() {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollMoveBigShape(lastKnownScrollPosition);
      scrollMoveSmallShapes(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
}

function scrollMoveBigShape(scrollPos) {
  if (screen.width > 1073) {
    coolShape.style.transform = `translateX(${-scrollPos * 0.9 - 100}px)`;
  } else if (screen.width > 600 && screen.width <= 1073) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.1 - 100}px)`;
  } else if (screen.width >= 390 && screen.width <= 600) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.3 - 100}px)`;
  } else {
    coolShape.style.transform = `translateX(${-scrollPos * 1.5 - 100}px)`;
  }
}

function scrollMoveSmallShapes(scrollPos) {
  tinyShape1.style.transform = `translateX(${scrollPos * 0.5 + 2500}px)`;
  tinyShape2.style.transform = `translateX(${scrollPos * 0.5 - 3500}px)`;
}

document.addEventListener("scroll", scrollListener);
