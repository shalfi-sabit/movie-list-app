import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer, BrandName } from "./styles/navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <BrandName>CINEMANIA</BrandName>
        </li>
        <li>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "rgba(255, 255, 255, 1)" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watch-later"
            style={{ textDecoration: "none", color: "rgba(255, 255, 255, 1)" }}
          >
            Watch Later
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/already-watched"
            style={{ textDecoration: "none", color: "rgba(255, 255, 255, 1)" }}
          >
            Already Watched
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink
            to="/register"
            style={{
              textDecoration: "none",
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "red",
              padding: ".5em 1.5em",
            }}
          >
            JOIN NOW
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            style={{
              textDecoration: "none",
              color: "rgba(255, 255, 255, 1)",
              padding: ".5em 1.5em",
              border: "1px solid #fff",
            }}
          >
            SIGN IN
          </NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
