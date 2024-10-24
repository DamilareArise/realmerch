import React, { useState, useContext } from "react";
import mock from "./../assets/movk.png";
import plus from './../assets/plus.svg';
import minus from './../assets/minus.svg';
import { CartContext } from './context/CartContext'; // Import the CartContext

const Card = () => {
  const [num, setNum] = useState(1);
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  // Define item details
  const item = {
    id: 1, // You may want to use a unique ID for each product
    name: "Men T-shirt",
    price: 6500,
    quantity: num
  };

  return (
    <div className="flex flex-col  w-[340px] shadow-2xl shadow-[#0000001A]">
      <div className="py-[15px] px-[30px] bg-[#F2E3DD] rounded-t-[12px] flex justify-center">
        <img src={mock} alt="" width={200} />
      </div>

      <div className="p-[14px] flex flex-col gap-[10px] rounded-b-[12px] bg-[#FFFFFF]">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-[400] leading-[16px]">Men T-shirt</p>

          <span className="flex items-center gap-[8px]">
            <button className="hover:opacity-[70%] hover:shadow-lg" onClick={decrease}>
              <img src={minus} alt="Decrease" />
            </button>
            <code>{num}</code>
            <button className="hover:opacity-[70%] hover:shadow-lg" onClick={increase}>
              <img src={plus} alt="Increase" />
            </button>
          </span>
        </div>

        <div className="flex justify-between">
          <code className="text-[20px] font-[500] leading-[16px]">$ 6,500</code>
          <button
            className="bg-[#845649] text-[#F2E3DD] py-[6px] px-[26px] rounded-[18px]"
            onClick={() => addToCart(item)} // Add item to cart on button click
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
