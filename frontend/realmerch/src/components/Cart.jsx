import { useState, useContext } from "react";
import minus from "./../assets/minus.svg";
import plus from "./../assets/plus.svg";
import Contact from "./Contact";
import Footer from "./Footer";
import { CartContext } from "./context/CartContext"; // Context that manages cart state
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Cart = () => {
  
  const { cartItems, totalItems, removeFromCart } = useContext(CartContext); // Assuming the CartContext holds this data
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  ); // Default quantity is 1 for each item

  // Increase item quantity
  const increase = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Decrease item quantity
  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  // Calculate total cost
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * quantities[item.id],
    0
  );

  return (
    <div>
      <Navbar/>
      <div className="flex flex-col md:flex-row justify-between p-6 bg-gray-100 pt-[80px] md:pt-[160px]">
        {/* Left side - Cart items */}
        <div className="lg:w-3/5 ">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to={"/"}
              className="bg-transparent border-none text-sm text-gray-500"
            >
              ← Continue shopping
            </Link>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FEFEFE] px-[16px] py-[16px] rounded-[18px] flex items-center mb-4"
            >
              <div className="w-[120px] h-[120px] lg:w-[160px] lg:h-[180px] bg-[#F0E1DB] rounded-[18px] flex justify-center items-center">
                <img src={item.image} alt="" width={150} height={105} className="/w-[100px] h-[100px] /lg:w-[150px] lg:h-[150px]"/>
              </div>

              <div className="flex basis-[80%] justify-between">
                <div className="flex flex-col gap-[8px] ml-[24px]">
                  <p className="text-sm md:text-lg lg:text-xl font-[500]">{item.name}</p>
                  <p className="text-xs lg:text-sm font-[400]">In stock</p>

                  <span className="flex items-center gap-[20px] mt-[24px]">
                    <button
                      className="hover:opacity-[70%] hover:shadow-lg"
                      onClick={() => decrease(item.id)}
                    >
                      <img src={minus} alt="Decrease" width={20} />
                    </button>
                    <code>{quantities[item.id]}</code>
                    <button
                      className="hover:opacity-[70%] hover:shadow-lg"
                      onClick={() => increase(item.id)}
                    >
                      <img src={plus} alt="Increase" width={20} />
                    </button>
                  </span>
                </div>

                <span className="flex items-center text-sm md:text-sm lg:text-lg font-[500] mr-[8px]">
                  <i className="fa-solid fa-naira-sign"></i>{" "}
                  {item.price * quantities[item.id]}
                </span>

                <span className="flex flex-col justify-between gap-[10px]">
                  <button className="text-[10px] md:text-xs lg:text-lg font-[400] bg-[#845649] text-white py-2 px-[4px] rounded-lg">Save for later</button>
                  <button className="text-xs md:text-xs lg:text-lg font-[400] bg-red-950 text-white py-2 rounded-lg" onClick={() => removeFromCart(item.id)}>Remove</button>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Shopping summary */}
        <div className="lg:w-1/3 h-fit bg-white shadow-lg p-6 rounded-lg flex flex-col justify-start">
          <h2 className="text-lg font-semibold">Shopping summary</h2>
          <p className="text-sm mb-2">{totalItems} items</p>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Delivery fees</p>
            <p className="text-sm">See delivery charges at checkout</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-lg font-semibold">${total.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Excluding delivery fees</p>
          </div>
          <button className="w-full bg-[#845649] text-white py-3 rounded-lg font-semibold">
            Checkout
          </button>
        </div>
      </div>

      <div className="pb-[20px]">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
