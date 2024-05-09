import React from "react";
import movieList from "../../data/movies.json";
import MovieCard from "../MovieCard/MovieCard";
import { ListWrapper } from "./styles/movieList";

const MovieList = () => {
  return (
    <ListWrapper>
      {movieList.movies.map((movie) => (
        <MovieCard
          key={movie._id}
          id={movie._id}
          backdrop={movie.backdrop_path}
          genres={movie.genres}
          overview={movie.overview}
          poster={movie.poster_path}
          releaseDate={movie.release_date}
          title={movie.title}
        />
      ))}
    </ListWrapper>
  );
};

export default MovieList;
