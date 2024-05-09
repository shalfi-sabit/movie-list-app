import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const BackdropImage = styled.img`
  width: 100%;
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
  justify-content: center;
  color: #fff;
  padding-left: min(6vw, 6em);
  z-index: 2;
  background: linear-gradient(to top right, rgba(0, 0, 0, 1), transparent 60%);

  @media only screen and (min-width: 1000px) {
    justfity-content: center;
  }
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
  margin: 0;
  margin-top: 0.5em;
  margin-bottom: 2.5em;

  @media only screen and (min-width: 1000px) {
    max-width: 50%;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
`;

export const CircleOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
