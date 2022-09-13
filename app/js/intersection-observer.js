const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");

const homeObserver = new IntersectionObserver(
  (entries, _homeObserver) => {
    for (let entry of entries) {
      if (entry.isIntersecting) homeLinkOn();
      else return;
    }
  },
  { rootMargin: "300px 0px -45px 0px", threshold: "0.5" }
);
homeObserver.observe(home);

const aboutObserver = new IntersectionObserver(
  (entries, _aboutObserver) => {
    for (let entry of entries) {
      if (entry.isIntersecting) aboutLinkOn();
      else return;
    }
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.1" }
);
aboutObserver.observe(about);

const skillsObserver = new IntersectionObserver(
  (entries, _resumeObserver) => {
    for (let entry of entries) {
      if (entry.isIntersecting) skillsLinkOn();
      else return;
    }
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.175" }
);
skillsObserver.observe(skills);

const portfolioObserver = new IntersectionObserver(
  (entries, _portfolioObserver) => {
    for (let entry of entries) {
      if (entry.isIntersecting) portfolioLinkOn();
      else return;
    }
  },
  { rootMargin: "-45px 0px 0px 0px", threshold: "0.05" }
);
portfolioObserver.observe(portfolio);
