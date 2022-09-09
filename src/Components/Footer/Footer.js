import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../MailchimpForm/MailchimpForm";
import Logo from "../../assets/img/2.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
//css
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={Logo} alt="Logo" id="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mhd-firass-barakat-51788b197/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/firass.barakat.16">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/mhdfirassbarakat/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved To TechCocktail</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
