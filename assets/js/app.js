$(document).ready(function(){
    $('.modal').modal();
  });

let rawgKey = '576858f4b6fa477990afac4add5f794f';

function halo1() {
    let youtubeUrl = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU
    &part=snippet,contentDetails,statistics,status`;

    var requestUrl = 'https://api.rawg.io/api/games/halo-combat-evolved?key=576858f4b6fa477990afac4add5f794f';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.metacritic);
        console.log(data.description);
        console.log(data.released);

    let oneHead = $('.one');
    let oneDescription = $('.game-description-1');
    let oneVideo = $('.video');
 
    let oneTitle = data.name;
        oneHead.append(oneTitle);
    let oneAbout = data.description;
        oneDescription.append(oneAbout);
    let oneYouTube = video.list;
  
        
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

    let fiveForecastEl = $('.fiveForecast');

// displays the five day forecast with temperature, wind speed, and humidity

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

