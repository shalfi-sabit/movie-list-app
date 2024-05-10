import React from "react";

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
  return (
    <CardWrapper>
      <CardImage src={poster} alt="Movie poster" />
      <Title>{title}</Title>
      <Description>
        {releaseDate.substring(0, 4)} &middot; {genres[0]}
      </Description>
    </CardWrapper>
  );
};

export default MovieCard;
