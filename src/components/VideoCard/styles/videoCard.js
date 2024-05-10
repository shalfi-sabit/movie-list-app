import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(23, 23, 23, 0.8);
  backdrop-filter: blur(18px);
  position: absolute;
  top: 5%;
  left: 0;
  padding-bottom: 1em;
  animation: scale-up 0.35s ease-out forwards;
  animation-delay: 0.3s;
  z-index: 5;
  box-shadow: 0 5px 80px 8px rgba(0, 0, 0, 0.8);
  transform: scale(0);

  @keyframes scale-up {
    0% {
    }
    25% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    85% {
      transform: scale(1.45);
    }
    100% {
      transform: scale(1.4);
    }
  }

  @keyframes scale-down {
    0% {
      transform: scale(1.4);
    }
    50% {
      transform: scale(1.2);
    }
    85% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 50%;
`;

export const Footer = styled.footer`
  font-size: min(20px, 3vw);
  padding: 1em 1em;
`;

export const WatchTrailerIcon = styled.div`
  font-size: min(20px, 3vw);
  background-color: #fff;
  width: fit-content;
  border-radius: 50%;
  height: min(25px, 4vw);
  width: min(25px, 4vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoIcon = styled.div`
  font-size: min(20px, 3vw);
  border: 1px solid #fff;
  width: fit-content;
  border-radius: 50%;
  height: min(25px, 4vw);
  width: min(25px, 4vw);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
`;

export const WatchLaterIcon = styled.div`
  font-size: min(30px, 5vw);
  font-weight: 0;
`;

export const GenreContainer = styled.h5`
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 0.2em 0.5em;
  font-size: min(10px, 2vw);
  height: fit-content;
  margin-bottom: 0;
`;

export const GenreRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
  margin-top: 0.5em;
`;

export const SeasonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  & > h3 {
    font-size: min(20px, 3vw);
    margin: 0;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
`;

export const DurationContainer = styled.div`
  color: #5cb671;
  font-weight: 600;
  text-align: left;
  font-size: min(20px, 3vw);
  margin-bottom: 1.2em;
`;
