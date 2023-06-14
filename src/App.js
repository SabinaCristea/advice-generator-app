import React, { useState, useEffect } from "react";
import { Fragment } from "react";

import "./App.css";

import Title from "./components/Title";
import Advice from "./components/Advice";
import Button from "./components/Button";

function App() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetchAdvice();
  }, []);

  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const advice = {
          id: data.slip.id,
          advice_text: data.slip.advice,
        };
        console.log(advice);
        setAdvice(advice);
      })
      .catch((error) => {
        console.log("Error fetching advice:", error);
      });
  }

  return (
    <Fragment>
      <Title id={advice.id} />
      <Advice advice={advice.advice_text} />
      <Button onClick={fetchAdvice} />
    </Fragment>
  );
}

export default App;
