import React from "react";
import Container from "../../Container";
import Review from "../Review/Review";
import { testimonialsData } from "../../constants/data";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testiominals">
      <Container className="container--testiominals">
        <h2 className="testiominals__title font-display-title">
          What our clients say
        </h2>
        <section className="testiominals__cards">
          {testimonialsData.map((testimonial) => {
            return <Review key={testimonial.id} data={testimonial} />;
          })}
        </section>
      </Container>
    </section>
  );
};

export default Testimonials;
