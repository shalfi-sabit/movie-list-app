import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(30px);
  padding: 0 min(6vw, 6em);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;

  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: min(2em, 2vw);
    text-transform: uppercase;
    transition: 0.4s;
  }

  & ul:nth-child(2) {
    gap: 0.6em;
    color: #fff;
  }

  & ul:nth-chil(2) > li:first-child:hover {
    background-color: #b31200;
  }
`;

export const BrandName = styled.h1`
  font-family: var(--ff-logo);
  font-size: 2.4em;
  font-weight: 400;
  color: red;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
`;
