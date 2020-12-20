import React from "react";
import "./card.css";
import chip from "../img/chip.png";
import wife from "../img/wife.png";
import masterclass from "../img/masterclass.png";

function Card(props) {
  return (
    <div className="block">
      <div className="card">
        <div className="title">Art Card</div>
        <div className="chip">
          <img src={chip} alt=""></img>
          <img src={wife} alt=""></img>
        </div>
        <div className="cod">
          <h2>{props.code}</h2>
        </div>
        <div className="data">
          Data: {props.month} <span>/ </span> {props.year}
        </div>
        <div className="info">
          <div className="name-family">
            <h3>{props.name}</h3>
            <h3>{props.family}</h3>
          </div>
          <div><img src={masterclass} alt=""></img></div>

          
        </div>
      </div>
    </div>
  );
}

export default Card;
