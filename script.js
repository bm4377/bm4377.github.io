const player = new DPlayer({
    container: document.getElementById('player-container'),
    video: {
        url: 'path/to/your/video.mp4' // Replace with your actual video URL
    },
    // Optional settings (customize as needed)
    autoplay: false, // Start playback automatically
    muted: false,
    loop: false,
    volume: 0.7,
    // ... other DPlayer options 
});
