const buttons = document.querySelectorAll(".button");

function toggleButtonClassMouseDown(button, className, className2) {
  button.onmousedown = () => {
    button.classList.toggle(className);
    button.classList.toggle(className2);
  };
}

function toggleButtonClassMouseUp(button, className, className2) {
  button.onmouseup = () => {
    button.classList.toggle(className);
    button.classList.toggle(className2);
  };
}

for (let button of buttons) {
  toggleButtonClassMouseDown(button, "dark-switch", "pressed");
  toggleButtonClassMouseUp(button, "dark-switch", "pressed");
  if (!button.classList.contains("dark")) {
    toggleButtonClassMouseDown(button, "cyan-switch", "pressed");
    toggleButtonClassMouseUp(button, "cyan-switch", "pressed");
  }
}
