// 🎂 SET FRIEND BIRTHDAY HERE
let birthday = new Date("Apr 24, 2026 00:00:00").getTime();

// ⏳ Countdown
setInterval(() => {
  let now = new Date().getTime();
  let diff = birthday - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("countdown").innerHTML =
    "⏳ " + days + " Days " + hours + " Hours left!";
}, 1000);

// 🎁 Show Surprise Message
function showMessage() {
  document.getElementById("message").classList.remove("hidden");
}

// 🎉 Confetti Effect
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function confetti(e) {
  for (let i = 0; i < 25; i++) {
    ctx.fillStyle = "hsl(" + Math.random() * 360 + ",100%,50%)";
    ctx.fillRect(
      e.clientX + Math.random() * 50,
      e.clientY + Math.random() * 50,
      5,
      5,
    );
  }
}
