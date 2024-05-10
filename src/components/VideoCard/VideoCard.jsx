import React from "react";
import CurVideo from "../../assets/videos/Guardians of the Galaxy Vol. 2 - Trailer 3 (Official).mp4";
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
} from "./styles/videoCard";
import "remixicon/fonts/remixicon.css";

const VideoCard = ({ id, genres }) => {
  return (
    <Wrapper>
      <Video height="240" autoPlay muted>
        <source src={CurVideo} type="video/mp4" />
      </Video>
      <Footer>
        <Row>
          <WatchTrailerIcon title="Watch Trailer">
            <i className="ri-play-fill ri-1x" style={{ color: "#000" }}></i>
          </WatchTrailerIcon>
          <InfoIcon title="See Details">
            <i className="ri-info-i ri-1x"></i>
          </InfoIcon>
          <WatchLaterIcon title="Watch Later">
            <i className="ri-time-line ri-1x"></i>
          </WatchLaterIcon>
        </Row>
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
