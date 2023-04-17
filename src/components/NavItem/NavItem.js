import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";

const NavItem = ({ link, content }) => {
  return (
    <li className="font-card-title">
      <Link to={link} className="header__navbar-link">
        {content}
      </Link>
    </li>
  );
};

export default NavItem;
