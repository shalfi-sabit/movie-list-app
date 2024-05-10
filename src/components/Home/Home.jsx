import React from "react";
import MovieList from "../MovieList/MovieList";
import Backdrop from "../Backdrop/Backdrop";
import movieList from "../../data/movies.json";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Home = () => {
  return (
    <div>
      <Backdrop movieId={movieList.movies[getRandomInt(0, 41)]._id} />
      <MovieList />
    </div>
  );
};

export default Home;
