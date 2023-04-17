import React, { useState } from "react";
import { initialState, formData } from "../../constants/data";
import { validateInputs } from "../../constants/dataValidator";
import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [userInputs, setUserInputs] = useState(initialState);
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "date") {
      updateTimes(e.target.value);
    }
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validInputs = validateInputs(userInputs);
    if (validInputs) {
      setUserInputs({ ...initialState });
      setTimeout(() => {
        setSubmit(false);
        navigate("/");
      }, 10000);
    }
    setSubmit(validInputs);
  };

  return (
    <>
      {submit && (
        <div className="form__confirmation">
          <h2 className="font-subtitle">Thank you for choosing us!</h2>
          <p className="font-lead-text">
            Your table has been booked. We're looking forward to your visit!
          </p>
        </div>
      )}
      {!submit && (
        <form onSubmit={handleSubmit} className="form">
          {formData.map((data) => {
            if (data.id === "time") {
              data.options = availableTimes;
            }
            return (
              <FormInput
                key={data.key}
                data={{ ...data, handleChange }}
                value={userInputs[data.id]}
              />
            );
          })}
          <input
            type="submit"
            value="Make Your Reservation"
            className="font-card-title form__button"
          ></input>
        </form>
      )}
    </>
  );
};

export default BookingForm;
