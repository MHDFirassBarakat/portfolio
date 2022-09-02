import React from "react";
//css
import "./Services.css";
//images
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Hummble from "../../assets/img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import Resume from "../../assets/resume.pdf";
const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>What We Can Achive</span>
        <span>Togather</span>
        <span>
          Mollit ipsum commodo cillum qui ut.Reprehenderit officia in nulla
          <br />
          occaecat tempor officia.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* Second Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={
              "React Js, Redux, WordPress, Django,Machine Learning,Deep Learning"
            }
          />
        </motion.div>
        {/* Third Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Hummble}
            heading={"Leadership"}
            detail={"Active listening, Empathy,Creativity, Flexibility"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
