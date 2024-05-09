import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: pink;
`;

export const BackdropImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const CallToAction = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  padding-left: min(5vw, 5em);
  z-index: 2;
`;

export const MovieTitle = styled.h1`
  font-family: var(--ff-cover-title);
  font-size: min(7vw, 84px);
  margin: 0;
  max-width: 70%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: max(0.5em, 30px);
  margin-bottom: min(5vw, 5em);
`;

export const WatchNow = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  border-radius: 100px;
  border: none;
  background-color: #fff;
  min-width: fit-content;
  font-weight: 600;
  font-size: min(24px, 3vw);
`;

export const Details = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 100px;
  border: none;
  background-color: #000;
  color: #fff;
  opacity: 0.8;
  min-width: fit-content;
  font-weight: 600;
  font-size: min(24px, 3vw);
`;

export const MovieDescription = styled.p`
  font-size: min(24px, 3vw);
  max-width: 70%;
`;

export const InnerContainer = styled.div`
  position: relative;
`;

export const CircleOverlay = styled.div`
  position: absolute;
  background-color: #050329;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 0 1500px 800px #050329;
  bottom: -1000px;
  left: -60px;
  opacity: 0.6;

  @media only screen and (min-width: 400px) {
    left: -500px;
    bottom: -900px;
    opacity: 0.6;
  }

  @media only screen and (min-width: 700px) {
    left: -400px;
    bottom: -700px;
    opacity: 0.6;
  }

  @media only screen and (min-width: 1000px) {
    left: -300px;
    bottom: -600px;
    opacity: 0.6;
  }

  @media only screen and (min-width: 1300px) {
    bottom: -450px;
    opacity: 0.6;
  }
`;
