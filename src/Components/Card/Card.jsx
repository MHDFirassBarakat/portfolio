import React from "react";
//css
import "./Card.css";
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Let's Talk About It</button>
    </div>
  );
};

export default Card;
