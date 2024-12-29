const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const videoUrl = urlParams.get('videoUrl');

if (videoUrl) {
    const player = new Player('#player-container', {
        file: videoUrl,
        autoplay: false,
        muted: false,
        controls: true,
        // ... other options
    });
} else {
    console.error("Missing video URL parameter");
}
