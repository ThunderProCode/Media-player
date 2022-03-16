
import MediaPlayer from './mediaplayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

//Get Elements from HTML
const video = document.querySelector('video');
const playPauseButton = document.getElementById("play-pause-button");
const unmuteButton = document.getElementById("unmute-button");
const muteButton = document.getElementById("mute-button");

//New instance of MediaPlayer
const player = new  MediaPlayer({ el: video, plugins: [
    new AutoPlay()
]});

//Connectiong HTML buttons with MediaPlayer actions
playPauseButton.onclick = () => player.togglePlay();
unmuteButton.onclick  = () => player.unmute();
muteButton.onclick = () => player.mute();