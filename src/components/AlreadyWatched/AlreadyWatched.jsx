import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Wrapper } from "./styles/alreadyWatched.styles";
import SectionHeading from "../UI/SectionHeading";
import MovieCard from "../MovieCard/MovieCard";
import { ListWrapper } from "../MovieList/styles/movieList";
import DataStorageContext from "../../contexts/DataStorageContext";
import { useNavigate } from "react-router-dom";
import movieList from "../../data/movies.json";

const AlreadyWatched = () => {
  const navigate = useNavigate();
  const { alreadyWatchedList } = useContext(DataStorageContext);

  const seeDetailsHandler = (idx) => {
    navigate(`/details/${idx}`);
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <SectionHeading title="ALREADY WATCHED" />
        <ListWrapper>
          {alreadyWatchedList.map((movie, idx) => {
            return (
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
                idx={movieList.movies.findIndex(
                  (newMovie) => newMovie._id === movie._id
                )}
                seeDetailsHandler={seeDetailsHandler}
              />
            );
          })}
        </ListWrapper>
        )
      </Wrapper>
    </div>
  );
};

export default AlreadyWatched;
