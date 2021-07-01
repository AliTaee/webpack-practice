import "./style.css";

function printMe() {
  console.log("I get called from print.js!");
}

function button() {
  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.classList.add("button");
  btn.onclick = printMe;

  return btn;
}

document.body.appendChild(button());
