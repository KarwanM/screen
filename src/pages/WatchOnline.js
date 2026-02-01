import React from "react";
import Data from "../db.json";

const Watch = () => {
  window.scrollTo(0, 0);

  const id = new URLSearchParams(window.location.search).get("id") - 1;
  const movie = Data.movies[id];

  return (
    <div className="player">
      <iframe
        src={movie.trailer}
        frameBorder="0"
        title="Watch Online"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
