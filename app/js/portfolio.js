/* 
I'm dividing these JS files for readability only.
The files are being concatenated together & minified with the build script in the package.json file.
*/
/*
0
 src="./images/Graduation Website.webp" alt="Online Bookstore project"
 title="Online Bookstore"
 onerror="this.onerror=null;this.src='./fallback_images/Graduation Website.png'" 
1
 src="./images/Clinic website.webp" alt="Clinic website project" title="Clinic Website"
 onerror="this.onerror=null;this.src='./fallback_images/Clinic website.png'"
2
 src="./images/Budget app.webp" alt="Budget App project" title="Budget App"
 onerror="this.onerror=null;this.src='./fallback_images/Budget app.png'"
3
 src="./images/Face-detect.webp" alt="Face Detection App project"
 title="Face Detection App" 
 onerror="this.onerror=null;this.src='./fallback_images/Face-detect.png'"
4
 src="./images/Task-handler.webp" alt="Task Handler project" title="Task Handler"
 onerror="this.onerror=null;this.src='./fallback_images/Task-handler.png'"
 */

const displayImg = document.getElementById("displayImg");

const attributes = [
  {
    src: "./images/Graduation Website.webp",
    alt: "Online Bookstore project",
    title: "Online Bookstore",
    onerror:
      "this.onerror=null;this.src='./fallback_images/Graduation Website.png'",
  },
  {
    src: "./images/Clinic website.webp",
    alt: "Clinic website project",
    title: "Clinic Website",
    onerror:
      "this.onerror=null;this.src='./fallback_images/Clinic website.png'",
  },
  {
    src: "./images/Budget app.webp",
    alt: "Budget App project",
    title: "Budget App",
    onerror: "this.onerror=null;this.src='./fallback_images/Budget app.png'",
  },
  {
    src: "./images/Face-detect.webp",
    alt: "Face Detection App project",
    title: "Face Detection App",
    onerror: "this.onerror=null;this.src='./fallback_images/Face-detect.png'",
  },
  {
    src: "./images/Task-handler.webp",
    alt: "Task Handler project",
    title: "Task Handler",
    onerror: "this.onerror=null;this.src='./fallback_images/Task-handler.png'",
  },
];
let key = 0;
displayImg.src = attributes[0].src;
displayImg.alt = attributes[0].alt;
displayImg.title = attributes[0].title;
displayImg.onerror = attributes[0].onerror;

function renderNewImg() {
  key++;
  displayImg.animate([
    // keyframes
    { opacity: 0 },
    { opacity: 1 }
  ], {
    // timing options
    duration: 1000,
    iterations: 1
  })
  displayImg.src = attributes[key].src;
  displayImg.alt = attributes[key].alt;
  displayImg.title = attributes[key].title;
  displayImg.onerror = attributes[key].onerror;
  if (key === 4) key = -1;
}

setInterval(renderNewImg, 4000);
