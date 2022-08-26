import React from "react";
import Typical from "react-typical";
//css
import "./Intro.css";
//images
import GithubImg from "../../assets/img/github.png";
import LinkedInImg from "../../assets/img/linkedin.png";
import InstagramImg from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Boy from "../../assets/img/boy.png";
import Thumbup from "../../assets/img/thumbup.png";
import Crown from "../../assets/img/crown.png";
import glassesImoji from "../../assets/img/glassesimoji.png";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am </span>
          <Typical
            steps={[
              "MHD Firass Barakat",
              2000,
              "<ReactDev/>",
              3000,
              "AI Engineer",
              3000,
            ]}
            loop={Infinity}
            wrapper="div"
          />
          <span>
            Frontend Web Developer With Hight Level Of Experience In Web Design
            And Development, Producting The Quality Work
          </span>
        </div>
        <button className="button i-button ">Hire Me</button>
        <div className="i-icons">
          <a
            href="https://gitlab.com/mhdfirassbarakat"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubImg} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mhd-firass-barakat-51788b197/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInImg} alt="linkedIn" />
          </a>
          <a
            href="https://www.instagram.com/mhdfirassbarakat/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstagramImg} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector" />
        <img src={Vector2} alt="vector" />
        <img src={Boy} alt="mhdfirassbarakat" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesImoji}
          alt="emojy"
        />
        <motion.img
          initial={{ right: "-20%" }}
          whileInView={{ right: "5%" }}
          transition={transition}
          src={Crown}
          alt="emojy"
        />
        <motion.img
          id="thumbup"
          initial={{ left: "-20%" }}
          whileInView={{ left: "-12%" }}
          transition={transition}
          src={Thumbup}
          alt="emojy"
        />
        {/* blur div */}
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Intro;
