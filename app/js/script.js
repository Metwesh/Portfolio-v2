// main nav links
const homelink = document.querySelector("#homelink");
const aboutlink = document.querySelector("#aboutlink");
const resumelink = document.querySelector("#resumelink");
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
  if (resumelink.classList.contains("extended")) {
    resumelink.classList.add("shortened");
    resumelink.classList.remove("extended");
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
  if (resumelink.classList.contains("extended")) {
    resumelink.classList.add("shortened");
    resumelink.classList.remove("extended");
  }
  if (portfoliolink.classList.contains("extended")) {
    portfoliolink.classList.add("shortened");
    portfoliolink.classList.remove("extended");
  }
}

function resumeLinkOn() {
  if (resumelink.classList.contains("shortened")) {
    resumelink.classList.add("extended");
    resumelink.classList.remove("shortened");
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
  if (resumelink.classList.contains("extended")) {
    resumelink.classList.add("shortened");
    resumelink.classList.remove("extended");
  }
}

homelink.addEventListener("click", homeLinkOn);

aboutlink.addEventListener("click", aboutLinkOn);

resumelink.addEventListener("click", resumeLinkOn);

portfoliolink.addEventListener("click", portfolioLinkOn);

//Intersection Observer
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const resume = document.querySelector("#resume");
const portfolio = document.querySelector("#portfolio");

const homeOptions = { rootMargin: "300px 0px -45px 0px", threshold: "0.5" };
const portfolioOptions = { rootMargin: "-45px 0px 0px 0px", threshold: "0.17" };
const Options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.2" };

const homeObserver = new IntersectionObserver((entries, homeObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) homeLinkOn();
    else return;
  });
}, homeOptions);
homeObserver.observe(home);

const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) aboutLinkOn();
    else return;
  });
}, Options);
aboutObserver.observe(about);

const resumeObserver = new IntersectionObserver((entries, resumeObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) resumeLinkOn();
    else return;
  });
}, Options);
resumeObserver.observe(resume);

const portfolioObserver = new IntersectionObserver(
  (entries, portfolioObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) portfolioLinkOn();
      else return;
    });
  },
  portfolioOptions
);
portfolioObserver.observe(portfolio);

// Hamburger & Overlay
const homeButton = document.querySelector("#homebutton");
const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector("#overlay");
const overlayUl = document.querySelector("#overlayUl");
const overlaylinks = document.querySelectorAll(".overlaylinks");
const overlayform = document.querySelector("#overlayform");
const contactMail = document.querySelector("#contactbutton");
const mailOpen = document.querySelector("#Mailopen");
const mailClose = document.querySelector("#Mailclose");

function toggleOverlayWithMenu() {
  btnHamburger.classList.toggle("open");

  if (overlay.classList.contains("fadeout")) {
    overlay.classList.add("fadein");
    overlay.classList.remove("fadeout");
  } else if (overlay.classList.contains("fadein")) {
    overlay.classList.add("fadeout");
    overlay.classList.remove("fadein");
  } else {
    overlay.classList.add("fadein");
  }

  if (overlayform.classList.contains("fadein")) {
    overlayform.classList.add("fadeout");
    overlayform.classList.remove("fadein");
  }
}

function toggleOverlayForm() {
  if (overlayform.classList.contains("fadeout")) {
    overlayform.classList.add("fadein");
    overlayform.classList.remove("fadeout");
  } else if (overlayform.classList.contains("fadein")) {
    overlayform.classList.add("fadeout");
    overlayform.classList.remove("fadein");
  } else {
    overlayform.classList.add("fadein");
  }
}

function toggleMailButton() {
  mailOpen.classList.toggle("show");
  mailClose.classList.toggle("show");
  if (mailOpen.classList.contains("show")) {
    mailOpen.parentNode.style.marginTop = "-5px";
    mailOpen.parentNode.style.height = "60px";
  } else if (mailClose.classList.contains("show")) {
    mailClose.parentNode.style.marginTop = "10px";
    mailOpen.parentNode.style.height = "45px";
  }
}

function toggleOverlayWithHomeButton() {
  if (btnHamburger.classList.contains("open")) toggleOverlayWithMenu();
  if (overlayform.classList.contains("fadein")) toggleOverlayForm();
}

btnHamburger.addEventListener("click", toggleOverlayWithMenu);

overlaylinks.forEach((overlaylinks) => {
  overlaylinks.addEventListener("click", toggleOverlayWithMenu);
});

overlaylinks[3].addEventListener("click", toggleOverlayForm);

contactMail.addEventListener("click", () => {
  toggleOverlayForm();
  toggleMailButton();
});

homeButton.addEventListener("click", toggleOverlayWithHomeButton);

// Form
const nameInput = document.querySelector("#nameInput");
const companyInput = document.querySelector("#companyInput");
const mailTo = document.querySelector("#mailto");
const submit = document.querySelector("#submit");
const exit = document.querySelector("#exit");
const notice = document.querySelector("#notice");

function nameInputLength() {
  return nameInput.value.length;
}

function companyInputLength() {
  return companyInput.value.length;
}

function showLine() {
  notice.classList.add("alert");
}

function addSubjectAfterClick() {
  if (nameInputLength() > 0 && companyInputLength() > 0) {
    mailTo.action = `mailto:Mohamedh.aly@hotmail.com?subject=Hi,%20I'm%20${nameInput.value}%20from%20${companyInput.value}`;
    return true;
  } else {
    return false;
  }
}

submit.addEventListener("click", () => {
  if (addSubjectAfterClick()) showLine();
});

exit.addEventListener("click", () => {
  toggleOverlayForm();
  toggleMailButton();
});

// Triangle animation
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
  } else coolshape.style.transform = `translateX(${-scrollPos * 1.8 - 100}px)`;
}

document.addEventListener("scroll", scrollListener);

//Button switch
const darkButton = document.querySelectorAll(".dark");
darkButton.forEach((button) => {
  button.onmousedown = () => button.classList.toggle("darkswitch");
  button.onmouseup = () => button.classList.toggle("darkswitch");
});
