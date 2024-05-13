import React from "react";
import movieList from "../../data/movies.json";
import MovieCard from "../MovieCard/MovieCard";
import { ListWrapper, OuterWrapper } from "./styles/movieList";
import SectionHeading from "../UI/SectionHeading";

const MovieList = ({
  seeDetailsHandler,
  setBookmarkedMovies,
  bookmarkedMovies,
  alreadyWatchedMovies,
  setAlreadyWatchedMovies,
}) => {
  const topTenMovies = movieList.movies.filter((movie, idx) => idx < 12);

  return (
    <OuterWrapper>
      <SectionHeading title={"TRENDING SHOWS"} />
      <ListWrapper>
        {topTenMovies.map((movie, idx) => (
          <MovieCard
            key={movie._id}
            id={movie._id}
            backdrop={movie.backdrop_path}
            genres={movie.genres}
            overview={movie.overview}
            poster={movie.poster_path}
            releaseDate={movie.release_date}
            title={movie.title}
            duration={movie.duration}
            idx={idx}
            seeDetailsHandler={seeDetailsHandler}
          />
        ))}
      </ListWrapper>

      <SectionHeading title={"ALL SHOWS"} />
      <ListWrapper>
        {movieList.movies.map((movie, idx) => (
          <MovieCard
            key={movie._id}
            id={movie._id}
            backdrop={movie.backdrop_path}
            genres={movie.genres}
            overview={movie.overview}
            poster={movie.poster_path}
            releaseDate={movie.release_date}
            title={movie.title}
            duration={movie.duration}
            idx={idx}
            seeDetailsHandler={seeDetailsHandler}
          />
        ))}
      </ListWrapper>
    </OuterWrapper>
  );
};

export default MovieList;
