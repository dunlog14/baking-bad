// This javascript is the interface to the YouTube v3 Data API for the baking-bad 
// Project
// From the Main javascript Halo video game homepage, this code returns the url to 
// a Official YouTube video trailer for the user selected Halo video game.

// Version 1 of this code only returns 1 result from the YouTube search. Future 
// releases may return up to 5 YouTube video results. Those results could be 
// scrolled PREV and Next to navigate all 5 videos. The basic code to do this 
//navigation is commented out for use in a future release.
//
//https://developers.google/youtube/v3/quickstart.js

    // key for project baking-bad created on YouTube API page 
    // note key can be stripped by anyone running this code and 
    // using inspect. Therefore, key should be restricted to 
    // make it less attractive to someone stealing it




// Keys have quotas associated with them. I don't expect to run out of my daily quota, but if I do
// quota is reset every day at midnight.
// if quota is an issue, a form can be filled out to request more quota. Turn around on form is 
// 24 hours
// Projects that enable the YouTube Data API have a default quota allocation of 10,000 units 
// per day, an amount sufficient for the overwhelming majority of our API users.
// Using YouTube V3 Data API with public data  
//const api = 'AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPM;
// console.log("top of script")


 const api = 'AIzaSyCAP-iPzob8qYBirex5NaZNyEAfylpjyBo';


//console.log("key", api);

// javascript overview v2 (rewritten from first pass)
// set up variable for the six halo video games we are supporting
//
// curate best video associate with halo video game and create search kety
//
// based on what video is being displayed on main page, create a search string for youtube v3 data api
// part=snippet, key=api, q=search criteria
//
// set up http: watch string with video id to display "found" video
//
// What Halo games do we support with this app?
// Halo: Combat, Halo: Evolution, Halo 2, Halo 3, Halo 4, Halo 5, Halo: Infinite
//
// Halo: Combat Evolved search string 'halo combat evolved full game' Also referred to as Halo 1 in code.
// Halo 2 search string 'halo 2 full campaign and cutscenes'
// Halo 3 search string 'halo 3 pc halo: the master chief collection'
// Halo 4 Search string 'halo 4 pc halo: the master chief collection'
// Halo 5 Search string 'halo 5 launch gameday trailer'
// Halo Infinite Search string 'halo infinite campaign launch trailer'

// passed from HTML?
//let gameID = "Halo Combat Evolved";
//let gameID = "Halo 2";
//let gameID = "Halo 3";
//let gameID = "Halo 4";
//let gameID = "Halo 5":
//let gameID = "Halo Infinite";

//let searchq = "";
//console.log("gameID", gameID);
//console.log("searchq", searchq);



//if (gameID == "Halo Combat Evolved") {
//      searchq = 'halo combat evolved full game';}
//else if (gameID == 'Halo 2') {
//      searchq = 'halo 2 full campaign and cutsenses';}
//else if (gameID == 'Halo 3') {
//      searchq = 'halo 3 pc halo: the master chief collection';}
//else if (gameID == "halo 4") {
 //     searchq = 'halo 4 pc halo: the master chief collection';}
 //else if (gameID == Halo 5) {
 //     searchq = 'halo 5 launch gameday trailer';}
//else if (gameID == "Halo: Infinite") {
//      searchq = 'halo infinite cmpaign launch trailer';}
//else {console.log(gameID, "Invalid Game ID");}

//console.log("gameID", gameID, "searchq", searchq);

// take search item from console. comment out code once integrated with project

//test code to prompt for search search string
// Snippet is also specifed in part key for search
// maxResults specified otherwise default is 25
// q is for query and that is the name of the search stream

// test url
// copied url to web browser to test. it worked!
searchq = 'halo combat evolved full game';
const testurl = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
// console.log("testurl", testurl);

// Note key is NOT in quotes
// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU&q='halo video game official trailer'&maxResults=1'
// search YouTube database
// I need to create a variable for q for each halo video game search


// Halo Combat Evolved (aka Halo 1) Search and Fetch


function Halo1Search(){
      searchq = 'halo combat evolved full game'
      const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
      // part snippet, api, q=halo, max results 1
      // q is in "" not ''
      
      
      fetch(url).then(function(rep){
      // convert json to javascript object
      return rep.json()

  }).then(function(data){
// convert json array to something javascript can tranverse
//     const youtubeArray = JSON.parse(data);
//     console.log("YoutubeArray", youtubeArray);
//     console.log("youtube data", data);
//     console.log("array 0", data.items[0]);
 //      console.log("videoID", data.items[0]['id']['videoId']);

//      videoId = 'lie_ysmcQV8'
      videoId = data.items[0]['id']['videoId'];
 //   console.log("videoId", videoId);
      youtubeHalo1 = 'https://www.youtube.com/watch?v='+videoId+'"target="_blank"';
 //     console.log("Halo1 youtube url", youtubeHalo1);    
  })
}

