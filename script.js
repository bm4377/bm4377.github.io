const videoPlayer = document.getElementById('videoPlayer');
const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('videoUrl');

if (videoUrl) {
    videoPlayer.src = videoUrl;
    videoPlayer.addEventListener('loadedmetadata', function() {
        videoPlayer.play();
    });
} else {
    alert('No video URL provided!');
}

// You can add custom control functionality here (optional)
