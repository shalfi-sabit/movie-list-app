import styled from "styled-components";

export const CardWrapper = styled.div`
  flex-grow: 1;
  align-self: stretch;
  width: 100%;
  text-align: center;
  padding-bottom: 1em;
  transition: 0.2s;
  cursor: pointer;
  width: 40%;

  &:hover {
    z-index: 4;
    transform: scale(1.09);
    box-shadow: 0 0 50px 8px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 350px) {
    width: 46%;
    margin-bottom: 0.3em;
  }

  @media only screen and (min-width: 500px) {
    width: 30%;
    margin-bottom: 0.5em;
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

  padding-left: 1em;
  padding-right: 1em;
`;

export const Description = styled.h5`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);

  padding-left: 0.5em;
  padding-right: 0.5em;
`;
