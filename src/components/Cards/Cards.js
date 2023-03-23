import React from "react";
import "../../index.css";
function Cards({ name, cardNumber, year, month, cvc, formSubmit }) {
  return (
    <div className="cards">
      <div className="backCard">
        {formSubmit ? <h3> {cardNumber} </h3> : ""}
        <div className="date">
          {formSubmit ? (
            <>
              {" "}
              <p>{name}</p>
              <p>
                {month} / {year}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="frontCard">{formSubmit ? <p>{cvc}</p> : ""}</div>
    </div>
  );
}

export default Cards;
