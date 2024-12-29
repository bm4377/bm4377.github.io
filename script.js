const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const muteUnmuteBtn = document.getElementById('mute-unmute');
const fullscreenBtn = document.getElementById('fullscreen');

let isPlaying = false;
let isMuted = false;

// Update progress bar and current time
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percent}%`;
    currentTimeEl.textContent = formatTime(video.currentTime);
}

// Format time in HH:MM:SS format
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
}

// Handle play/pause button click
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playPauseBtn.textContent = '▶';
    } else {
        video.play();
        playPauseBtn.textContent = '||';
    }
    isPlaying = !isPlaying;
});

// Handle video events
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(video.duration);
});

// Handle progress bar click
progressBar.addEventListener('click', (event) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = ((event.clientX - rect.left) / progressBar.clientWidth) * 100;
    video.currentTime = (percent / 100) * video.duration;
});

// Handle mute/unmute button click
muteUnmuteBtn.addEventListener('click', () => {
    if (isMuted) {
        video.muted = false;
        muteUnmuteBtn.textContent = '🔊';
    } else {
        video.muted = true;
        muteUnmuteBtn.textContent = '🔇';
    }
    isMuted = !isMuted;
});

// Handle fullscreen button click
fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        video.requestFullscreen();
    }
});

// Initial state
video.muted = true;
muteUnmuteBtn.textContent = '🔊';
