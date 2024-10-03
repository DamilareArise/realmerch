// import React from 'react'
import mock from "./../assets/mock.svg";

const Card = ({ image, productName, productPrice }) => {
  return (
    <div className="flex flex-col  ">
      <div className="py-[12px] px-[40px] bg-[#FFFFFF] rounded-t-[12px]">
        <img src={mock} alt=""/>
      </div>

      <div className="p-[16px] flex flex-col gap-[8px] rounded-b-[12px] bg-[#E3E3E3]">
        <p>Men T-shirt</p>

        <p>$ 6,500</p>
      </div>
    </div>
  );
};

export default Card;
