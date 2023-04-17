import React from "react";

function Footer() {
  return (
    <footer className="flex">
      <img src="/icons_assets/Logo.svg" alt="footer-logo" />
      <ul className="flex-col">
        <label>Doormat Navigation</label>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
      <ul className="flex-col">
        <label>Contact</label>
        <li>
          <a href="/">Adress</a>
        </li>
        <li>
          <a href="/">Phone Number</a>
        </li>
        <li>
          <a href="/">Email</a>
        </li>
      </ul>
      <ul className="flex-col">
        <label>Social Media Links</label>
        <li>
          <a href="/">Instagram</a>
        </li>
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
