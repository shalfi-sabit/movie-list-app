import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  background-color: #181818;
  font-size: min(16px, 3vw);
`;

export const BackdropContainer = styled.div`
  position: relative;
  background-color: #181818;
  margin: 0;
  padding: 0;
`;

export const BackdropImage = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

export const BackdropShadow = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 38%, transparent 90%);
`;

export const Poster = styled.img`
  width: 40%;
  object-fit: cover;
`;

export const DetailsCard = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: 2.2em 3em;
  display: flex;
  align-items: center;
  gap: min(4em, 8vw);
  font-size: min(20px, 3vw);
`;

export const Texts = styled.div`
  color: #fff;
  width: 60%;
  font-size: min(18px, 3.5vw);
`;

export const SecondaryTitle = styled.h4`
  font-size: min(14px, 3vw);
  margin: 0;
  padding: 0;
`;

export const PrimaryTitle = styled.h1`
  font-size: min(26px, 4vw);
  margin: 0;
  padding: 0;
  max-width: 85%;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 0.5em;
`;

export const DescriptionTitle = styled.p`
  padding: 0;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  margin-top: 4em;
  display: flex;
  gap: 1em;
`;

export const WatchTrailerButton = styled.button`
  border: none;
  padding: 0.8em 2em;
  font-size: min(12px, 3vw);
  background-color: red;
  color: #fff;
  transition: 0.4s;

  &:hover {
    background-color: #b31200;
  }
`;

export const WatchLaterButton = styled.button`
  border: none;
  padding: 0.5em 2em;
  font-size: min(12px, 3vw);
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.4s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: min(16px, 3vw);
`;

export const Rating = styled.h2`
  margin-top: 3.5em;
  font-size: min(18px, 3.5vw);
`;
