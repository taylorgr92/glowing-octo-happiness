// var btnSearchEl = document.getElementById("#btnSearch");
// var posterEl =document.getElementById("#movie_poster")

// document.addEventListener("DOMContentLoaded", initPoster);
// function initPoster() {
//   document.getElementById("btnSearch").addEventListener("click", (ev) => {
//     ev.preventDefault(); //to stop the page reload
//     var movieStr = document.getElementById("search").value.trim();

//     console.log(movieStr);
//     url = url.concat(movieStr);
//     getMovieGifs()

//     var getMovieGifs = function () {


      var url = 'http://www.omdbapi.com/?t=romeo+juliet&page=1&apikey=4db90ed2';

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
//     };
//   });
// }
