// haloInfintiteVid();

// function haloInfintiteVid() {
// var oneTag = document.createElement('script');

//       oneTag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(pneTag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '390',
//           width: '640',
//           videoId: 'PyMlV5_HRWk',
//           playerVars: {
//             'playsinline': 1
//           },
       
//         });
//       };

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1;
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '390',
          width: '640',
          videoId: 'lie_ysmcQV8',
        });
        
        player2 = new YT.Player('player2', {
            height: '390',
            width: '640',
            videoId: 'rl5J-rqJa3o'
          });

        player3 = new YT.Player('player3', {
            height: '390',
            width: '640',
            videoId: '_DtftmGZpgE'
          });

        player4 = new YT.Player('player4', {
            height: '390',
            width: '640',
            videoId: 'YoS8i8Rx_uI'
          });

        player5 = new YT.Player('player5', {
            height: '390',
            width: '640',
            videoId: 'Rh_NXwqFvHc'
          });

        player6 = new YT.Player('player6', {
            height: '390',
            width: '640',
            videoId: 'PyMlV5_HRWk'
          });
      }



