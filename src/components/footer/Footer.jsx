import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer__logo">
          MHD Firass Barakat
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.facebook.com/firass.barakat.16/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mhdfirassbarakat/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://twitter.com/FirassBarakat1"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; MHD Firass Barakat. All Rights Reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
