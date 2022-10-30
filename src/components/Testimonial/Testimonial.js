import React from "react";
import "./Testimonial.css";
import AVATAR1 from "../../assets/me3.png";
import AVATAR2 from "../../assets/me1.png";
import AVATAR3 from "../../assets/me2.png";
import AVATAR4 from "../../assets/me3.png";
import AVATAR5 from "../../assets/me.png";
import { Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    avatar: AVATAR1,
    name: "Abdur Rahman",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit  Nam ",
  },
  {
    avatar: AVATAR2,
    name: "Abdullah",
    review: " Lorem ipsum dolor sit amet consectetur adip",
  },
  {
    avatar: AVATAR3,
    name: "Abdur Rahim",
    review: " Lorem ipsum dolor sit amet consectetur adip",
  },
  {
    avatar: AVATAR4,
    name: "Abdur Rajjak ",
    review: " Lorem ipsum dolor sit amet consectetur adip",
  },
  {
    avatar: AVATAR5,
    name: "Yousuf",
    review: " Lorem ipsum dolor sit amet consectetur adip",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review Form Clients</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonial_container"
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
