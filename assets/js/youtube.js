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

// key 2 AIzaSyCAP-iPzob8qYBirex5NaZNyEAfylpjyBo
// key 3 AIzaSyD7M47ah46ao1ARQuXkptByS0yCtyLpi_k
// key 4 AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPM
// Paul's key  AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU

// Keys have quotas associated with them. I don't expect to run out of my daily quota, but if I do
// quota is reset every day at midnight.
// if quota is an issue, a form can be filled out to request more quota. Turn around on form is 
// 24 hours
// Using YouTube V3 Data API with public data  
//const api = 'AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPM;
// console.log("top of script")


const api = 'AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU';
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
// Halo: Combat, Halo: Evolution, Halo 2, Halo 3, Halo 4, Halo: Infinite
//
// Halo: Combat Evolved search string 'halo combat evolved full game'
// Halo 2 search string 'halo 2 full campaign and cutsenses'
// Halo 3 search string 'halo 3 pc halo: the master chief collection'
// Halo 4 Search string 'halo 4 pc halo: the master chief collection'
// Halo 5 Search string 'halo 5 launch gameday trailer'
// Halo Infinite Search string 'halo infinite campaign launch trailer'

let gameID = "Halo Combat Evolved";
let searchq = "";
console.log("gameID", gameID);
console.log("searchq", searchq);

if (gameID == "Halo Combat Evolved") {
      searchq = 'halo combat evolved full game';}
else if (gameID == 'Halo 2') {
      searchq = 'halo 2 full campaign and cutsenses';}
else if (gameID == 'Halo 3') {
      searchq = 'halo 3 pc halo: the master chief collection';}
else if (gameID == "halo 4") {
      searchq = 'halo 4 pc halo: the master chief collection';}
else if (gameID == "Haloa: Infinite") {
      searchq = 'halo infinite cmpaign launch trailer';}
else {console.log(gameID, "Invalid Game ID");}

console.log("gameID", gameID, "searchq", searchq);

// take search item from console. comment out code once integrated with project

//test code to prompt for search search string
// Snippet is also specifed in part key for search
// maxResults specified otherwise default is 25
// q is for query and that is the name of the search stream

// test url
// copied url to web browser to test. it worked!
const testurl = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
// console.log("testurl", testurl);

// Note key is NOT in quotes
// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU&q='halo video game official trailer'&maxResults=1'
// search YouTube database
// I need to create a variable for q for each halo video game search
function ySearch(e){
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+searchq+'&maxResults=1';
    document.querySelector('.output').textContent = url;
    console.log("url", url);
    // part snippet, api, q=halo, max results 1
    // q is hardcoded with game name right now
    // q is in "" not ''
    
    
    fetch(url).then(function(rep){
    // convert json to javascript object
    return rep.json()
}).then(function(data){
    console.log(data)
})
}