// main nav links ////////////////////////////////////////////////////////////////////////////////
const homeLink = document.querySelector("#homeLink");
const aboutLink = document.querySelector("#aboutLink");
const skillsLink = document.querySelector("#skillsLink");
const portfolioLink = document.querySelector("#portfolioLink");

function homeLinkOn() {
  if (homeLink.classList.contains("shortened")) {
    homeLink.classList.add("extended");
    homeLink.classList.remove("shortened");
  }
  if (aboutLink.classList.contains("extended")) {
    aboutLink.classList.add("shortened");
    aboutLink.classList.remove("extended");
  }
  if (skillsLink.classList.contains("extended")) {
    skillsLink.classList.add("shortened");
    skillsLink.classList.remove("extended");
  }
  if (portfolioLink.classList.contains("extended")) {
    portfolioLink.classList.add("shortened");
    portfolioLink.classList.remove("extended");
  }
}

function aboutLinkOn() {
  if (aboutLink.classList.contains("shortened")) {
    aboutLink.classList.add("extended");
    aboutLink.classList.remove("shortened");
  }
  if (homeLink.classList.contains("extended")) {
    homeLink.classList.add("shortened");
    homeLink.classList.remove("extended");
  }
  if (skillsLink.classList.contains("extended")) {
    skillsLink.classList.add("shortened");
    skillsLink.classList.remove("extended");
  }
  if (portfolioLink.classList.contains("extended")) {
    portfolioLink.classList.add("shortened");
    portfolioLink.classList.remove("extended");
  }
}

function skillsLinkOn() {
  if (skillsLink.classList.contains("shortened")) {
    skillsLink.classList.add("extended");
    skillsLink.classList.remove("shortened");
  }
  if (homeLink.classList.contains("extended")) {
    homeLink.classList.add("shortened");
    homeLink.classList.remove("extended");
  }
  if (aboutLink.classList.contains("extended")) {
    aboutLink.classList.add("shortened");
    aboutLink.classList.remove("extended");
  }
  if (portfolioLink.classList.contains("extended")) {
    portfolioLink.classList.add("shortened");
    portfolioLink.classList.remove("extended");
  }
}

function portfolioLinkOn() {
  if (portfolioLink.classList.contains("shortened")) {
    portfolioLink.classList.add("extended");
    portfolioLink.classList.remove("shortened");
  }
  if (homeLink.classList.contains("extended")) {
    homeLink.classList.add("shortened");
    homeLink.classList.remove("extended");
  }
  if (aboutLink.classList.contains("extended")) {
    aboutLink.classList.add("shortened");
    aboutLink.classList.remove("extended");
  }
  if (skillsLink.classList.contains("extended")) {
    skillsLink.classList.add("shortened");
    skillsLink.classList.remove("extended");
  }
}

homeLink.addEventListener("click", homeLinkOn);

aboutLink.addEventListener("click", aboutLinkOn);

skillsLink.addEventListener("click", skillsLinkOn);

portfolioLink.addEventListener("click", portfolioLinkOn);

//Intersection Observer ////////////////////////////////////////////////////////////////////////////////
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");

const homeObserver = new IntersectionObserver(
  (entries, _homeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) homeLinkOn();
      else return;
    });
  },
  { rootMargin: "300px 0px -45px 0px", threshold: "0.5" }
);
homeObserver.observe(home);

const aboutObserver = new IntersectionObserver(
  (entries, _aboutObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) aboutLinkOn();
      else return;
    });
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.15" }
);
aboutObserver.observe(about);

const skillsObserver = new IntersectionObserver(
  (entries, _resumeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) skillsLinkOn();
      else return;
    });
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.175" }
);
skillsObserver.observe(skills);

const portfolioObserver = new IntersectionObserver(
  (entries, _portfolioObserver) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) portfolioLinkOn();
      else return;
    });
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.1" }
);
portfolioObserver.observe(portfolio);

// Hamburger & Overlay ////////////////////////////////////////////////////////////////////////////////
const homeButton = document.querySelector("#homeButton");
const hamburgerButton = document.querySelector("#hamburgerButton");
const overlay = document.querySelector("#overlay");
const overlayUl = document.querySelector("#overlayUl");
const overlayLinks = document.querySelectorAll(".overlay-links");
const contactCard = document.querySelector("#contactCard");
const contactCardBox = document.querySelector("#contactCardBox");
const contactMail = document.querySelector("#contactButton");
const mailOpen = document.querySelector("#mailOpen");
const mailClose = document.querySelector("#mailClose");

