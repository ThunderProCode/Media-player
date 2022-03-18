
import MediaPlayer from './mediaplayer.js';
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';


//Get Elements from HTML
const video = document.querySelector('video');
const playPauseButton = document.getElementById('play-pause-button');
const muteButton = document.getElementById('mute-unmute-button');

const playSvg = document.getElementById('play-svg');
const pauseSvg = document.getElementById('pause-svg');
pauseSvg.style.display = 'none';

const muteSvg = document.getElementById('mute-svg');
const unmuteSvg = document.getElementById('unmute-svg');
unmuteSvg.style.display = 'none';

//New instance of MediaPlayer
const player = new  MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
]});

function toggleSvgs (){

    if(player.media.paused){
        pauseSvg.style.display = 'none';
        playSvg.style.display = '';
    }else {
        playSvg.style.display = 'none';
        pauseSvg.style.display = '';
    }

    if(player.media.muted){
        unmuteSvg.style.display = '';
        muteSvg.style.display = 'none';
    } else {
        unmuteSvg.style.display = 'none';
        muteSvg.style.display = '';
    }

}


//Connectiong HTML buttons with MediaPlayer actions
playPauseButton.onclick = () => player.togglePlay();

muteButton.onclick  = () => player.toggleMute();

export default toggleSvgs;