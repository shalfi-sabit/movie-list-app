import React from "react";
import movieList from "../../data/movies.json";
import Backdrop from "../Backdrop/Backdrop";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Header = () => {
  console.log(movieList.movies);
  return (
    <header>
      <Backdrop movieId={movieList.movies[getRandomInt(0, 41)]._id} />
    </header>
  );
};

export default Header;
