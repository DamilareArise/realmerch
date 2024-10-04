// import React from 'react'
import mock from "./../assets/mock.svg";

const Card = ({ image, productName, productPrice }) => {
  return (
    <div className="flex flex-col  w-[340px] shadow-2xl shadow-[#0000001A]">
      <div className="py-[15px] px-[30px] bg-[#FFFFFF] rounded-t-[12px] flex justify-center">
        <img src={mock} alt="" width={200}/>
      </div>

      <div className="p-[14px] flex flex-col gap-[8px] rounded-b-[12px] bg-[#E3E3E3]">
        <p>Men T-shirt</p>

        <p>$ 6,500</p>
        

      </div>
    </div>
  );
};

export default Card;
