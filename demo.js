let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

h1 = [
  "Hello, World!",
  "Welcome to JavaScript!",
  "Have a great day!",
  "Keep learning!",
  "You clicked the button!",
];
p = [
  "This is a demo paragraph.",
  "JavaScript is fun!",
  "coding is awesome!",
  "Click the button to change the background color and text.",
  "Enjoy experimenting with JavaScript!",
];
let colors = [
  "",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "magenta",
  "lime",
];

// btn.addEventListener("click", function () {
//   let randomColor = colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = randomColor;
// });
btn.onclick = function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  let randomText = h1[Math.floor(Math.random() * h1.length)];
  document.querySelector("h1").textContent = randomText;
  let randomparagraph = p[Math.floor(Math.random() * p.length)];
  document.querySelector("p").textContent = randomparagraph;
};
