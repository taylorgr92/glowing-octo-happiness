//assign dom manipulation variables
var gifSectEl = document.getElementById("#gifSect");
var btnSearchEl = document.getElementById("#btnSearch");

//giphy API key
var APIKEY = "k0CkMRxLxYYn0D6z8cZC35N8woAyytgJ";

//event listener to load page
document.addEventListener("DOMContentLoaded", initGifs);
function initGifs() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload

    var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=categorymovie`; //limits search results to the movie category with a limit of 10
    var gifStr = document.getElementById("search").value.trim();
    url = url.concat(gifStr);
    getMovieGifs(url); //
  });
}

///fetch request for gif

var getMovieGifs = function (url) {
  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      console.log(content.data[0]);
      //looping through gifs to display each
      for (var i = 0; i < content.data.length; i++) {
        var video = document.createElement("video");
        //looping property allows gif to loop for 15 seconds
        video.src = content.data[i].images.looping.mp4;
      }
    });
};
