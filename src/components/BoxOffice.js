import React, { useState, useEffect } from "react";
import Data from "../db.json";

const BoxOffice = () => {
  const [boxOffice, setBoxOffice] = useState();

  useEffect(() => {
    setBoxOffice(Data.box_office);
  }, []);

  return (
    <div className="box-office">
      {boxOffice ? (
        boxOffice.map((movie) => {
          return (
            <div className="box-office-wrapper" key={movie.id}>
              <div className="box-office-poster">
                <img src={movie.poster} alt="Box Office Movie Poster"></img>
              </div>
              <div className="box-office-details">
                <h2>{"0" + movie.top}</h2>
                <div>
                  <h3>{movie.title}</h3>
                  <span>
                    week {movie.week} / gross: ${movie.weekly_gross} million /
                    total gross: ${movie.total_gross} million
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default BoxOffice;
