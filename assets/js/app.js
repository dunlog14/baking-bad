$(document).ready(function(){
    $('.modal').modal();
  });

let rawgKey = '576858f4b6fa477990afac4add5f794f';

function halo1() {

    var oneUrl = 'https://api.rawg.io/api/games/halo-combat-evolved?key=576858f4b6fa477990afac4add5f794f';
  
    fetch(oneUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.metacritic);
        console.log(data.description);
        console.log(data.released);
        
// let firstModal = document.getElementById('#modal1');
// firstModal.on('click')

    let oneName = $('.title-1');
      oneName.append(data.name);
    let oneDescription = $('.game-description-1');
      oneDescription.append(data.description);
    let oneMeta = $('.meta')
      oneMeta.append(data.metacritic);
      });
}


  function halo2() {

    var twoUrl = 'https://api.rawg.io/api/games/halo-2?key=576858f4b6fa477990afac4add5f794f';
  
    fetch(twoUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data);
        console.log(data.name);
        console.log(data.metacritic);
        console.log(data.description);
        console.log(data.released);

        let oneName = $('.title-2');
        oneName.append(data.name);
      let oneDescription = $('.game-description-2');
        oneDescription.append(data.description);
      let oneMeta = $('.meta')
        oneMeta.append(data.metacritic);
});  


}     

    
    function halo3() {

        var threeUrl = 'https://api.rawg.io/api/games/halo-3?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(threeUrl)
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

        var fourUrl = 'https://api.rawg.io/api/games/halo-4?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(fourUrl)
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

        var fiveUrl = 'https://api.rawg.io/api/games/halo-5-guardians?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(fiveUrl)
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

        var sixUrl = 'https://api.rawg.io/api/games/halo-infinite?key=576858f4b6fa477990afac4add5f794f';
      
        fetch(sixUrl)
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

// let gameListEl = $('.gameList');
// function getGames() {
// 	let getUrl = `https://api.rawg.io/api/games/halo-combat-evolved?key=576858f4b6fa477990afac4add5f794f`;

// 	$.ajax({
// 		url: getUrl,
// 		method: 'GET',
// 	}).then(function (response) {
// 		let gameArray = response.name;
//     console.log(response.list);
// 		let myGames = [];
// 		$.each(gameArray, function (index, value) {
// 			objects = {
// 				name: value.data.name,
//         about: value.data.description,
//         rating: value.metacritic,
// 			}
      
// 				myGames.push(objects);
//         console.log(index);
//     });
//   });
// };


// getGames();

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

