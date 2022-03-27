import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-nav">
      <Link to="/">
        <div>E-Shop</div>
      </Link>
    </div>
  );
}

export default Header;
