import React from "react";
import Container from "../../Container";
import FooterNav from "../FooterNav/FooterNav";
import { footerData } from "../../constants/data";
import "./Footer.css";
import Logo from "../../images/Logo_Framed_Monochromatic.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container--footer">
        <div className="footer__logo-container">
          <img src={Logo} alt="Little Lemon's logo" className="footer__logo" />
        </div>
        <ul className="footer__navs">
          {footerData.map((data) => (
            <FooterNav
              key={data.id}
              data={data}
              className="footer__nav"
            ></FooterNav>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
