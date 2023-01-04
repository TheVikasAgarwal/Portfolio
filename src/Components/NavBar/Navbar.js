import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <ul className="ullist">
        <li>
          <NavLink exact={true} to="/" onClick={props.clicked}>
            Blogs
          </NavLink>{" "}
        </li>
        {/* <li>
          {" "}
          <NavLink to="/about-author" onClick={props.clicked}>
            About
          </NavLink>
        </li> */}
      </ul>
    </>
  );
}

export default Navbar;
