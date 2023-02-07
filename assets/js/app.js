document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

let rawgKey = '576858f4b6fa477990afac4add5f794f';

function halo1() {
async function fetchData() {
    return (await fetch('https://api.rawg.io/api/games/halo-combat-evolved?key=576858f4b6fa477990afac4add5f794f')).json();
}
document.addEventListener("DOMContentLoaded", async () => {
    let games = [];
    try {
        games = await fetchData();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }
    console.log(games);
});
};

halo1();


  
// function to play theme song (EASTER EGG)
function PlaySound(soundobj) {
    var thissound=document.getElementById('mySound');
    thissound.play();
    thissound.volume = 0.5;
// thissound.addEventListener('mouseover', PlaySound());
}

function StopSound(soundobj) {
    var thissound=document.getElementById('mySound');
    thissound.pause();
    thissound.currentTime = 0;
};

