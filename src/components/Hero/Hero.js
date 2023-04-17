import React from "react";
import { restaurantFood } from "../../constants/images";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__info">
        <h2 className="hero__info-title font-display-title">Little Lemon</h2>
        <h3 className="hero__info-subtitle font-subtitle">Chicago</h3>
        <p className="hero__info-description font-lead-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="hero__info-cta font-card-title">
          <Link to="/reservations">Reserve a Table</Link>
        </button>
      </article>
      <div className="hero__image-container">
        <img
          className="hero__image"
          src={restaurantFood}
          alt="Waiter showing restaurant food"
        />
      </div>
      <div className="hero__background"></div>
    </section>
  );
};

export default Hero;
