import React, { useState } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import Container from "../Container";
import { initialTimes } from "../constants/data";
import { fetchAPI } from "../api";
import "./BookingPage.css";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState(initialTimes);

  const updateTimes = (inputDate) => {
    const date = new Date(inputDate);
    const newTimes = fetchAPI(date);
    setAvailableTimes(newTimes);
  };
  return (
    <section className="reservations">
      <Container className="container--reservations">
        <h2 className="font-display-title">Reservations</h2>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        ></BookingForm>
      </Container>
    </section>
  );
};

export default BookingPage;
