import React, { useContext } from "react";
// import CartItem from "./CartItem"; // Component for each individual item in the cart
import { CartContext } from "./context/CartContext"; // Context that manages cart state

const Cart = () => {
  const { cartItems, total, totalItems } = useContext(CartContext); // Assuming the CartContext holds this data
console.log('hello' + cartItems)
  return (
    <div className="flex justify-between p-6 bg-gray-100">
      {/* Left side - Cart items */}
      <div className="w-3/5">
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-transparent border-none text-sm text-gray-500">
            ← Continue shopping
          </button>
        </div>

        {cartItems.map((item) => (
        //   <CartItem key={item.id} item={item} />
            <div key={item.id}>{item.name}</div>
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
  );
};

export default Cart;
