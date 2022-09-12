const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  if (button.classList.contains(".dark")) {
    button.onmousedown = () => button.classList.toggle("darkswitch");
    button.onmouseup = () => button.classList.toggle("darkswitch");
  }
  button.onmousedown = () => button.classList.toggle("pressed");
  button.onmouseup = () => button.classList.toggle("pressed");
}
