import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 350px) {
    width: 46%;
  }

  @media only screen and (min-width: 500px) {
    width: 30%;
  }

  @media only screen and (min-width: 800px) {
    width: 18%;
  }

  @media only screen and (min-width: 1100px) {
    width: 15%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 0.5em;
`;

export const Description = styled.h5`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
`;
