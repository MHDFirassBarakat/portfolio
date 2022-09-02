import React from "react";
//css
import "./Works.css";
//images
import Upwork from "../../assets/img/Upwork.png";
import Fiverr from "../../assets/img/fiverr.png";
import Amazon from "../../assets/img/amazon.png";
import Shopify from "../../assets/img/Shopify.png";
import Facebook from "../../assets/img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      {/* Left Side */}
      <div className="awesome">
        <span>Special Places & Great People</span>
        <span>To Work With</span>
        <span>
          Mollit ipsum commodo cillum qui ut.Reprehenderit officia in nulla
          <br />
          occaecat tempor officia tempor officia.
          <br />
          occaecat tempor officia tempor officiatempor officia.
          <br />
          tempor officiatempor officia
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="UpworkLogo" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="FiverrLogo" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="AmzaonLogo" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="ShopifyLogo" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="FacebookLogo" />
          </div>
        </div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
