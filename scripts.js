const toggle = document.getElementById("toggle");
const flexy = document.getElementById("flexy");

// by default it shows the annually prices first
toggle.addEventListener("change", (e) => {
  flexy.classList.toggle("show-monthly");
});
