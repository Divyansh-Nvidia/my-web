// 1. Dark / light mode
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function setTheme(mode) {
  if (mode === "dark") {
    root.setAttribute("data-theme", "dark");
    themeBtn.textContent = "Light mode";
  } else {
    root.removeAttribute("data-theme");
    themeBtn.textContent = "Dark mode";
  }
  try { localStorage.setItem("theme", mode); } catch (e) { }
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) { }
setTheme(saved || "light");

themeBtn.addEventListener("click", () => {
  setTheme(root.hasAttribute("data-theme") ? "light" : "dark");
});

// 2. Contact form check
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in every field.";
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    return;
  }
  status.textContent = "Thank you, " + name + "! Your message is ready to send.";
  form.reset();
});

// 3. Footer year
document.getElementById("year").textContent = new Date().getFullYear();
