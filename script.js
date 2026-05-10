const toggle = document.querySelector(".theme-toggle");
const storageKey = "cole-zill-theme";

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  toggle.setAttribute("aria-pressed", String(isLight));
  toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
}

const storedTheme = localStorage.getItem(storageKey);
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

applyTheme(storedTheme || preferredTheme);

toggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});
