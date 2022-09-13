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
  if (overlayUl.classList.contains("slide-out")) {
    overlayUl.classList.add("slide-in");
    overlayUl.classList.remove("slide-out");
  } else if (overlayUl.classList.contains("slide-in")) {
    overlayUl.classList.add("slide-out");
    overlayUl.classList.remove("slide-in");
  } else {
    overlayUl.classList.add("slide-in");
  }
}

function toggleContactCard() {
  if (contactCard.classList.contains("slide-out")) {
    contactCard.classList.add("slide-in");
    contactCard.classList.remove("slide-out");
  } else if (contactCard.classList.contains("slide-in")) {
    contactCard.classList.add("slide-out");
    contactCard.classList.remove("slide-in");
  } else {
    contactCard.classList.add("slide-in");
  }
}

function toggleMailButton() {
  mailOpen.classList.toggle("show");
  mailClose.classList.toggle("show");
  if (mailOpen.classList.contains("show")) {
    mailOpen.parentNode.style.transform = "translateY(-5px)";
    mailOpen.parentNode.style.paddingTop = "10px";
  } else if (mailClose.classList.contains("show")) {
    mailClose.parentNode.style.transform = "translateY(0)";
    mailClose.parentNode.style.paddingTop = "5px";
  }
}

function ToggleAllMenus() {
  if (
    overlayUl.classList.contains("slide-out") &&
    contactCard.classList.contains("slide-in")
  ) {
    toggleContactCard();
  } else {
    toggleMenu();
  }
}

function closeAll() {
  if (hamburgerButton.classList.contains("open")) toggleHamburger();
  if (overlay.classList.contains("fadein")) toggleOverlay();
  if (overlayUl.classList.contains("slide-in")) toggleMenu();
  if (contactCard.classList.contains("slide-in")) toggleContactCard();
}

hamburgerButton.addEventListener("click", () => {
  ToggleAllMenus();
  toggleOverlay();
  toggleHamburger();
});

function toggleContactMenuFromOverlayMenu(e) {
  e.stopPropagation();
  toggleContactCard();
  toggleMenu();
}

function closeOverlayMenuAfterLinkClick(e) {
  e.stopPropagation();
  toggleOverlay();
  toggleMenu();
  toggleHamburger();
}

for (let [i, overlayLink] of overlayLinks.entries()) {
  if (i === overlayLinks.length - 1) {
    overlayLink.addEventListener("click", toggleContactMenuFromOverlayMenu);
    break;
  }
  overlayLink.addEventListener("click", closeOverlayMenuAfterLinkClick);
}

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
