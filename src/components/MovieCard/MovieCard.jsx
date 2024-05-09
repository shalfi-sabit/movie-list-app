import React from "react";

import { CardWrapper, CardImage } from "./styles/movieCard";

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
      {/* <Title>
        {title} ({releaseDate})
      </Title> */}
    </CardWrapper>
  );
};

export default MovieCard;
