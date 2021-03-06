// main nav links ////////////////////////////////////////////////////////////////////////////////
const homelink = document.querySelector("#homelink");
const aboutlink = document.querySelector("#aboutlink");
const skillslink = document.querySelector("#skillslink");
const portfoliolink = document.querySelector("#portfoliolink");

function homeLinkOn() {
  if (homelink.classList.contains("shortened")) {
    homelink.classList.add("extended");
    homelink.classList.remove("shortened");
  }
  if (aboutlink.classList.contains("extended")) {
    aboutlink.classList.add("shortened");
    aboutlink.classList.remove("extended");
  }
  if (skillslink.classList.contains("extended")) {
    skillslink.classList.add("shortened");
    skillslink.classList.remove("extended");
  }
  if (portfoliolink.classList.contains("extended")) {
    portfoliolink.classList.add("shortened");
    portfoliolink.classList.remove("extended");
  }
}

function aboutLinkOn() {
  if (aboutlink.classList.contains("shortened")) {
    aboutlink.classList.add("extended");
    aboutlink.classList.remove("shortened");
  }
  if (homelink.classList.contains("extended")) {
    homelink.classList.add("shortened");
    homelink.classList.remove("extended");
  }
  if (skillslink.classList.contains("extended")) {
    skillslink.classList.add("shortened");
    skillslink.classList.remove("extended");
  }
  if (portfoliolink.classList.contains("extended")) {
    portfoliolink.classList.add("shortened");
    portfoliolink.classList.remove("extended");
  }
}

function skillsLinkOn() {
  if (skillslink.classList.contains("shortened")) {
    skillslink.classList.add("extended");
    skillslink.classList.remove("shortened");
  }
  if (homelink.classList.contains("extended")) {
    homelink.classList.add("shortened");
    homelink.classList.remove("extended");
  }
  if (aboutlink.classList.contains("extended")) {
    aboutlink.classList.add("shortened");
    aboutlink.classList.remove("extended");
  }
  if (portfoliolink.classList.contains("extended")) {
    portfoliolink.classList.add("shortened");
    portfoliolink.classList.remove("extended");
  }
}

function portfolioLinkOn() {
  if (portfoliolink.classList.contains("shortened")) {
    portfoliolink.classList.add("extended");
    portfoliolink.classList.remove("shortened");
  }
  if (homelink.classList.contains("extended")) {
    homelink.classList.add("shortened");
    homelink.classList.remove("extended");
  }
  if (aboutlink.classList.contains("extended")) {
    aboutlink.classList.add("shortened");
    aboutlink.classList.remove("extended");
  }
  if (skillslink.classList.contains("extended")) {
    skillslink.classList.add("shortened");
    skillslink.classList.remove("extended");
  }
}

homelink.addEventListener("click", homeLinkOn);

aboutlink.addEventListener("click", aboutLinkOn);

skillslink.addEventListener("click", skillsLinkOn);

portfoliolink.addEventListener("click", portfolioLinkOn);

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
      if (entry.isIntersecting) portfolioLinkOn();
      else return;
    });
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.17" }
);
portfolioObserver.observe(portfolio);

// Hamburger & Overlay ////////////////////////////////////////////////////////////////////////////////
const homeButton = document.querySelector("#homebutton");
const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector("#overlay");
const overlayUl = document.querySelector("#overlayUl");
const overlaylinks = document.querySelectorAll(".overlaylinks");
const contactCard = document.querySelector("#contactCard");
const contactCardBox = document.querySelector(".contactCardBox");
const contactMail = document.querySelector("#contactbutton");
const mailOpen = document.querySelector("#Mailopen");
const mailClose = document.querySelector("#Mailclose");

function toggleHamburger() {
  btnHamburger.classList.toggle("open");
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
  if (btnHamburger.classList.contains("open")) toggleHamburger();
  if (overlay.classList.contains("fadein")) toggleOverlay();
  if (overlayUl.classList.contains("slidein")) toggleMenu();
  if (contactCard.classList.contains("slidein")) toggleContactCard();
}

btnHamburger.addEventListener("click", () => {
  ToggleAllMenus();
  toggleOverlay();
  toggleHamburger();
});

overlaylinks.forEach((overlaylink, i) => {
  if (i === overlaylinks.length - 1)
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
const coolshape = document.querySelector(".coolshape");

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
    coolshape.style.transform = `translateX(${-scrollPos - 100}px)`;
  } else if (screen.width > 600) {
    coolshape.style.transform = `translateX(${-scrollPos * 1.5 - 100}px)`;
  } else if (screen.width >= 390) {
    coolshape.style.transform = `translateX(${-scrollPos * 1.8 - 100}px)`;
  } else {
    coolshape.style.transform = `translateX(${-scrollPos * 2 - 100}px)`;
  }
}

document.addEventListener("scroll", scrollListener);

//Button switch ////////////////////////////////////////////////////////////////////////////////
const darkButton = document.querySelectorAll(".dark");
darkButton.forEach((button) => {
  button.onmousedown = () => button.classList.toggle("darkswitch");
  button.onmouseup = () => button.classList.toggle("darkswitch");
});
