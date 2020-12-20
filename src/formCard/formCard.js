import React, { useState } from "react";
import "./formCard.css";
import Card from "../card/card";

function FormCard() {
  const [name, setName] = useState("Artur");
  const [family, setFamily] = useState("Sarukhanyan");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("21");
  const [code, setCode] = useState("#### #### #### ####");

  return (
    <div className="credit">
      <Card name={name} family={family} month={month} year={year} code={code} />
      <form className="form-block">
        <div className="code-card">
          <input
            type="text"
            name="code"
            placeholder="code card"
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="data-card">
          <h3>Data</h3>
          <input
            type="number"
            name="month"
            placeholder=""
            onChange={(e) => setMonth(e.target.value)}
          />
          <span>/</span>
          <input
            type="number"
            name="year"
            placeholder=""
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="name">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="family"
            placeholder="Family"
            onChange={(e) => setFamily(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default FormCard;
