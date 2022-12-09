/* 
I'm dividing these JS files for readability only.
The files are being bundled & minified with the build script in the package.json file.
*/
/* eslint-disable no-undef */
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const hoursCounter = document.querySelector("#hoursCounter");

const sections = document.getElementsByTagName("section");

let options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.1" };

const sectionObserver = new IntersectionObserver(
  (entries, _sectionObserver) => {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.target === home) {
        options = { rootMargin: "300px 0px -45px 0px", threshold: "0.1" };
        homeLinkOn();
      }
      if (entry.isIntersecting && entry.target === about) {
        options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.1" };
        aboutLinkOn();
      }
      if (entry.isIntersecting && entry.target === skills) {
        options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.1" };
        skillsLinkOn();
      }
      if (entry.isIntersecting && entry.target === portfolio) {
        options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.05" };
        portfolioLinkOn();
        IntervalClass.start(renderNewCard, 7000);
      }
    }
  },
  options
);

for (const section of sections) {
  sectionObserver.observe(section);
}

// Counter observer & hours animation

function animateValue(elem, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    elem.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
  (entries, counterObserver) => {
    if (entries[0].isIntersecting) {
      animateValue(hoursCounter, 0, 133, 4000);
      setTimeout(() => {
        hoursCounter.animate(
          [{ color: "var(--font-color)" }, { color: "var(--cyan)" }],
          {
            duration: 1000,
            iterations: 1,
          }
        );
        setTimeout(() => (hoursCounter.style.color = "var(--cyan)"), 999);
      }, 4000);
      counterObserver.unobserve(entries[0].target);
    }
  },
  { threshold: "1" }
);

counterObserver.observe(hoursCounter);
