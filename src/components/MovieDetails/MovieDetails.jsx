import React from "react";
import movieList from "../../data/movies.json";
import { useParams } from "react-router-dom";
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
} from "./styles/movieDetails.styles";

const MovieDetails = () => {
  const params = useParams();
  return (
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
              <div>
                <SecondaryTitle>TITLE</SecondaryTitle>
                <PrimaryTitle>{movieList.movies[params.id].title}</PrimaryTitle>
              </div>
              <i
                class="ri-bookmark-fill"
                style={{
                  color: "red",
                  fontSize: "min(32px, 6.5vw)",
                  transition: ".4s",
                }}
                onMouseOver={(event) => {
                  event.target.style.color = "#b31200";
                }}
                onMouseOut={(event) => {
                  event.target.style.color = "red";
                }}
                title="Watch Later"
              ></i>
            </TitleContainer>

            <Rating>IMDb Rating: 8.8</Rating>

            <p>DIRECTOR | Jon Watts</p>
            <p>ACTOR | Tom Holland, Michael Keaton, Robert Downey Jr ...</p>

            <DescriptionTitle>Film synopsis</DescriptionTitle>
            <Description>{movieList.movies[params.id].overview}</Description>
            <ButtonsContainer>
              <WatchTrailerButton>WATCH TRAILER</WatchTrailerButton>
              <WatchLaterButton>MARK AS WATCHED</WatchLaterButton>
            </ButtonsContainer>
          </Texts>
        </DetailsCard>
      </div>
    </PageContainer>
  );
};

export default MovieDetails;
