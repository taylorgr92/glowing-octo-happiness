fetch('http://www.omdbapi.com/?i=tt10648342&apikey=4db90ed2')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  fetch('https://api.giphy.com/v1/gifs/search?api_key=qAY2xUeCahTZp2g4nhu5pjwMQPcOQINZ&q=thor&limit=10')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });