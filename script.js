// Get the video URL from query parameters
const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('videoUrl');

// Initialize Video.js Player
const videoPlayer = videojs('videoPlayer');

// Load video dynamically
if (videoUrl) {
    videoPlayer.src({ src: videoUrl, type: 'video/mp4' });
    videoPlayer.ready(function () {
        this.play(); // Auto-play the video once ready
    });
} else {
    alert('No video URL provided!');
}
