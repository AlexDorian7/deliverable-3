if (true /*CHECK TO SEE IF THE SCREEN IS LARGE ENOUGH*/) {
  let p5jsElement = document.createElement("script");
  p5jsElement.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js"
  );
  let dropElement = document.createElement("script");
  dropElement.setAttribute("src", "drop.js");
  let gooElement = document.createElement("script");
  gooElement.setAttribute("src", "goo.js");
  document.body.appendChild(p5jsElement);
  document.body.appendChild(dropElement);
  document.body.appendChild(gooElement);
} else {
}
