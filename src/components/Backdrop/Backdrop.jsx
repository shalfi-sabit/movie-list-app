import React, { useEffect, useState } from "react";
import movieList from "../../data/movies.json";

import PlayIcon from "../../assets/icons/play.svg";
import RightArrowIcon from "../../assets/icons/arrow-right.svg";
import "remixicon/fonts/remixicon.css";

import {
  Container,
  CallToAction,
  BackdropImage,
  MovieTitle,
  ButtonsContainer,
  WatchNow,
  Details,
  MovieDescription,
  PlayIconStyle,
  RightArrowIconStyle,
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
    if (curMovieDesc.length >= 200) {
      curMovieDesc = curMovieDesc.substring(0, 200) + "...";
    }
  }

  let curPlayIconWidth = "18";
  let curRightArrowIconWidth = "28";
  if (currentWidth < 450) {
    curPlayIconWidth = "9";
    curRightArrowIconWidth = "16";
  } else if (currentWidth <= 500) {
    curPlayIconWidth = "12";
    curRightArrowIconWidth = "18";
  } else if (currentWidth <= 600) {
    curPlayIconWidth = "12";
    curRightArrowIconWidth = "18";
  } else if (currentWidth <= 700) {
    curPlayIconWidth = "15";
  } else if (currentWidth <= 1000) {
    curPlayIconWidth = "15";
    curRightArrowIconWidth = "26";
  }

  return (
    <Container>
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
            <i class="ri-play-fill ri-lg" style={{ marginLeft: ".3em" }}></i>
          </WatchNow>
          <Details>
            Details{" "}
            <i
              class="ri-arrow-right-s-line ri-lg"
              style={{ marginLeft: ".3em" }}
            ></i>
          </Details>
        </ButtonsContainer>
      </CallToAction>
    </Container>
  );
};

export default Backdrop;
