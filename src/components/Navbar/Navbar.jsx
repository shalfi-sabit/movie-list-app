import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer, BrandName } from "./styles/navbar.styles";
import Snackbar from "../UI/Snackbar";

const Navbar = () => {
  return (
    <div>
      <Snackbar />
      <NavContainer>
        <ul>
          <li>
            <BrandName>CINEMANIA</BrandName>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/watch-later"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Watch Later
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/already-watched"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Already Watched
            </NavLink>
          </li>
        </ul>

        <ul>
          <li className="login-items">
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 1)",
                backgroundColor: "red",
                padding: ".5em 1.5em",
                fontSize: "min(14px, 4vw)",
              }}
            >
              JOIN NOW
            </NavLink>
          </li>
          <li className="login-items">
            <NavLink
              to="/sign-in"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 1)",
                padding: ".5em 1.5em",
                border: "1px solid #fff",
                fontSize: "min(14px, 4vw)",
              }}
            >
              SIGN IN
            </NavLink>
          </li>
        </ul>
      </NavContainer>
    </div>
  );
};

export default Navbar;
