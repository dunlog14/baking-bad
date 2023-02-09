// This javascript is the interface to the YouTube v3 Data API for the bbaking-bad 
// project.

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


// Using YouTube V3 Data API with public data  
//const api = 'AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPM;
const api = 'AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPM';
//console.log(api)
// take search item from console. comment out code once integrated with project

//test code to prompt for search search string
const output = document.querySelector('.output');
const searchTerm = document.querySelector('input');
const btn = document.querySelector("button");
searchTerm.setAttribute('value', 'test');
// remove button code once testbed testing complete

// prev and next to go back and forth among multiple matches
const btnPrev = document.createElement('button');
// future 
btnPrev.setAttribute('disabled', true);
btnPrev.textContent = 'Prev';
document.body.appendChild(btnPrev);
const btnNext = document.createElement('button');
btnNext.setAttribute('disabled',true);
btnNext.textContent = 'Next';
document.body.appendChild(btnNext);
const btns = document.querySelectorAll('button');

// has button been clicked?
btns.forEach(function(btn){
   btn.addEventListener('click', ySearch);
})


// Snippet is also specifed in part key for search
// maxResults specified otherwise default is 25
// q is for query and that is the name of the search stream

// test url

// Note key is NOT in quotes
// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=1AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPM&q=test'
// search YouTube database
function ySearch(e){
   let search = searchTerm.value;
   // replace blanks to %20
   //encodeURlComponent(search);
   // part snippet, api, q=halo, max results 1
   // q is hardcoded with game name
let url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q=halo&maxResults=1;AIzaSyDY8Ekkip8n1d0Q_OK5E-YDoad89n1zaPMkkip8n1d0Q_OK5E-YDoad89n1zaPM&q=halo';
output.textContent = url;
console.log(output.textContent)

// token code should be removed. not needed
// document what token is
//if(e.target.token){
 //   url += '&pageToken=' + e.target.token;
//}
//output.textContent = url;

// execute api and return json
fetch(url).then(function(rep){
    console.log("call api")
// return data (reponse) as javascript object
 return rep.json()
}).then(function(data){
    console.log(data);

  if(data.prevPageToken){
    btnPrev.token = data.prevPageToken;
    btnPrev.disabled = false;
  }
   else {
    btnPrev.token = false;
    btnPrev.disabled = true;
   }
  if (data.nextPageToken){
    btnNext.token = data.nextPageToken;
    btnNext.disabled = false;
  }
else {
    btnNext.token = false;
    btnNext.disabled = true;
}
// create array with  maps function of result
return data.items.map(function (x){
    return {
        title: x.snippet.title,
        des: x.snippet.description,
        img: x.snippet.thumbnails.default.url,
        id: x.id.videold,
        x: x
    
    }  
})
}).then(function (arr){
    show(arr);
}).catch(function (error){

})
}

function show(data) {
    console.log(data);
    console.log(data.length);

// should this be " or ""? single makes not sense. check doc
    output.innerHTML = "";
    data.forEach(function(video){

    let div = document.createElement('div');
    div.classList.add('box');
    let temp = document.createAttribute.TextNode(video.des);
    let span = document.createElement('span');

    // double check quotes and ticks on this
    span.innerHTML = '<a href="http://www.youtube.com/watch?v=' + video.id + '"target="_blank">' + video.title + '</a>';

    div.appendChild(span);
    div.appendChild(temp);
    output.appendChild(div);
    })
}