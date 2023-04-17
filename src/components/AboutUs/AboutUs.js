import React from "react";
import Container from "../../Container";
import { marioAdrian2, restaurant } from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <Container className="container--about-us">
        <h2 className="about-us__title font-display-title">About Us</h2>
        <section className="about-us__text font-paragraph-text">
          <p className="about-us__paragraph">
            <strong>Little Lemon</strong> is owned by two Italian brothers,{" "}
            <strong>Mario and Adrian</strong>, who moved to the United States to
            pursue their shared dream of owning a restaurant.
          </p>
          <p className="about-us__paragraph">
            To craft the menu, <strong>Mario</strong> relies on family recipes
            and his experience as a chef in Italy.
          </p>
          <p className="about-us__paragraph">
            <strong>Adrian</strong> does all the marketing for the restaurant
            and led the effort to expand the menu beyond classic Italian to
            incorporate additional cuisines from the Mediterranean region.
          </p>
        </section>
        <div className="about-us__images">
          <img
            src={restaurant}
            alt="Little Lemon restaurant's tables"
            className="about-us__image about-us__image--1"
          />
          <img
            src={marioAdrian2}
            alt="Mario and Adrian talking in the kitchen"
            className="about-us__image about-us__image--2"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
