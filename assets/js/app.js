$(document).ready(function(){
    $('.modal').modal();
  });

let rawgKey = '576858f4b6fa477990afac4add5f794f';

function halo1() {

    var requestUrl = 'https://api.rawg.io/api/games/halo-combat-evolved?key=576858f4b6fa477990afac4add5f794f';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data);
        console.log(data.name);
        console.log(data.metacritic);
        console.log(data.description);
        console.log(data.released);

    let oneHead = $('.one');
    let oneDescription = $('.game-description-1');
 
    let oneTitle = data.name;
        oneHead.append(oneTitle);
    let oneAbout = data.description;
        oneDescription.append(oneAbout);

  
        
});
}


  function halo2() {

    var requestUrl = 'https://api.rawg.io/api/games/halo-2?key=576858f4b6fa477990afac4add5f794f';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data);
        console.log(data.name);
        console.log(data.metacritic);
        console.log(data.description);
        console.log(data.released);


});

}     

    
    function halo3() {

        var requestUrl = 'https://api.rawg.io/api/games/halo-3?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // console.log(data);
            console.log(data.name);
            console.log(data.metacritic);
            console.log(data.description);
            console.log(data.released);
    });
    }     

    function halo4() {

        var requestUrl = 'https://api.rawg.io/api/games/halo-4?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // console.log(data);
            console.log(data.name);
            console.log(data.metacritic);
            console.log(data.description);
            console.log(data.released);
    });
    }     

    function halo5() {

        var requestUrl = 'https://api.rawg.io/api/games/halo-5-guardians?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // console.log(data);
            console.log(data.name);
            console.log(data.metacritic);
            console.log(data.description);
            console.log(data.released);
    });
    }     

    function haloInfinite() {

        var requestUrl = 'https://api.rawg.io/api/games/halo-infinite?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // console.log(data);
            console.log(data.name);
            console.log(data.metacritic);
            console.log(data.description);
            console.log(data.released);

          });
        }

    halo1();
    halo2();
    halo3();
    halo4();
    halo5();
    haloInfinite();
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

