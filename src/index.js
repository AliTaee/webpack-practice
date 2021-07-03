import "./style.css";
import printMe from "./print";
import webpackIcon from "./webpack-icon.png";

async function getComponent() {
  const element = document.createElement("div");
  // Lodash, now imported by Dynamic Imports
  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.classList.add("header");

  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.classList.add("button");
  btn.onclick = printMe;

  element.appendChild(btn);

  const icon = new Image();
  icon.src = webpackIcon;
  icon.alt = "webpack logo";
  element.appendChild(icon);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
