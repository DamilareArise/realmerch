// import React from 'react'

import Card from "../Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import PromoBanner from "../PromoBanner";

const Category2 = () => {
  return (
    <div>
      <div className="py-[33px] bg-[#FFFFFF] px-[58px] text-[24px] font-[500]">
        <a href="/category2">Today’s Deal</a>
      </div>

      <div className="px-[50px]">
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
      </div>


      <PromoBanner/>
    </div>
  );
};

export default Category2;
