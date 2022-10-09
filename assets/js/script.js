fetch('http://www.omdbapi.com/?i=tt10648342&apikey=4db90ed2')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });