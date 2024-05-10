import React from "react";
import movieList from "../../data/movies.json";
import MovieCard from "../MovieCard/MovieCard";
import { ListWrapper, OuterWrapper } from "./styles/movieList";
import SectionHeading from "../UI/SectionHeading";

const MovieList = () => {
  return (
    <OuterWrapper>
      <SectionHeading title={"ALL SHOWS"} />
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
    </OuterWrapper>
  );
};

export default MovieList;
