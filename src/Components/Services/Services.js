import React from "react";
//css
import "./Services.css";
//images
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Mollit ipsum commodo cillum qui ut.Reprehenderit officia in nulla
          <br />
          occaecat tempor officia.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">Right Side</div>
    </div>
  );
};

export default Services;
