// import React from 'react'
import adds from "./../../assets/adimg.svg";
import cart from "./../../assets/cartimg.png";
import logo from "./../../assets/logo.svg";
import spring from "./../../assets/spring.svg";

const Ads = () => {
  return (
    <div
      className="/bg-[#E3E3E3] md:h-[260px] lg:h-[350px] xl:h-[380px] bg-cover bg-center rounded-[16px] md:rounded-[40px] flex justify-between pl-[30px] lg:pl-[100px] pr-[20px] lg:pr-[100px]"
      style={{
        backgroundImage: `url(${adds})`,
      }}
    >
      <div className="flex flex-col relative">
        <img src={logo} alt=""  className="absolute -rotate-[8deg] md:-rotate-[10deg] md:h-[40px] lg:h-[60px] top-[6%] md:top-[10%] lg:top-[30%]"/>
        <img src={spring} alt=""   className="absolute -rotate-[15deg] top-[60%] left-[35%] md:top-[55%]  lg:top-[70%] md:left-[60%] /h-[25px]  /md:h-[30px]"/>
        <p className="text-[16px] md:text-[24px] lg:text-[32px] font-[600] leading-[20px] md:leading-[37.2px] text-[#FFFFFF] text-center relative /-rotate-[15deg] top-[30%] md:top-[30%] lg:top-[50%]">
          December Shopping <br />
          <span className="text-[24px] md:text-[48px] font-[800]">spree</span>
        </p>

        <p className="text-[10px] md:text-[16px] font-[400] leading-[16.2px] text-[#FFFFFF]  relative -rotate-[10deg] top-[15%] md:top-[21%] lg:top-[45%] left-[78%] md:left-[94%] lg:left-[85%]">Shop at <br />affordable prices  <br />from the comfort <br/>of your home</p>
      </div>
      <img
        src={cart}
        height={340}
        alt=""
        className="/self-end /-rotate-[180deg] h-[150px] md:h-[270px] lg:h-[340px]"
      />
    </div>
  );
};

export default Ads;
