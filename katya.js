// переключение вкладок
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// кнопка "перейти к подборке"
document.getElementById("to-selection").addEventListener("click", () => {
  document.querySelector(".tabs").scrollIntoView({ behavior: "smooth" });
});
