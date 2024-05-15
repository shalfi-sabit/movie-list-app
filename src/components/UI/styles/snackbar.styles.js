import styled from "styled-components";

export const SnackbarContainer = styled.div`
  background-color: red;
  padding: 0.5em 2em;
  color: #fff;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  font-size: min(1rem, 2vw);
  z-index: 7;
  top: -60px;
  transition: top 0.5s ease-in-out;
`;
