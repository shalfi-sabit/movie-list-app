import styled from "styled-components";

export const MoreLikeThisContainer = styled.div`
  margin-top: 93vw;

  @media only screen and (min-width: 526px) {
    margin-top: 45vw;
  }

  @media only screen and (min-width: 801px) {
    margin-top: min(14vw, 10rem);
  }

  @media only screen and (min-width: 1400px) {
    margin-top: min(14vw, 15rem);
  }
`;
