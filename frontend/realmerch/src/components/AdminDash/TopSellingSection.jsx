import React from "react";
import TopSellingCard from "./TopSellingCard";

const TopSellingSection = () => {
  return (
    <div>
      <p className="text-[20px] md:text-[34px] font-[500] mb-[16px] md:mb-[24px]">Top Selling Product</p>
      <div className="flex flex-wrap /justify-between gap-[18px] xl:gap-[30px]">
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
      </div>
    </div>
  );
};

export default TopSellingSection;
