// Get all theme buttons and the document element
const themeButtons = document.querySelectorAll(".theme-btn");
const documentElement = document.documentElement;

// Load saved theme from localStorage or default to 'light'
const savedTheme = localStorage.getItem("selectedTheme") || "light";
setTheme(savedTheme);

// Add click event listeners to all theme buttons
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme");
    setTheme(selectedTheme);

    // Save the selected theme to localStorage
    localStorage.setItem("selectedTheme", selectedTheme);
  });
});

function setTheme(themeName) {
  // Set the data-theme attribute on the document element
  documentElement.setAttribute("data-theme", themeName);

  // Update active button state
  themeButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-theme") === themeName) {
      btn.classList.add("active");
    }
  });
}

// Demo button functionality
function showMessage() {
  const messages = [
    "🎉 Awesome! You clicked the button!",
    "✨ Theme switching is so smooth!",
    "🌈 Beautiful colors, right?",
    "🚀 Vanilla JavaScript rocks!",
    "💫 Keep exploring different themes!",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

// Add a subtle animation when the page loads
window.addEventListener("load", () => {
  document.querySelector(".container").style.opacity = "0";
  document.querySelector(".container").style.transform = "translateY(20px)";

  setTimeout(() => {
    document.querySelector(".container").style.transition = "all 0.6s ease";
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.transform = "translateY(0)";
  }, 100);
});

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key >= "1" && e.key <= "5") {
    const themeIndex = parseInt(e.key) - 1;
    const themeButton = themeButtons[themeIndex];
    if (themeButton) {
      themeButton.click();
    }
  }
});
