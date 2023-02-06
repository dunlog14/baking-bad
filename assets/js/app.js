$(document).foundation()

let haloKey = '576858f4b6fa477990afac4add5f794f';


const getGameInfo = () => {
    let getGameUrl ='https://api.rawg.io/api/games/halo-combat-evolved';
    

}

// function to play theme song (EASTER EGG)
function PlaySound(soundobj) {
    var thissound=document.getElementById('mySound');
    thissound.play();
    thissound.volume = 0.2;
// thissound.addEventListener('mouseover', PlaySound());
}

function StopSound(soundobj) {
    var thissound=document.getElementById('mySound');
    thissound.pause();
    thissound.currentTime = 0;
}




