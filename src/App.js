import Form from "./components/Form/Form";
import Cards from "./components/Cards/Cards";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [cvc, setCvc] = useState("");

  const [formSubmit, setFormSubmit] = useState(false);
  return (
    <>
      <main className="mainFlex">
        <Cards
          name={name}
          cardNumber={cardNumber}
          year={year}
          month={month}
          cvc={cvc}
          formSubmit={formSubmit}
        />
        <Form
          name={name}
          setName={setName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          cvc={cvc}
          setCvc={setCvc}
          setFormSubmit={setFormSubmit}
          formSubmit={formSubmit}
        />
      </main>
    </>
  );
}

export default App;
