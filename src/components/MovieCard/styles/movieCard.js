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
