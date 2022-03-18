
//AutoPlay plugin 
function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
   if(player.media.muted){
      player.play();
   }
};

export default AutoPlay;