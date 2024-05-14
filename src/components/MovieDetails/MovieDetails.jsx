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
  const { watchLaterListHandler, alreadyWatchedListHandler } =
    useContext(DataStorageContext);

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
                  onClick={() => watchLaterListHandler(params.id)}
                  title="Watch Later"
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
                  onClick={() => alreadyWatchedListHandler(params.id)}
                >
                  MARK AS WATCHED
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
