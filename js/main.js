const root = document.querySelector("html");
const btn = document.getElementById("toggle");

function toggleDarkMode() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toggleDarkMode);

const circles = document.querySelectorAll("svg circle");

const infoTitle = document.querySelector(".info-title");
const infoText = document.querySelector(".placeholder");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    infoTitle.textContent = circle.dataset.title;
    infoText.textContent = circle.dataset.text;
  });
});
