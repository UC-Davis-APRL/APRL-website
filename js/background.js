const video = document.getElementById("intro_vid");
const background = document.querySelector(".bg-fade");


video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 4) {
    background.classList.add("show");
    video.classList.add("fade-out");
  }
  if (video.currentTime >= 8) {
    video.pause();
  }
});