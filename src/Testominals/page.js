"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./stylesheet.css";

const page = () => {
  const testi = [
    {
      id: 1,
      name: "Harish",
      text: "Very good Products",
    },
    {
      id: 2,
      name: "Vamshi",
      text: "Reasonable pricing",
    },
    {
      id: 3,
      name: "Anil",
      text: "Amazing products",
    },
  ];
  return (
    <div className="tch">
      <div>
        <h1 className="Testimonial">Testimonial's</h1>
      </div>
      <div className="tes">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testi.map((testi) => (
            <SwiperSlide key={testi.id}>
              <p className="text">{testi.text}</p>
              <h3 className="name">{testi.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default page;
