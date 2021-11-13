import React from "react";
import { Link } from "react-router-dom";
import successity from "../../logo.png";

const NavbarLogo = () => {
  return (
    <div className="logo-wrapper">&#160;
      <Link to="/">
        <img src={successity} alt="" width="60px" />
      </Link>&#160;<h1>Social Network</h1>
    </div>
  );
};

export default NavbarLogo;
