/* 
I'm dividing these JS files for readability only.
The files are being bundled & minified with the build script in the package.json file.
*/
let lastKnownScrollPosition = 0;
let ticking = false;
const coolShape = document.querySelector("#coolShape");
const tinyShapes = document.querySelectorAll(".tiny-shape");

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
  if (window.innerWidth > 1073) {
    coolShape.style.transform = `translateX(${-scrollPos * 0.9 - 100}px)`;
  } else if (window.innerWidth > 600 && window.innerWidth <= 1073) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.1 - 100}px)`;
  } else if (window.innerWidth >= 390 && window.innerWidth <= 600) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.3 - 100}px)`;
  } else {
    coolShape.style.transform = `translateX(${-scrollPos * 1.5 - 100}px)`;
  }
}

function scrollMoveSmallShapes(scrollPos) {
  tinyShapes[0].style.transform = `translateX(${scrollPos * 0.5 + 2500}px)`;
  tinyShapes[1].style.transform = `translateX(${-scrollPos * 0.5 - 1000}px)`;
}

document.addEventListener("scroll", scrollListener);
