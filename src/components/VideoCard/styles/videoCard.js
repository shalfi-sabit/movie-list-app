import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #171717;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 0.7em;
`;

export const Video = styled.video`
  width: 100%;
  height: 50%;
`;

export const Footer = styled.footer`
  font-size: min(20px, 3vw);
  padding: 0.3em 0.8em;
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

export const GenreContainer = styled.div`
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 0.2em 0.5em;
  font-size: min(10px, 2vw);
  margin-bottom: 0;
`;

export const GenreRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
  margin-top: 0.5em;
`;
