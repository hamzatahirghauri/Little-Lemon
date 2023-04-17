import React from "react";
import "./Nav.css";
import NavItem from "../NavItem/NavItem";

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="header__navbar-links">
        <NavItem link="/" content="Home" />
        <NavItem link="#about-us" content="About" />
        <NavItem link="#menu" content="Menu" />
        <NavItem link="/reservations" content="Reservations" />
        <NavItem link="#order-online" content="Order Online" />
        <NavItem link="#" content="Login" />
      </ul>
    </nav>
  );
};

export default Nav;
