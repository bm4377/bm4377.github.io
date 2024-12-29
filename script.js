// Fetch the video URL from query parameters
const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('videoUrl');

// Initialize Video.js
const videoPlayer = videojs('videoPlayer');

// Load the video source dynamically
if (videoUrl) {
    videoPlayer.src({ src: videoUrl, type: 'video/mp4' });
    videoPlayer.ready(function () {
        this.play(); // Play the video once it's ready
    });
} else {
    alert('No video URL provided!');
}
