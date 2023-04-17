import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BookingPage from "../../pages/BookingPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </main>
  );
};

export default Main;
