// Fade-in About section
window.onload = () => {
  const about = document.getElementById("about");
  about.style.opacity = 0;
  let op = 0;
  let interval = setInterval(() => {
    if(op >= 1) clearInterval(interval);
    about.style.opacity = op;
    op += 0.02;
  }, 20);
};
