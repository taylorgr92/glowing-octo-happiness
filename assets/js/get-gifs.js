import React, { useState, useEffect } from "react";

const APIKEY = "qAY2xUeCahTZp2g4nhu5pjwMQPcOQINZ";

const GifSearch = () => {
  const [gifStr, setGifStr] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=15&q=category:movie ${gifStr}`;

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        setGifs(content.data);
      });
  };

  return (
    <div>
      <form>
        <input type="text" value={gifStr} onChange={(event) => setGifStr(event.target.value)} />
        <button id="btnSearch" onClick={handleSearch}>Search</button>
      </form>
      <section className="gifSect">
        {gifs.map((gif) => (
          <video key={gif.id} height="200px" width="200px" padding="20px" autoPlay>
            <source src={gif.images.looping.mp4} />
          </video>
        ))}
      </section>
    </div>
  );
};

export default GifSearch;