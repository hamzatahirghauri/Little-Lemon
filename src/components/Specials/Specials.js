import React from "react";
import Container from "../../Container";
import Card from "../Card/Card";
import { specialsData } from "../../constants/data";
import "./Specials.css";

const Specials = () => {
  return (
    <section className="specials">
      <Container className="container--specials">
        <div className="specials__heading">
          <h2 className="specials__title font-display-title">
            This week's specials!
          </h2>
          <button className="specials__cta font-card-title">Online Menu</button>
        </div>
        <section className="specials__cards">
          {specialsData.map((special) => {
            return <Card key={special.id} special={special}></Card>;
          })}
        </section>
      </Container>
    </section>
  );
};

export default Specials;
