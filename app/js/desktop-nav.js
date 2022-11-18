/* 
I'm dividing these JS files for readability only.
The files are being bundled & minified with the build script in the package.json file.
*/
const homeLink = document.querySelector("#homeLink");
const aboutLink = document.querySelector("#aboutLink");
const skillsLink = document.querySelector("#skillsLink");
const portfolioLink = document.querySelector("#portfolioLink");

function classListSingleStateChecker(element, contains, add, remove) {
  if (element.classList.contains(contains)) {
    element.classList.add(add);
    element.classList.remove(remove);
  }
}

function homeLinkOn() {
  classListSingleStateChecker(homeLink, "shortened", "extended", "shortened");
  classListSingleStateChecker(aboutLink, "extended", "shortened", "extended");
  classListSingleStateChecker(skillsLink, "extended", "shortened", "extended");
  classListSingleStateChecker(
    portfolioLink,
    "extended",
    "shortened",
    "extended"
  );
}

function aboutLinkOn() {
  classListSingleStateChecker(aboutLink, "shortened", "extended", "shortened");
  classListSingleStateChecker(homeLink, "extended", "shortened", "extended");
  classListSingleStateChecker(skillsLink, "extended", "shortened", "extended");
  classListSingleStateChecker(
    portfolioLink,
    "extended",
    "shortened",
    "extended"
  );
}

function skillsLinkOn() {
  classListSingleStateChecker(skillsLink, "shortened", "extended", "shortened");
  classListSingleStateChecker(homeLink, "extended", "shortened", "extended");
  classListSingleStateChecker(aboutLink, "extended", "shortened", "extended");
  classListSingleStateChecker(
    portfolioLink,
    "extended",
    "shortened",
    "extended"
  );
}

function portfolioLinkOn() {
  classListSingleStateChecker(
    portfolioLink,
    "shortened",
    "extended",
    "shortened"
  );
  classListSingleStateChecker(homeLink, "extended", "shortened", "extended");
  classListSingleStateChecker(aboutLink, "extended", "shortened", "extended");
  classListSingleStateChecker(skillsLink, "extended", "shortened", "extended");
}

homeLink.addEventListener("click", homeLinkOn);

aboutLink.addEventListener("click", aboutLinkOn);

skillsLink.addEventListener("click", skillsLinkOn);

portfolioLink.addEventListener("click", portfolioLinkOn);
