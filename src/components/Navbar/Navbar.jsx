import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Movies</NavLink>
        </li>
        <li>
          <NavLink>Watch Later</NavLink>
        </li>
        <li>
          <NavLink>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
