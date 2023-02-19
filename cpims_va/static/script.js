const btn = document.getElementById("menu-btn");
const bars = document.getElementsByClassName("hamburger");
const menu = document.getElementById("menu");
const chat_btn = document.getElementById("chat-btn");
const chat_box = document.getElementById("chat-container");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  for (let bar of bars) {
    bar.classList.toggle("open");
  }
});

chat_btn.addEventListener("click", () => {
  chat_box.classList.toggle("flex");
  chat_box.classList.toggle("hidden");
  chat_btn.classList.toggle("animate-bounce");
});
