import React, { useState } from "react";
import "../../index.css";

function Form({
  name,
  cardNumber,
  year,
  month,
  cvc,
  setName,
  setCardNumber,
  setYear,
  setCvc,
  setMonth,
  setFormSubmit,
  formSubmit,
}) {
  const [cardError, setCardError] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16) {
      setCardError("*wrong card number, must have 16 numbers");
    } else {
      setCardError("");
      setFormSubmit(!formSubmit);
    }
  };

  return (
    <>
      <form action="submit" onSubmit={submitFormHandler}>
        <label htmlFor="textIn">CARDHOLDER NAME</label>
        <input
          className=" formStyles"
          id="textIn"
          type="text"
          value={name}
          title="Please enter only Alphabetica letters"
          pattern="^[A-Za-z][A-Za-z ]*$"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder=" e.g. Hennry Jones"
          required
        />
        <label htmlFor="numberIn">CARD NUMBER</label>
        <input
          className="formStyles"
          id="numberIn"
          type="text"
          inputMode="numeric"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
          placeholder="e.g. 1234 4567 7899 1234"
          required
        />
        <p className="cardError">{cardError}</p>
        <div className="dates">
          <label htmlFor="monthIn">Exp.Date MM/YY</label>
          <label htmlFor="cvcIn">CVC</label>
        </div>
        <div className="subForm">
          <input
            className="formStyles"
            id="monthIn"
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="MM"
            min="1"
            max="12"
            required
          />

          <input
            className="formStyles"
            id="yearIn"
            type="number"
            placeholder="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="2023"
            max="2026"
            title="Year my be between 2023 - 2026"
            required
          />
          <input
            className="formStyles"
            id="cvcIn"
            type="number"
            placeholder="e.g . 01231"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
          />
        </div>
        <button className="submitForm">CONFIRM</button>
      </form>
    </>
  );
}

export default Form;