// Halo 2 Search and Fetch


function Halo2Search(){
      searchq = 'halo 2 full campaign and cutscenes'
      const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
      // part snippet, api, q=halo, max results 1
      // q is in "" not ''
      
      
      fetch(url).then(function(rep){
      // convert json to javascript object
      return rep.json()
  }).then(function(data){
//    console.log("youtube data", data);
//    console.log("array 0", data.items[0]);
//    console.log("youtube video ID", data.items[0].id);
//    videoId = 'rl5J-rqJa3o';
      videoId = data.items[0]['id']['videoId'];
      youtubeHalo2 = 'https://www.youtube.com/watch?v='+videoId+'"target="_blank"';
 //     console.log("Halo 2 youtube url", youtubeHalo2);

  })
}

// Halo 3 Search and Fetch


function Halo3Search(){
      searchq = 'halo 3 pc halo: the master chief collection'
      const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
      // part snippet, api, q=halo, max results 1
      // q is in "" not ''
      
      
      fetch(url).then(function(rep){
      // convert json to javascript object
      return rep.json()
  }).then(function(data){
//    console.log("youtube data", data);
//    console.log("array 0", data.items[0]);
//    console.log("youtube video ID", data.items[0].id);
//    videoId = '_DtftmGZpgE';
      videoId = data.items[0]['id']['videoId'];
      youtubeHalo3 = 'https://www.youtube.com/watch?v='+videoId+'"target="_blank"';
//      console.log("Halo 3 youtube url", youtubeHalo3);

  //   show(data.items);
  })
}

// Halo4 Search and Fetch
searchq = 'halo 4 pc halo: the master chief collection'

function Halo4Search(){
      const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
      // part snippet, api, q=halo, max results 1
      // q is in "" not ''
      
      
      fetch(url).then(function(rep){
      // convert json to javascript object
      return rep.json()
  }).then(function(data){
//    console.log("youtube data", data);
//    console.log("array 0", data.items[0]);
//    console.log("youtube video ID", data.items[0].id);
//    videoId = 'YoS8i8Rx_uI';
      videoId = data.items[0]['id']['videoId'];
      youtubeHalo4 = 'https://www.youtube.com/watch?v='+videoId+'"target="_blank"';
 //     console.log("Halo 4 youtube url", youtubeHalo4);

  })
}

// Halo5 Search and Fetch


function Halo5Search(){
  searchq = 'halo infinite cmpaign launch trailer'
  const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
      // part snippet, api, q=halo, max results 1
      // q is in "" not ''
      
      
      fetch(url).then(function(rep){
      // convert json to javascript object
      return rep.json()
  }).then(function(data){
 //   console.log("youtube data", data);
 //   console.log("array 0", data.items[0]);
 //   console.log("youtube video ID", data.items[0].id);
//    videoId = 'Rh_NXwqFvHc';
      videoId = data.items[0]['id']['videoId'];
      youtubeHalo5 = 'https://www.youtube.com/watch?v='+videoId+'"target="_blank"';
 //     console.log("Halo 5 youtube url", youtubeHalo5);

  })
}

// Halo6 Search and Fetch
searchq = 'halo infinite cmpaign launch trailer'
function Halo6Search(){
      const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
      // part snippet, api, q=halo, max results 1
      // q is in "" not ''
      
      
      fetch(url).then(function(rep){
      // convert json to javascript object
      return rep.json()
  }).then(function(data){
 //   console.log("youtube data", data);
 //   console.log("array 0", data.items[0]);
 //   console.log("youtube video ID", data.items[0].id);
//    videoId = 'PyMlV5_HRWk';
      videoId = data.items[0]['id']['videoId'];
      youtubeHalo6 = 'https://www.youtube.com/watch?v='+videoId+'"target="_blank"';
  //    console.log("Halo 6 youtube url", youtubeHalo6);

  })
}



// syntax to to go youtube video with just video id
//https://www.youtube.com/watch?v=aqz-KE-bpKQ

//function show(data){
//      console.log(data);
//      console.log(data.length);
//      data.forEach(function(video){
//            console.log(video);
//     watchyoutube = 'https://www.youtube.com/watch?v='+video.id+'"target="_blank"';
//     console.log("youtube url", watchyoutube);
//      })
//}

Halo1Search();
Halo2Search();
Halo3Search();
Halo4Search();
Halo5Search();
Halo6Search();