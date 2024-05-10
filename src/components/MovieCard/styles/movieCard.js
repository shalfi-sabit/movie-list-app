import styled from "styled-components";

export const CardWrapper = styled.div`
  flex-grow: 1;
  align-self: stretch;
  width: 100%;
  margin-bottom: 2em;
  text-align: center;
  padding-bottom: 1.3em;
  background-color: rgba(255, 255, 255, 0.09);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 0 50px 8px rgba(0, 0, 0, 0.5);

    background-color: rgba(255, 255, 255, 0.25);
  }

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

  padding-left: 1em;
  padding-right: 1em;
`;

export const Description = styled.h5`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);

  padding-left: 0.5em;
  padding-right: 0.5em;
`;
