import React from "react";
//css
import "./Footer.css";
//img
import wave from "../../assets/img/wave.png";
//icons
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitlab from "@iconscout/react-unicons/icons/uil-gitlab";
const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="wave" />
      <div className="f-content">
        <span>firass.barakat1998@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Gitlab color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
