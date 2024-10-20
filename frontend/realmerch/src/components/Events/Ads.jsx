// import React from 'react'
import adds from "./../../assets/adimg.svg";
import cart from "./../../assets/cartimg.png";
import logo from "./../../assets/logo.svg";
import spring from "./../../assets/spring.svg";

const Ads = () => {
  return (
    <div
      className="/bg-[#E3E3E3] h-[380px] bg-cover bg-center rounded-[40px] flex justify-between pl-[100px] pr-[40px]"
      style={{
        backgroundImage: `url(${adds})`,
      }}
    >
      <div className="flex flex-col relative">
        <img src={logo} alt="" height={60} width={290}  className="absolute -rotate-[10deg] top-[30%]"/>
        <img src={spring} alt="" width={80} height={30} className="absolute -rotate-[15deg] top-[70%] left-[60%]"/>
        <p className="text-[32px] font-[600] leading-[37.2px] text-[#FFFFFF] text-center relative /-rotate-[15deg] top-[50%]">
          December Shopping <br />
          <span className="text-[48px] font-[800]">spree</span>
        </p>

        <p className="text-[16px] font-[400] leading-[16.2px] text-[#FFFFFF]  relative -rotate-[10deg] top-[45%] left-[85%]">Shop at <br />affordable prices  <br />from the comfort <br/>of your home</p>
      </div>
      <img
        src={cart}
        height={340}
        alt=""
        className="/self-end /-rotate-[180deg]"
      />
    </div>
  );
};

export default Ads;
