const buttons = document.querySelectorAll(".button");

function toggleButtonClassMouseDown(button, className) {
  button.onmousedown = () => button.classList.toggle(className);
}

function toggleButtonClassMouseDownMultiple(button, className, className2) {
  button.onmousedown = () => {
    button.classList.toggle(className);
    button.classList.toggle(className2);
  };
}

function toggleButtonClassMouseUp(button, className) {
  button.onmouseup = () => button.classList.toggle(className);
}

function toggleButtonClassMouseUpMultiple(button, className, className2) {
  button.onmouseup = () => {
    button.classList.toggle(className);
    button.classList.toggle(className2);
  };
}

for (let button of buttons) {
  toggleButtonClassMouseDown(button, "pressed");
  toggleButtonClassMouseUp(button, "pressed");
  if (button.classList.contains("dark")) {
    toggleButtonClassMouseDownMultiple(button, "dark-switch", "pressed");
    toggleButtonClassMouseUpMultiple(button, "dark-switch", "pressed");
  }
}
