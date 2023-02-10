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
    let oneName = $('.title-1');
      oneName.append(data.name);
    let oneDescription = $('.game-description-1');
      oneDescription.append(data.description);
    let oneMeta = $('.meta-1')
      oneMeta.append(data.metacritic);
    let oneRelease = $('.release-1')
        oneRelease.append(data.released);
      });
}


  function halo2() {

    var twoUrl = 'https://api.rawg.io/api/games/halo-2?key=576858f4b6fa477990afac4add5f794f';
  
    fetch(twoUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.name);
        console.log(data.metacritic);
        console.log(data.description);
        console.log(data.released);

      let twoName = $('.title-2');
        twoName.append(data.name);
      let twoDescription = $('.game-description-2');
        twoDescription.append(data.description);
      let twoMeta = $('.meta-2')
        twoMeta.append(data.metacritic);
      let twoRelease = $('.release-2')
        twoRelease.append(data.released);
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

            
    let threeName = $('.title-3');
      threeName.append(data.name);
    let threeDescription = $('.game-description-3');
      threeDescription.append(data.description);
    let threeMeta = $('.meta-3')
      threeMeta.append(data.metacritic);
    let threeRelease = $('.release-3')
      threeRelease.append(data.released);
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

    let fourName = $('.title-4');
      fourName.append(data.name);
    let fourDescription = $('.game-description-4');
      fourDescription.append(data.description);
    let fourMeta = $('.meta-4')
      fourMeta.append(data.metacritic);
    let fourRelease = $('.release-4')
      fourRelease.append(data.released);
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

    let fiveName = $('.title-5');
      fiveName.append(data.name);
    let fiveDescription = $('.game-description-5');
      fiveDescription.append(data.description);
    let fiveMeta = $('.meta-5')
      fiveMeta.append(data.metacritic);
    let fiveRelease = $('.release-5')
      fiveRelease.append(data.released);
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

  let sixName = $('.title-6');
    sixName.append(data.name);
  let sixDescription = $('.game-description-6');
    sixDescription.append(data.description);
  let sixMeta = $('.meta-6')
    sixMeta.append(data.metacritic);
  let sixRelease = $('.release-6')
    sixRelease.append(data.released);
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

