import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Logo from "../../images/Logo.svg";
import Container from "../../Container";
import { CgMenu, CgClose } from "react-icons/cg";
import "./Header.css";

const Header = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand((prevState) => !prevState);
  };

  return (
    <header
      className={`header overlay-background-color ${expand ? "expand" : ""}`}
    >
      <Container className="container--header">
        <h1>
          <a href="/" className="header__logo-container">
            <img
              src={Logo}
              alt="Little Lemon's logo"
              className="header__logo"
            />
          </a>
        </h1>
        <button className="header__navbar-button" onClick={toggleExpand}>
          {expand ? <CgClose /> : <CgMenu />}
        </button>
        <Nav className="header__navbar overlay-background-color"></Nav>
      </Container>
    </header>
  );
};

export default Header;
