// import React from 'react'

import Card from "../Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import mock from "./../../assets/mock.svg";

import "@splidejs/react-splide/css";

const Category1 = () => {
  return (
    <Splide
      aria-label="Most Viewed"
      className="py-[16px] /bg-[#0000001A] bg-gradient-to-b to-[#0000001A] from-[#fbf0f0]"
      options={{
        type: "loop",
        autoplay: false,
        gap: "2rem",
        arrows: true,
        pagination: false,
        perPage: 6.5,
        perMove: 1,
      }}
    >
      <SplideSlide>
        <Card  img={mock}/>
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
