import React, { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { CardWrapper, CardImage, Title, Description } from "./styles/movieCard";

const MovieCard = ({
  id,
  backdrop,
  genres,
  overview,
  poster,
  releaseDate,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardWrapper
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <CardImage src={poster} alt="Movie poster" />
      <Title>{title}</Title>
      <Description>
        {releaseDate.substring(0, 4)} &middot; {genres[0]}
      </Description>
      {isHovered && (
        <VideoCard id={id} className="video-card" genres={genres} />
      )}
    </CardWrapper>
  );
};

export default MovieCard;
