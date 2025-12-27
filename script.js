
// --------New Year Celebration Website-----------

const messages = [
  "I need to tell you something",
  "I've been thinking about this for a while",
  "This wasn't something I could just text...",
  "So I made a small website instead",
  "Because...",
  "I LOVE YOU",
  "Happy New Year, My Dear!"
];

let index = 0;

const messageElement = document.getElementById("message");
const heartElement = document.getElementById("heart");
const musicElement = document.getElementById("backgroundMusic");

let musicStarted = false;

// Increasing the volume of the music
function fadeInMusic() {
  musicElement.volume = 0;
  musicElement.muted = false;
  musicElement.play();

  let volume = 0;
  const fadeInterval = setInterval(() => {
    volume += 0.02;
    if (volume >= 0.6) {
      musicElement.volume = 0.6;
      clearInterval(fadeInterval);
    } else {
      musicElement.volume = volume;
    }
  }, 100);
}

// Click interaction
heartElement.addEventListener("click", () => {
  if (!musicStarted) {
    fadeInMusic();
    musicStarted = true;
  }

  index++;

  if (index < messages.length) {
    messageElement.textContent = messages[index];

    if (messages[index] === "I LOVE YOU") {
      messageElement.style.fontSize = "4rem";
      messageElement.style.letterSpacing = "2px";
    }
  } else {
    heartElement.style.animation = "none";
  }
});