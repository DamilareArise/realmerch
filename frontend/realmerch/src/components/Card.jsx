// import React from 'react'
import mock from "./../assets/movk.png";

const Card = () => {
  return (
    <div className="flex flex-col  w-[340px] shadow-2xl shadow-[#0000001A]">
      <div className="py-[15px] px-[30px] bg-[#F2E3DD] rounded-t-[12px] flex justify-center">
        <img src={mock} alt="" width={200}/>
      </div>

      <div className="p-[14px] flex flex-col gap-[8px] rounded-b-[12px] bg-[#FFFFFF]">
        <p>Men T-shirt</p>

        <p>$ 6,500</p>
        

      </div>
    </div>
  );
};

export default Card;
