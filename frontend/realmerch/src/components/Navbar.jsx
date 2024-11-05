import React, { useContext } from 'react'
import search from "./../assets/search.svg";
import profilee from "./../assets/profile.svg";
import cart from "./../assets/cart.svg";
import logo from "./../assets/logo.svg";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Navbar = () => {
  const [email, setemail] = useState("");
  const [profile, setprofile] = useState("");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setemail(user.email);
        setprofile(user.photoURL)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const { cartItems } = useContext(CartContext);

  return (

    <div className='bg-[#845649] py-[17px] px-[54px] fixed top-0 w-full z-[100000] flex items-center justify-between text-[#FFFFFF]'>
      <img src={logo} alt="logo" className='md:h-[25px] lg:h-fit'/>
      <div className='  flex justify-end  gap-[40px] '>
        <span className='flex gap-[11px] py-[8px] pl-[22px] border-[1px] border-[#FFFFFF] rounded-[19px] md:w-[250px] lg:w-[420px]'>
            <img src={search} alt="" />
        <input type="search" name="" id="" placeholder='Search' className='bg-transparent border-none outline-none w-[380px] placeholder:text-[#ffffff] placeholder:font-bold'/>

        </span>

        <div className="flex gap-[13px] items-center">
          {
            profile? <img src={profile} alt=""  width={50} className="rounded-[100px]"/> : <img src={profilee} alt=""/>
          }

          {email ? (
            <div>
              <a href=""> {email} </a> <a href="" onClick={handleLogout}> Logout </a>{" "}
            </div>
          ) : (
            <Link to={'/login'}> Login </Link>
          )}
        </div>

        <Link to={'/cart'} className="flex gap-[13px] items-center">
          <img src={cart} alt="" />

          <p>Cart</p>
          <span className="absolute top-[20px] right-[25px] bg-red-500 text-white rounded-full text-xs px-2 py-1">
              {cartItems.length}
            </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
