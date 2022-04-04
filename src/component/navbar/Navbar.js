import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <Link to='/'>Quit</Link>
    </NavContainer>
  );
};

export default Navbar;
