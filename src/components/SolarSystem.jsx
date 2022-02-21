import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Pagination, Navigation } from "swiper";

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <Swiper
      breakpoints={{
        900: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
        1800: {
          slidesPerView: 4,
        },
      }}
        // spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="planet-card-area">
          {
            planets.map(({ name, image, gif }) => (
              <SwiperSlide
                key={ name }
              >
                <PlanetCard                  
                  planetName={ name }
                  planetImage={ image }
                  planetGif={ gif }
                />
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  );
}
