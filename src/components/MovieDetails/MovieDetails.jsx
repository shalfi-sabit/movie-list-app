import React, { useContext } from "react";
import movieList from "../../data/movies.json";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  BackdropContainer,
  BackdropImage,
  BackdropShadow,
  Poster,
  DetailsCard,
  PageContainer,
  Texts,
  PrimaryTitle,
  SecondaryTitle,
  Description,
  DescriptionTitle,
  ButtonsContainer,
  WatchTrailerButton,
  WatchLaterButton,
  TitleContainer,
  Rating,
  TitleTextContainer,
  DirectorName,
  CastsName,
} from "./styles/movieDetails.styles";
import { MoreLikeThisContainer } from "./styles/moreLikeThis.styles";
import SectionHeading from "../UI/SectionHeading";
import MovieCard from "../MovieCard/MovieCard";
import { ListWrapper } from "../MovieList/styles/movieList";
import DataStorageContext from "../../contexts/DataStorageContext";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    watchLaterListHandler,
    alreadyWatchedListHandler,
    setAlreadyWatchedList,
    setWatchLaterList,
    alreadyWatchedState,
    setAlreadyWatchedState,
    watchLaterState,
    setWatchLaterState,
    setIsSnackbarOpen,
    setSnackbarMessage,
  } = useContext(DataStorageContext);

  const seeDetailsHandler = (idx) => {
    navigate(`/details/${idx}`);
  };

  let moreLikeThisList = [];
  for (let i = movieList.movies.length - 1; i >= 0; --i) {
    if (moreLikeThisList.length === 6) {
      break;
    }
    if (i !== params.id) {
      moreLikeThisList.push({
        ...movieList.movies[i],
        idx: i,
      });
    }
  }

  return (
    <div>
      <Navbar />
      <PageContainer>
        <div>
          <BackdropContainer>
            <BackdropImage
              src={movieList.movies[params.id].backdrop_path}
              alt="Movie Backdrop"
            />
            <BackdropShadow></BackdropShadow>
          </BackdropContainer>
          <DetailsCard>
            <Poster
              src={movieList.movies[params.id].poster_path}
              alt="Movie poster"
            />
            <Texts>
              <TitleContainer>
                <TitleTextContainer>
                  <SecondaryTitle>TITLE</SecondaryTitle>
                  <PrimaryTitle>
                    {movieList.movies[params.id].title}
                  </PrimaryTitle>
                </TitleTextContainer>
                <i
                  className="ri-bookmark-fill"
                  style={{
                    color: `${watchLaterState[params.id] ? "red" : "#fff"}`,
                    fontSize: "min(32px, 6.5vw)",
                    transition: ".4s",
                  }}
                  onMouseOver={(event) => {
                    event.target.style.color = `${
                      watchLaterState[params.id]
                        ? "#b31200"
                        : "rgba(255, 255, 255, .7)"
                    }`;
                  }}
                  onMouseOut={(event) => {
                    event.target.style.color = `${
                      watchLaterState[params.id] ? "red" : "#fff"
                    }`;
                  }}
                  onClick={() => {
                    if (watchLaterState[params.id]) {
                      setIsSnackbarOpen(true);
                      setSnackbarMessage(
                        "Movie removed from Watch Later successfully."
                      );
                      setWatchLaterList((prevState) => {
                        let updatedState = prevState.filter(
                          (movie) =>
                            movie._id !== movieList.movies[params.id]._id
                        );
                        return updatedState;
                      });
                    } else {
                      setIsSnackbarOpen(true);
                      setSnackbarMessage(
                        "Movie added to Watch Later successfully."
                      );
                      watchLaterListHandler(params.id);
                    }
                    setWatchLaterState((prevState) => {
                      let updatedState = { ...prevState };
                      updatedState[params.id] = !watchLaterState[params.id];
                      return updatedState;
                    });
                  }}
                  title={
                    watchLaterState[params.id]
                      ? "Undo Watch Later"
                      : "Watch Later"
                  }
                ></i>
              </TitleContainer>

              <Rating>IMDb Rating: 8.8</Rating>

              <DirectorName>DIRECTOR | Jon Watts</DirectorName>
              <CastsName>
                ACTOR | Tom Holland, Michael Keaton, Robert Downey Jr ...
              </CastsName>

              <DescriptionTitle>Film synopsis</DescriptionTitle>
              <Description>{movieList.movies[params.id].overview}</Description>
              <ButtonsContainer>
                <WatchTrailerButton>WATCH TRAILER</WatchTrailerButton>
                <WatchLaterButton
                  onClick={() => {
                    if (alreadyWatchedState[params.id]) {
                      setIsSnackbarOpen(true);
                      setSnackbarMessage(
                        "Movie removed from Already Watched list successfully."
                      );
                      setAlreadyWatchedList((prevState) => {
                        let updatedState = prevState.filter(
                          (movie) =>
                            movie._id !== movieList.movies[params.id]._id
                        );
                        return updatedState;
                      });
                    } else {
                      setIsSnackbarOpen(true);
                      setSnackbarMessage(
                        "Movie added to Already Watched list successfully."
                      );
                      alreadyWatchedListHandler(params.id);
                    }
                    setAlreadyWatchedState((prevState) => {
                      let updatedState = { ...prevState };
                      updatedState[params.id] = !alreadyWatchedState[params.id];
                      return updatedState;
                    });
                  }}
                  style={{
                    backgroundColor: `${
                      alreadyWatchedState[params.id] ? "#fff" : "#000"
                    }`,
                    color: `${
                      !alreadyWatchedState[params.id] ? "#fff" : "#000"
                    }`,
                  }}
                  onMouseOver={(event) => {
                    event.target.style.backgroundColor = `${
                      !alreadyWatchedState[params.id]
                        ? "rgba(255, 255, 255, 1)"
                        : "#000"
                    }`;
                    event.target.style.color = `${
                      !alreadyWatchedState[params.id]
                        ? "#000"
                        : "rgba(255, 255, 255, 1)"
                    }`;
                  }}
                  onMouseOut={(event) => {
                    event.target.style.backgroundColor = `${
                      !alreadyWatchedState[params.id]
                        ? "rgba(0, 0, 0, 1)"
                        : "#fff"
                    }`;
                    event.target.style.color = `${
                      !alreadyWatchedState[params.id]
                        ? "#fff"
                        : "rgba(0, 0, 0, 1)"
                    }`;
                  }}
                >
                  MARK AS{" "}
                  {alreadyWatchedState[params.id] ? "UNWATCHED" : "WATCHED"}
                </WatchLaterButton>
              </ButtonsContainer>
            </Texts>
          </DetailsCard>
        </div>
      </PageContainer>
      <MoreLikeThisContainer>
        <SectionHeading title={"MORE LIKE THIS"} />
        <ListWrapper>
          {moreLikeThisList.map((movie, idx) => (
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
              idx={movie.idx}
              seeDetailsHandler={seeDetailsHandler}
            />
          ))}
        </ListWrapper>
      </MoreLikeThisContainer>
    </div>
  );
};

export default MovieDetails;
