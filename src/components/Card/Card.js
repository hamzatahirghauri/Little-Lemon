import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "./Card.css";

const Card = ({ special }) => {
  const { image, title, price, description } = special;
  return (
    <article className="card">
      <div className="card__image-container">
        <img src={image} alt={title} className="card__image" />
      </div>
      <section className="card__information">
        <div className="card__info-heading">
          <h3 className="card__info-title font-card-title">{title}</h3>
          <span className="card__info-price font-highlight-text">${price}</span>
        </div>
        <p className="card__info-description font-paragraph-text">
          {description}
        </p>
        <a href="#" className="card__info-cta font-highlight-text">
          <span>Order a delivery</span>
          <MdDeliveryDining />
        </a>
      </section>
    </article>
  );
};

export default Card;
