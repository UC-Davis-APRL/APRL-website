document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        "intro_vid.mp4#t=1"
    ];

    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideo = videos[randomIndex];
    const videoElement = document.getElementById("intro_vid");

    videoElement.src = selectedVideo;
    videoElement.load();
    videoElement.play().catch(error => {
        console.log("Intro video error: ", error);
    });
});