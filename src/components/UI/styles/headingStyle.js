import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 1em;
  color: #fff;
  margin: 0;
`;

export const Title = styled.h3`
  margin: 0;
  padding-top: 1em;
  font-size: min(22px, 4vw);
`;

export const RedBorder = styled.div`
  margin-top: 0.5em;
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, red, transparent 70%);

  @media only screen and (min-width: 600px) {
    height: 4px;
  }
`;
