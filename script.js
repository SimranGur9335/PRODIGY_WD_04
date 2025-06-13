window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Typing Animation
const texts = ["Web Developer", "UI/UX Enthusiast", "JavaScript Ninja"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
      typingElement.textContent = currentText;
    } else if (isDeleting && j > 0) {
      currentText = texts[i].substring(0, --j);
      typingElement.textContent = currentText;
    }

    if (j === texts[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Time Display
setInterval(() => {
  document.getElementById("time").textContent =
    "Current time: " + new Date().toLocaleTimeString();
}, 1000);

// Scroll To Top
document.getElementById("scrollToTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
