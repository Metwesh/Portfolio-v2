const homeButton = document.querySelector("#homeButton");
const hamburgerMenu = document.querySelector("#hamburgerMenu");
const overlay = document.querySelector("#overlay");
const overlayUl = document.querySelector("#overlayUl");
const overlayLinks = document.querySelectorAll(".overlay-links");
const contactCard = document.querySelector("#contactCard");
const contactCardBox = document.querySelector("#contactCardBox");
const contactMail = document.querySelector("#mail-trigger");
const mailOpen = document.querySelector("#mailOpen");
const mailClose = document.querySelector("#mailClose");
const selfPortrait = document.querySelector("#selfPortrait");

function toggleHamburger() {
  hamburgerMenu.classList.toggle("open");
  if (!hamburgerMenu.classList.contains("open")) {
    for (let i = 0; i < hamburgerMenu.children.length; i++) {
      if (i === 1) {
        hamburgerMenu.children[i].style.transition =
          "transform 300ms ease-in-out, width 300ms ease-in-out, opacity 300ms ease-in-out";
      } else {
        hamburgerMenu.children[i].style.transition =
          "transform 300ms ease-in-out, opacity 300ms ease-in-out, background-color 300ms ease-in-out";
      }
    }
  } else {
    for (let i = 0; i < hamburgerMenu.children.length; i++) {
      if (i === 1) {
        hamburgerMenu.children[1].style.transition =
          "transform 300ms ease-in-out 600ms, width 300ms ease-in-out 0s, opacity 300ms ease-in-out 600ms";
      } else {
        hamburgerMenu.children[i].style.transition =
          "transform 300ms ease-in-out 300ms, background-color 300ms ease-in-out";
      }
    }
  }
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

function toggleAllMenus() {
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
  if (overlay.classList.contains("fadein")) toggleOverlay();
  if (overlayUl.classList.contains("slide-in")) toggleMenu();
  if (contactCard.classList.contains("slide-in")) toggleContactCard();
  if (hamburgerMenu.classList.contains("open")) toggleHamburger();
  if (mailOpen.classList.contains("show")) toggleMailButton();
}

function toggleContactMenuFromOverlayMenu(e) {
  e.preventDefault();
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

hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (hamburgerMenu.classList.contains("open")) {
    closeAll();
    return;
  }
  toggleAllMenus();
  toggleOverlay();
  toggleHamburger();
});

for (const [i, overlayLink] of overlayLinks.entries()) {
  if (i === overlayLinks.length - 1) {
    overlayLink.addEventListener("click", toggleContactMenuFromOverlayMenu);
    break;
  }
  overlayLink.addEventListener("click", closeOverlayMenuAfterLinkClick);
}

contactMail.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
  toggleContactCard();
  toggleMailButton();
});

contactMail.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    contactMail.click();
  }
});

overlay.addEventListener("click", closeAll);

contactCardBox.addEventListener("click", (e) => e.stopPropagation());

homeButton.addEventListener("click", closeAll);

selfPortrait.addEventListener("click", (e) =>{
  e.preventDefault();
  toggleOverlay();
  toggleContactCard();
  toggleMailButton();
  toggleHamburger();
  contactMail.focus();
});

selfPortrait.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    selfPortrait.click();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAll();
    document.activeElement.blur();
  }
});
