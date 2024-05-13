import React, { useEffect, useState } from "react";
import movieList from "../../data/movies.json";

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
  ShortDetails,
  AgeLimit,
  VerticalDivider,
} from "./styles/backdrop";

const Backdrop = ({ movieId, seeDetailsHandler }) => {
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

  return (
    <Container>
      <BackdropImage
        src={movieList.movies[curMovieIndex].backdrop_path}
        alt="Movie Backdrop"
      />
      <CallToAction>
        <MovieTitle>{movieList.movies[curMovieIndex].title}</MovieTitle>
        <ShortDetails>
          <span>
            {movieList.movies[curMovieIndex].release_date.substring(0, 4)}
          </span>{" "}
          <VerticalDivider></VerticalDivider>
          <span>
            <AgeLimit>{movieList.movies[curMovieIndex].ageLimit}+</AgeLimit>
          </span>
          <VerticalDivider></VerticalDivider>
          <span>
            {parseInt(movieList.movies[curMovieIndex].duration / 60)}h{" "}
            {movieList.movies[curMovieIndex].duration % 60}m
          </span>
          <VerticalDivider></VerticalDivider>
          <span>{movieList.movies[curMovieIndex].genres[0]}</span>
        </ShortDetails>
        <MovieDescription>{curMovieDesc}</MovieDescription>
        <ButtonsContainer>
          <WatchNow>
            Watch Now
            <i
              className="ri-play-fill ri-lg"
              style={{ marginLeft: ".3em" }}
            ></i>
          </WatchNow>
          <Details onClick={() => seeDetailsHandler(curMovieIndex)}>
            Details{" "}
            <i
              className="ri-arrow-right-s-line ri-lg"
              style={{ marginLeft: ".3em" }}
            ></i>
          </Details>
        </ButtonsContainer>
      </CallToAction>
    </Container>
  );
};

export default Backdrop;
