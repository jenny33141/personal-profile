import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link id="jc" className="animate" to="/">
        JC
      </Link>
      <div className="navbar2">
        <Link className="navRight" to="/">
          Home
        </Link>
        <Link className="navRight" to="/about">
          About
        </Link>
        <Link className="navRight" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Nav;
