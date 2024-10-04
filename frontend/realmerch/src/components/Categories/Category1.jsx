// import React from 'react'

import Card from "../Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const Category1 = () => {
  return (
    <Splide
      aria-label="Most Viewed"
      className="py-[16px]"
      options={{
        type: "loop",
        autoplay: false,
        gap: "1rem",
        arrows: true,
        pagination: false,
        perPage: 6.5,
        perMove: 1,
      }}
    >
      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>

      <SplideSlide>
        <Card />
      </SplideSlide>
    </Splide>
  );
};

export default Category1;
