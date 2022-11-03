/* 
I'm dividing these JS files for readability only.
The files are being concatenated together & minified with the build script in the package.json file.
*/
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
