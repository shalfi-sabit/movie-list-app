import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Backdrop from "../Backdrop/Backdrop";
import movieList from "../../data/movies.json";
import Navbar from "../Navbar/Navbar";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Home = () => {
  const navigate = useNavigate();
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [alreadyWatchedMovies, setAlreadyWatchedMovies] = useState([]);

  const seeDetailsHandler = (idx) => {
    navigate(`/details/${idx}`);
  };

  return (
    <div>
      <Navbar />
      <Backdrop
        movieId={movieList.movies[getRandomInt(0, 41)]._id}
        seeDetailsHandler={seeDetailsHandler}
      />
      <MovieList
        seeDetailsHandler={seeDetailsHandler}
        setBookmarkedMovies={setBookmarkedMovies}
        bookmarkedMovies={bookmarkedMovies}
        alreadyWatchedMovies={alreadyWatchedMovies}
        setAlreadyWatchedMovies={setAlreadyWatchedMovies}
      />
    </div>
  );
};

export default Home;
