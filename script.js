// 🎁 Show message
function showMessage() {
  document.getElementById("message").classList.remove("hidden");
}

// 🎆 Confetti effect
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function confetti(e) {
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.fillRect(
      e.clientX + Math.random() * 50,
      e.clientY + Math.random() * 50,
      5,
      5,
    );
  }
}

// resize fix
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
