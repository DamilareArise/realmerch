// import React from 'react'
import Card from "../Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const Recommended = () => {
  return (
    <div>
        <div className='py-[33px] bg-[#FFFFFF] pl-[24px] md:px-[24px] lg:px-[50px] font-[500] text-[24px]'>
            <a href="/category2">Recommended for you</a>
        </div>


        <div className="pl-[24px] md:px-[24px] lg:px-[50px]">
        <Splide
      aria-label="Most Viewed"
      className="py-[16px] /bg-[#0000001A] bg-gradient-to-b to-[#0000001A] from-[#fbf0f0]"
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
        </div>
    </div>
  )
}

export default Recommended