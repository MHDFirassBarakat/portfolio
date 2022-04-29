import React from "react";

import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsStackOverflow,
} from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/mhd-firass-barakat-51788b197/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/MHDFirassBarakat"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/firass.barakat.16/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://stackoverflow.com/users/12690004/mhd-firass-barakat"
          target="_blank"
          rel="noreferrer"
        >
          <BsStackOverflow />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
