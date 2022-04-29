import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avtr1.jpg";
import AVTR2 from "../../assets/avtr2.jpg";
import AVTR3 from "../../assets/avtr3.jpg";
import AVTR4 from "../../assets/avtr4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "Mr Bryan Kaufman",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita non quia dicta distinctio minus
        temporibus explicabo, fugiat soluta amet
        ea voluptate fugit recusandae error,
        rerum voluptas saepe nesciunt laudantium! Facere?`,
  },
  {
    avatar: AVTR2,
    name: "Mr Keith Sanchez",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita non quia dicta distinctio minus
        temporibus explicabo, fugiat soluta amet
        ea voluptate fugit recusandae error,
        rerum voluptas saepe nesciunt laudantium! Facere?`,
  },
  {
    avatar: AVTR3,
    name: "Mr Chad Levy",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita non quia dicta distinctio minus
        temporibus explicabo, fugiat soluta amet
        ea voluptate fugit recusandae error,
        rerum voluptas saepe nesciunt laudantium! Facere?`,
  },
  {
    avatar: AVTR4,
    name: "Mr George Wilson",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita non quia dicta distinctio minus
        temporibus explicabo, fugiat soluta amet
        ea voluptate fugit recusandae error,
        rerum voluptas saepe nesciunt laudantium! Facere?`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;