function toggleHamburger() {
  hamburgerButton.classList.toggle("open");
}

function toggleOverlay() {
  if (overlay.classList.contains("fadeout")) {
    overlay.classList.add("fadein");
    overlay.classList.remove("fadeout");
  } else if (overlay.classList.contains("fadein")) {
    overlay.classList.add("fadeout");
    overlay.classList.remove("fadein");
  } else {
    overlay.classList.add("fadein");
  }
}

function toggleMenu() {
  if (overlayUl.classList.contains("slideout")) {
    overlayUl.classList.add("slidein");
    overlayUl.classList.remove("slideout");
  } else if (overlayUl.classList.contains("slidein")) {
    overlayUl.classList.add("slideout");
    overlayUl.classList.remove("slidein");
  } else {
    overlayUl.classList.add("slidein");
  }
}

function toggleContactCard() {
  if (contactCard.classList.contains("slideout")) {
    contactCard.classList.add("slidein");
    contactCard.classList.remove("slideout");
  } else if (contactCard.classList.contains("slidein")) {
    contactCard.classList.add("slideout");
    contactCard.classList.remove("slidein");
  } else {
    contactCard.classList.add("slidein");
  }
}

function toggleMailButton() {
  mailOpen.classList.toggle("show");
  mailClose.classList.toggle("show");
  if (mailOpen.classList.contains("show")) {
    mailOpen.parentNode.style.transform = "translateY(-5px)";
  } else if (mailClose.classList.contains("show")) {
    mailClose.parentNode.style.transform = "translateY(0)";
  }
}

function ToggleAllMenus() {
  if (
    overlayUl.classList.contains("slideout") &&
    contactCard.classList.contains("slidein")
  ) {
    toggleContactCard();
  } else {
    toggleMenu();
  }
}

function closeAll() {
  if (hamburgerButton.classList.contains("open")) toggleHamburger();
  if (overlay.classList.contains("fadein")) toggleOverlay();
  if (overlayUl.classList.contains("slidein")) toggleMenu();
  if (contactCard.classList.contains("slidein")) toggleContactCard();
}

hamburgerButton.addEventListener("click", () => {
  ToggleAllMenus();
  toggleOverlay();
  toggleHamburger();
});

overlayLinks.forEach((overlaylink, i) => {
  if (i === overlayLinks.length - 1)
    return overlaylink.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleContactCard();
      toggleMenu();
    });
  overlaylink.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleOverlay();
    toggleMenu();
    toggleHamburger();
  });
});

contactMail.addEventListener("click", () => {
  toggleOverlay();
  toggleContactCard();
  toggleMailButton();
});

overlay.addEventListener("click", () => {
  toggleOverlay();
  toggleHamburger();
  closeAll();
  if (mailOpen.classList.contains("show")) toggleMailButton();
});

contactCardBox.addEventListener("click", (e) => e.stopPropagation());

homeButton.addEventListener("click", closeAll);

// Triangle animation ////////////////////////////////////////////////////////////////////////////////
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
    coolShape.style.transform = `translateX(${-scrollPos - 100}px)`;
  } else if (screen.width > 600) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.5 - 100}px)`;
  } else if (screen.width >= 390) {
    coolShape.style.transform = `translateX(${-scrollPos * 1.8 - 100}px)`;
  } else {
    coolShape.style.transform = `translateX(${-scrollPos * 2 - 100}px)`;
  }
}

document.addEventListener("scroll", scrollListener);

//Button switch ////////////////////////////////////////////////////////////////////////////////
const darkButton = document.querySelectorAll(".dark");
darkButton.forEach((button) => {
  button.onmousedown = () => button.classList.toggle("darkswitch");
  button.onmouseup = () => button.classList.toggle("darkswitch");
});

//Dark mode button /////////////////////////////////////////////////////////////////////////////
const viewMode = document.querySelector(".view-mode");
const darkMode = document.querySelector(".dark-mode");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

let rotation = 180;

function rotateButton() {
  darkMode.style.transform = `rotate(${rotation}deg)`;
  rotation += 180;
  sun.classList.toggle("show");
  moon.classList.toggle("show");
}

function toggleDarkMode() {
  // DARK MODE!
}

viewMode.addEventListener("click", () => {
  rotateButton();
  // toggleDarkMode();
});
