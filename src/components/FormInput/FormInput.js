import React, { useState } from "react";
import "./FormInput.css";

const FormInput = ({ data, value }) => {
  const {
    label,
    type,
    id,
    errorMessage,
    handleChange,
    options,
    ...inputProps
  } = data;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form__section">
      <label htmlFor={id} className="form__label font-lead-text">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          {...inputProps}
          className="form__select font-paragraph-text"
          onChange={handleChange}
          value={value}
        >
          {options.map(({ text, optionValue }, index) => {
            return (
              <option
                key={data.key + index}
                className="form__option font-paragraph-text"
                value={optionValue}
              >
                {text}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          {...inputProps}
          className="form__input font-lead-text"
          onChange={handleChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          value={value}
        />
      )}
      <p className="form__error-message font-paragraph-text">{errorMessage}</p>
    </div>
  );
};

export default FormInput;
