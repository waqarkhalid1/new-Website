const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
