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
const api = 'AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU';
//console.log(api)
// take search item from console. comment out code once integrated with project

//test code to prompt for search search string
// Snippet is also specifed in part key for search
// maxResults specified otherwise default is 25
// q is for query and that is the name of the search stream

// test url

// Note key is NOT in quotes
// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU&q='halo video game official trailer'&maxResults=5'
// search YouTube database
// I need to create a variable for q for each halo video game search
function ySearch(e){
    const url =https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU&q='halo video game official trailer'&maxResults=5
    
    // part snippet, api, q=halo, max results 1
    // q is hardcoded with game name right now
    // copied url to web browser to test. it worked!
    // https://www.youtube.com/embed/PyMlV5_HRWk where last parameter is videoid
    //let url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyC3ADAar5yeEMo-GijNtQXd9rQ51fM9NGU&q=halo&maxResults=5';
     
    return rep.json()
}).then(function(data)){
    console.log(data)
})
}