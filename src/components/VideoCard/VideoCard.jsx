import React from "react";
import {
  Wrapper,
  Video,
  Footer,
  WatchTrailerIcon,
  InfoIcon,
  Row,
  WatchLaterIcon,
  GenreContainer,
  GenreRow,
  SeasonContainer,
  DurationContainer,
} from "./styles/videoCard";
import "remixicon/fonts/remixicon.css";

import movieList from "../../data/movies.json";

import GhostedTrailer from "../../assets/videos/Ghosted.mp4";
import AKATrailer from "../../assets/videos/AKA.mp4";
import ScreamVI from "../../assets/videos/Scream_VI.mp4";
import SevenKingdomTrailer from "../../assets/videos/Seven Kings Must Die.mp4";
import PeterPan from "../../assets/videos/Peter_Pan_and_Wendy.mp4";
import DungeonsTrailer from "../../assets/videos/Dungeons & Dragons_ Honor Among Thieves .mp4";
import PussTrailer from "../../assets/videos/Puss In Boots.mp4";
import MurderTrailer from "../../assets/videos/Murder Mystery 2.mp4";
import BreathlessTrailer from "../../assets/videos/Breathless.mp4";
import CocaineBearTrailer from "../../assets/videos/Cocaine_Bear.mp4";
import TripTrailer from "../../assets/videos/The_Trip_6.mp4";
import BlackPantherTrailer from "../../assets/videos/Black_Panther.mp4";
import GurdiansTrailer from "../../assets/videos/Guardians of the Galaxy Vol. 2 - Trailer 3 (Official).mp4";
import ThorTrailer from "../../assets/videos/Thor_ Love and Thunder .mp4";
import SonicTrailer from "../../assets/videos/Sonic the Hedgehog 2 .mp4";

const TRAILERS = [
  GhostedTrailer,
  AKATrailer,
  ScreamVI,
  SevenKingdomTrailer,
  PeterPan,
  DungeonsTrailer,
  PussTrailer,
  MurderTrailer,
  BreathlessTrailer,
  CocaineBearTrailer,
  TripTrailer,
  BlackPantherTrailer,
  GurdiansTrailer,
  ThorTrailer,
  SonicTrailer,
  GhostedTrailer,
  AKATrailer,
  ScreamVI,
  SevenKingdomTrailer,
  PeterPan,
  DungeonsTrailer,
  PussTrailer,
  MurderTrailer,
  BreathlessTrailer,
  CocaineBearTrailer,
  TripTrailer,
  BlackPantherTrailer,
  GurdiansTrailer,
  ThorTrailer,
  SonicTrailer,
  GhostedTrailer,
  AKATrailer,
  ScreamVI,
  SevenKingdomTrailer,
  PeterPan,
  DungeonsTrailer,
  PussTrailer,
  MurderTrailer,
  BreathlessTrailer,
  CocaineBearTrailer,
  TripTrailer,
  BlackPantherTrailer,
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const VideoCard = ({ id, genres, duration, seeDetailsHandler }) => {
  const curMovieIndex = movieList.movies.findIndex((movie) => movie._id === id);
  return (
    <Wrapper>
      <Video height="240" autoPlay muted>
        <source src={TRAILERS[curMovieIndex]} type="video/mp4" />
      </Video>

      <Footer>
        <Row>
          <WatchTrailerIcon title="Watch Trailer">
            <i className="ri-play-fill ri-1x" style={{ color: "#000" }}></i>
          </WatchTrailerIcon>
          <InfoIcon
            title="See Details"
            onClick={() => seeDetailsHandler(curMovieIndex)}
          >
            <i className="ri-info-i ri-1x"></i>
          </InfoIcon>
          <WatchLaterIcon title="Watch Later">
            <i className="ri-time-line ri-1x"></i>
          </WatchLaterIcon>
        </Row>
        <SeasonContainer>
          <h3 style={{ width: "fit-content" }}>
            {getRandomInt(2, 11)} Seasons
          </h3>
          <GenreContainer style={{ width: "fit-content" }}>HD</GenreContainer>
        </SeasonContainer>

        <DurationContainer>
          {parseInt(duration / 60)}h {duration % 60}m
        </DurationContainer>

        <GenreRow>
          {genres.map((genre, idx) => (
            <GenreContainer key={id + idx}>{genre}</GenreContainer>
          ))}
        </GenreRow>
      </Footer>
    </Wrapper>
  );
};

export default VideoCard;
