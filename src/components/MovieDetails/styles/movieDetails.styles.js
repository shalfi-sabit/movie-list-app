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

  @media only screen and (max-width: 525px) {
    width: 50%;
  }
`;

export const DetailsCard = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: min(2.2em, 3vw) min(3em, 3vw);
  display: flex;
  align-items: center;
  gap: min(3em, 4vw);
  font-size: min(20px, 3vw);
  width: 80%;
  max-width: 1200px;
  margin-top: 0;
  z-index: 4;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 22vw;
  }

  @media only screen and (max-width: 525px) {
    flex-direction: column;
    margin-top: 42vw;
    padding-top: 6vw;
    padding-bottom: 6vw;
  }

  @media only screen and (min-width: 1400px) {
    top: 80%;
  }
`;

export const Texts = styled.div`
  color: #fff;
  width: 60%;
  font-size: min(18px, 3.5vw);

  @media only screen and (max-width: 525px) {
    width: 90%;
  }
`;

export const SecondaryTitle = styled.h4`
  font-size: min(14px, 2vw);
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 800px) {
    font-size: 1.8vw;
  }
`;

export const PrimaryTitle = styled.h1`
  font-size: min(26px, 4vw);
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 800px) {
    font-size: 3.2vw;
  }
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 0.5em;
  font-size: min(16px, 3vw);

  @media only screen and (max-width: 800px) {
    font-size: 2.3vw;
  }
`;

export const DescriptionTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: min(16px, 3vw);

  @media only screen and (max-width: 800px) {
    font-size: 2.3vw;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: min(3.5em, 4vw);
  display: flex;
  gap: 1em;
`;

export const WatchTrailerButton = styled.button`
  border: none;
  padding: 0.8em 2em;
  font-size: min(12px, 2.5vw);
  background-color: red;
  color: #fff;
  transition: 0.4s;

  &:hover {
    background-color: #b31200;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }

  @media only screen and (min-width: 525px) and (max-width: 799px) {
    font-size: 1.5vw;
  }
`;

export const WatchLaterButton = styled.button`
  border: none;
  padding: 0.5em 2em;
  font-size: min(12px, 2.5vw);
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.4s;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }

  @media only screen and (min-width: 525px) and (max-width: 799px) {
    font-size: 1.5vw;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: min(16px, 3vw);
`;

export const Rating = styled.h2`
  margin-top: min(3.5em, 4vw);
  font-size: min(18px, 3.5vw);

  @media only screen and (max-width: 800px) {
    font-size: 2.6vw;
  }
`;

export const TitleTextContainer = styled.div`
  width: 85%;
`;

export const CastsName = styled.p`
  font-size: min(16px, 3vw);
  @media only screen and (max-width: 800px) {
    font-size: 2.3vw;
  }
`;

export const DirectorName = styled.p`
  font-size: min(16px, 3vw);
  @media only screen and (max-width: 800px) {
    font-size: 2.3vw;
  }
`;
