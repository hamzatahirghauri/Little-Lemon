import React from "react";
import dateFormatter from "../../constants/dateFormatter";
import "./Review.css";
import Stars from "../Stars/Stars";

const Review = ({ data }) => {
  const { id, image, name, date, rating, comment } = data;
  const datedFrom = dateFormatter(date);
  return (
    <article className="review">
      <section className="review__head">
        <div className="review__image-container">
          <img src={image} alt={name} className="review__image" />
        </div>
        <div className="review__head-background"></div>
        <div className="review__head-text">
          <h2 className="review__name font-card-title">{name}</h2>
          <span className="review__date font-highlight-text">{datedFrom}</span>
        </div>
      </section>
      <section className="review__body">
        <Stars className="review__rating" rating={rating} id={id} />
        <blockquote className="review__comment">
          <p>"{comment}"</p>
        </blockquote>
      </section>
    </article>
  );
};

export default Review;
