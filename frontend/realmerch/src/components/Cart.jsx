import { useState } from "react";
import{ useContext } from "react";
import minus from './../assets/minus.svg';
import plus from './../assets/plus.svg';
import Contact from "./Contact";
import Footer from "./Footer";
// import CartItem from "./CartItem"; // Component for each individual item in the cart

import { CartContext } from "./context/CartContext"; // Context that manages cart state
import { Link } from "react-router-dom";

const Cart = () => {
  const [num, setNum] = useState(1);
  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const { cartItems, total, totalItems } = useContext(CartContext); // Assuming the CartContext holds this data
  console.log("hello" + cartItems);
  return (
    <div>
      <div className="flex justify-between p-6 bg-gray-100">
        {/* Left side - Cart items */}
        <div className="w-3/5">
          <div className="flex items-center gap-4 mb-6">
            <Link to={'/'} className="bg-transparent border-none text-sm text-gray-500">
              ← Continue shopping
            </Link>
          </div>

          {cartItems.map((item) => (
            //   <CartItem key={item.id} item={item} />
            <div key={item.id}>
              <div className="w-[160px] h-[180px] bg-[#F0E1DB] rounded-[18px] flex justify-center items-center">
                <img src={item.image} alt="" width={150} height={125} />
                {/* {item.name} */}
              </div>

              <div>
                <p>{item.name}</p>
                <p>in stock</p>

                <button className="hover:opacity-[70%] hover:shadow-lg" onClick={decrease}>
              <img src={minus} alt="Decrease" width={20}/>
            </button>
            <code>{num}</code>
            <button className="hover:opacity-[70%] hover:shadow-lg" onClick={increase}>
              <img src={plus} alt="Increase" width={20}/>
            </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Shopping summary */}
        <div className="w-1/3 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Shopping summary</h2>
          <p className="text-sm mb-2">{totalItems} items</p>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Delivery fees</p>
            <p className="text-sm">See delivery charges at checkout</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-lg font-semibold">${total}</p>
            <p className="text-sm text-gray-500">Excluding delivery fees</p>
          </div>
          <button className="w-full bg-[#845649] text-white py-3 rounded-lg font-semibold">
            Checkout
          </button>
        </div>
      </div>


      <div className="pb-[20px]">
          <Contact/>
        </div>

        <div>
          <Footer/>
        </div>
    </div>
  );
};

export default Cart;
