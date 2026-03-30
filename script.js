const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "Close" : "Menu";
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    });
  });
}

const resultCards = [
  {
    label: "Single modality",
    name: "RGB",
    accuracy: "84.40%",
    precision: "100.00%",
    recall: "80.00%",
    f1: "88.89%",
    highlight: false,
  },
  {
    label: "Single modality",
    name: "Thermal",
    accuracy: "89.91%",
    precision: "89.36%",
    recall: "98.82%",
    f1: "93.85%",
    highlight: false,
  },
  {
    label: "Fusion baseline",
    name: "OR Late Fusion",
    accuracy: "89.91%",
    precision: "89.36%",
    recall: "98.82%",
    f1: "93.85%",
    highlight: false,
  },
  {
    label: "Agreement fusion",
    name: "Product-of-Experts",
    accuracy: "88.99%",
    precision: "100.00%",
    recall: "85.88%",
    f1: "92.41%",
    highlight: false,
  },
  {
    label: "Learned feature fusion",
    name: "Mid-Fusion",
    accuracy: "90.83%",
    precision: "91.21%",
    recall: "97.65%",
    f1: "94.32%",
    highlight: true,
  },
];

const resultsGrid = document.getElementById("resultsGrid");

if (resultsGrid) {
  resultsGrid.innerHTML = resultCards
    .map(
      (item) => `
        <article class="result-card${item.highlight ? " highlight" : ""}">
          <p class="result-name">${item.label}</p>
          <h3>${item.name}</h3>
          <div class="metric-line">
            <span class="metric-label">Accuracy</span>
            <span class="metric-value">${item.accuracy}</span>
          </div>
          <div class="metric-line">
            <span class="metric-label">Precision</span>
            <span class="metric-value">${item.precision}</span>
          </div>
          <div class="metric-line">
            <span class="metric-label">Recall</span>
            <span class="metric-value">${item.recall}</span>
          </div>
          <div class="metric-line">
            <span class="metric-label">F1</span>
            <span class="metric-value">${item.f1}</span>
          </div>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll(".year").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
