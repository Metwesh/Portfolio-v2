/* 
I'm dividing these JS files for readability only.
The files are being concatenated together & minified with the build script in the package.json file.
*/
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

function classListMultipleStateChecker(
  element,
  animateoutClass,
  animateinClass
) {
  if (element.classList.contains(animateoutClass)) {
    element.classList.add(animateinClass);
    element.classList.remove(animateoutClass);
  } else if (element.classList.contains(animateinClass)) {
    element.classList.add(animateoutClass);
    element.classList.remove(animateinClass);
  } else {
    element.classList.add(animateinClass);
  }
}

function toggleHamburger() {
  hamburgerMenu.classList.toggle("open");
  if (!hamburgerMenu.classList.contains("open")) {
    for (let i = 0; i < hamburgerMenu.children.length; i++) {
      if (i === 1) {
        hamburgerMenu.children[i].style.transition =
          "transform 300ms ease-in-out, width 300ms ease-in-out 300ms";
      } else {
        hamburgerMenu.children[i].style.transition =
          "transform 350ms ease-in-out, background-color 300ms ease-in-out";
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
  classListMultipleStateChecker(overlay, "fade-out", "fade-in");
}

function toggleMenu() {
  classListMultipleStateChecker(overlayUl, "slide-out", "slide-in");
}

function toggleContactCard() {
  classListMultipleStateChecker(contactCard, "slide-out", "slide-in");
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
  if (overlay.classList.contains("fade-in")) toggleOverlay();
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

selfPortrait.addEventListener("click", (e) => {
  e.preventDefault();
  toggleOverlay();
  toggleContactCard();
  toggleMailButton();
  toggleHamburger();
  if (screen.width > 885) contactMail.focus();
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
