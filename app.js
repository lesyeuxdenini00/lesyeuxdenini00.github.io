let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");
let togglePlayer = document.querySelector(".toggle-player");
let musicPlayer = document.querySelector(".music-container");
let trackInfo = document.querySelector(".track-info");
let trackNav = document.querySelector(".track-nav");

let isHidden = true; // Initialize isHidden variable

// Function to toggle the player visibility
function toggleMusicPlayer() {
    isHidden = !isHidden;
    if (isHidden) {
        musicPlayer.classList.remove("show");
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<img class="w-[98%]" src="close.svg">';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.remove("hide");
        musicPlayer.classList.add("show");
        togglePlayer.innerHTML = '<img class="w-full" src="plus.svg">';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
}

// Event listener for toggling the player
togglePlayer.addEventListener("click", toggleMusicPlayer);

// Load Lottie animation for sound bars
let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});

// Track list with correct path format
let trackList = [
    {
        name: "Fade Into You",
        artist: "Mazzy Star",
        path: "C:/Users/User/OneDrive/Desktop/cyb's 18th/Fade Into You.mp3", // Use forward slashes
    },
];

// Load the track into the audio element
currentTrack.src = trackList[0].path; // Set the current track source

// Set up play/pause functionality
let playPauseButton = document.querySelector('.playpause-track');

playPauseButton.addEventListener('click', () => {
    if (currentTrack.paused) {
        currentTrack.play();
        playPauseButton.innerHTML = '<img class="w-8" src="pause.svg" alt="Pause">'; // Change to pause icon
    } else {
        currentTrack.pause();
        playPauseButton.innerHTML = '<img class="w-8" src="play.svg" alt="Play">'; // Change to play icon
    }
});

// Envelope click to toggle letter visibility
let envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

// Function to update the letter's visibility based on envelope state
function updateLetterVisibility(envelope) {
    const letter = envelope.querySelector('.letter');
    if (envelope.classList.contains('flap')) {
        letter.style.opacity = 1; // Make the letter visible
    } else {
        letter.style.opacity = 0; // Hide the letter when closing
    }
}

// Update letter visibility when the envelope flap animation ends
envelope.addEventListener('transitionend', () => {
    updateLetterVisibility(envelope);
});

// Hide other music players if necessary
function hideOtherPlayers() {
    const allPlayers = document.querySelectorAll('.music-container');
    allPlayers.forEach(player => {
        if (player !== musicPlayer) {
            player.classList.add('hide');
            player.classList.remove('show');
        }
    });
}

// Call hideOtherPlayers when toggling the current player
togglePlayer.addEventListener("click", () => {
    toggleMusicPlayer();
    hideOtherPlayers();
});
