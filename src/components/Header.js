import React from "react";

function Header() {
  return (
    <header className="flex">
      <img src="/icons_assets/Logo.svg" alt="logo" />
      <nav>
        <ul className="flex justify-around items-center">
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
      </nav>
    </header>
  );
}

export default Header;
