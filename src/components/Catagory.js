import React from "react";
import { Link } from "react-router-dom";

function Catagory() {
  return (
    <div className="catagory">
      <Link to="/">
        <div>
          <div>All Categories</div>
        </div>
      </Link>
    </div>
  );
}

export default Catagory;
