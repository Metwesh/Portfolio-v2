const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");

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
        options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.175" };
        skillsLinkOn();
      }
      if (entry.isIntersecting && entry.target === portfolio) {
        options = { rootMargin: "-45px 0px 0px 0px", threshold: "0.05" };
        portfolioLinkOn();
      }
    }
  },
  options
);
for (const section of sections) {
  sectionObserver.observe(section);
}
