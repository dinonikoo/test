document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const toCollectionBtn = document.getElementById("toCollection");
if (toCollectionBtn) {
  toCollectionBtn.addEventListener("click", () => {
    const tabs = document.querySelector(".tabs");
    if (tabs) {
      tabs.scrollIntoView({ behavior: "smooth" });
    }
  });
}
