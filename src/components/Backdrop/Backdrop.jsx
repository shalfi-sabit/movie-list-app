import React, { useEffect, useState } from "react";
import movieList from "../../data/movies.json";

import PlayIcon from "../../assets/icons/play-button.png";
import RightArrowIcon from "../../assets/icons/right.png";

import {
  Container,
  CallToAction,
  BackdropImage,
  MovieTitle,
  ButtonsContainer,
  WatchNow,
  Details,
  MovieDescription,
  InnerContainer,
  CircleOverlay,
} from "./styles/backdrop";

const Backdrop = ({ movieId }) => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setCurrentWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setCurrentWidth(window.innerWidth)
      );
  }, []);

  const curMovieIndex = movieList.movies.findIndex(
    (movie) => movie._id === movieId
  );

  let curMovieDesc = movieList.movies[curMovieIndex].overview;
  if (currentWidth < 430) {
    if (curMovieDesc.length >= 100) {
      curMovieDesc = curMovieDesc.substring(0, 100) + "...";
    }
  } else if (currentWidth < 600) {
    if (curMovieDesc.length >= 150) {
      curMovieDesc = curMovieDesc.substring(0, 150) + "...";
    }
  } else {
    if (curMovieDesc.length >= 180) {
      curMovieDesc = curMovieDesc.substring(0, 150) + "...";
    }
  }

  return (
    <Container>
      <InnerContainer>
        <BackdropImage
          src={movieList.movies[curMovieIndex].backdrop_path}
          alt="Movie Backdrop"
        />
        <CallToAction>
          <MovieTitle>{movieList.movies[curMovieIndex].title}</MovieTitle>
          <MovieDescription>{curMovieDesc}</MovieDescription>
          <ButtonsContainer>
            <WatchNow>
              Watch Now
              <img src={PlayIcon} alt="Play Icon" width="15px" />
            </WatchNow>
            <Details>
              Details
              <img src={RightArrowIcon} alt="Play Icon" width="20px" />
            </Details>
          </ButtonsContainer>
        </CallToAction>
      </InnerContainer>
      <CircleOverlay></CircleOverlay>
    </Container>
  );
};

export default Backdrop;
