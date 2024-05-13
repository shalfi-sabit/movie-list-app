import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #000;

  @media only screen and (min-width: 1500px) {
    height: 100vh;
  }
`;

export const BackdropImage = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 60%),
    linear-gradient(to top right, rgba(0, 0, 0, 0.8), transparent 50%);

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
  gap: min(2vw, 30px);
  margin-bottom: min(5vw, 5em);
`;

export const WatchNow = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 100px;
  border: none;
  background-color: red;
  color: #fff;
  min-width: fit-content;
  font-size: min(20px, 2.5vw);
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #cc1400;
  }
`;

export const Details = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 100px;
  border: none;
  background-color: rgba(255, 255, 255, 1);
  min-width: fit-content;
  font-size: min(20px, 2.5vw);
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }
`;

export const MovieDescription = styled.p`
  font-size: min(20px, 2.5vw);
  max-width: 70%;
  margin: 0;
  margin-top: 0.5em;
  margin-bottom: 2.5em;

  @media only screen and (min-width: 1000px) {
    max-width: 50%;
  }
`;

export const ShortDetails = styled.p`
  display: flex;
  font-size: min(20px, 3vw);
  & > span {
    color: rgba(180, 180, 180, 1);
    font-size: min(20px, 3vw);
    padding: 0.1em 0.5em;
  }

  & > span:first-child {
    padding-left: 0;
  }
`;

export const AgeLimit = styled.span`
  border: 2px solid rgba(180, 180, 180, 1);
  color: rgba(180, 180, 180, 1);
  font-size: min(20px, 3vw);
  padding: 0.1em 0.5em;
`;

export const VerticalDivider = styled.div`
  background-color: rgba(180, 180, 180, 1);
  height: min(20px, 3vw);
  width: min(2px, 0.5vw);
  display: inline-block;
  align-self: center;
`;
