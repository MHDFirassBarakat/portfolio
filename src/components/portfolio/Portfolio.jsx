import React from "react";
import "./Protfolio.css";
import IMG1 from "../../assets/1.webp";
import IMG2 from "../../assets/3.png";
import IMG3 from "../../assets/4.webp";
import IMG4 from "../../assets/5.webp";
import IMG5 from "../../assets/6.webp";
import IMG6 from "../../assets/7.webp";
import IMG7 from "../../assets/8.webp";
import IMG8 from "../../assets/9.jpg";
// import IMG9 from "../../assets/10.png";
import IMG10 from "../../assets/11.jpg";
// import IMG11 from "../../assets/12.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Coffee Suppliers Website",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18117215-Coffetto-Coffee-Suppliers-website",
  },
  {
    id: 2,
    image: IMG2,
    title: "Grocery Shop Landing Page Design",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18115899-Grocery-Shop-Landing-Page-Design",
  },
  {
    id: 3,
    image: IMG3,
    title: "Childhood eduaction landing page",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18115980-Childhood-eduaction-landing-page",
  },
  {
    id: 4,
    image: IMG4,
    title: "Marketing Agency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18115431-NFTs-Landing-Page",
  },

  {
    id: 5,
    image: IMG7,
    title: "Finance Agency",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 6,
    image: IMG8,
    title: "Adoa Al-Hikma",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 7,
    image: IMG5,
    title: "Hospital Website",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 8,
    image: IMG10,
    title: "Al Hikma Bureau",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 9,
    image: IMG6,
    title: "Beyond Borders",
    github: "https://github.com",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
