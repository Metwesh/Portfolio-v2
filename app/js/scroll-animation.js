let lastKnownScrollPosition = 0;
let ticking = false;
const coolShape = document.querySelector("#coolShape");

function scrollListener() {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      scrollMove(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
}

function scrollMove(scrollPos) {
  if (screen.width > 1073) {
    coolShape.style.transform = `translateX(${-scrollPos * 0.9 - 100}px)`;
  } else if (screen.width > 600 && screen.width <= 1073) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.5 - 100}px)`;
  } else if (screen.width >= 390 && screen.width <= 600) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.8 - 100}px)`;
  } else {
    coolShape.style.transform = `translateX(${-scrollPos * 2 - 100}px)`;
  }
}

document.addEventListener("scroll", scrollListener);

const svgObserver = new IntersectionObserver((entries, _sectionObserver) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) {
      document.removeEventListener("scroll", scrollListener);
    } else {
      document.addEventListener("scroll", scrollListener);
    }
  }
});

svgObserver.observe(coolShape);
