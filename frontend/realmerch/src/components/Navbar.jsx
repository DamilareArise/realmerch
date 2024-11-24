import React, { useContext } from "react";
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setemail(user.email);
        setprofile(user.photoURL);
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
    <div className="bg-[#845649] py-[17px] px-[24px] lg:px-[54px] fixed top-0 w-full z-[100000] flex items-center justify-between text-[#FFFFFF]">
      <img src={logo} alt="logo" className="h-[20px] md:h-[25px] lg:h-fit" />
      <div className="  flex items-center justify-end gap-[20px]  md:gap-[40px] ">
        <span className="hidden md:flex gap-[11px] py-[8px] pl-[22px] border-[1px] border-[#FFFFFF] rounded-[19px] md:w-[300px] lg:w-[420px]">
          <img src={search} alt="" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="bg-transparent border-none outline-none w-[380px] placeholder:text-[#ffffff] placeholder:font-bold"
          />
        </span>

        <div className="flex gap-[13px] items-center">
          {profile ? (
            <img src={profile} alt="" width={50} className="rounded-[100px]" />
          ) : (
            <img src={profilee} alt="" />
          )}

          {email ? (
            <div className="text-[10px] md:text-[14px]">
              <a href=""> {email} </a>{" "}
              <a href="" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </a>{" "}
            </div>
          ) : (
            <Link to={"/login"} className="hidden md:block">
              {" "}
              Login{" "}
            </Link>
          )}
        </div>

        <Link to={"/cart"} className="flex gap-[13px] items-center">
          <img src={cart} alt="" />

          <p className="hidden md:block">Cart</p>
          <span className="absolute top-[10px] md:top-[20px] right-[15%] md:right-[25px] bg-red-500 text-white rounded-full text-xs px-2 py-1">
            {cartItems.length}
          </span>
        </Link>

        <button
          type="button"
          className={`hamburger md:hidden ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-bar top"></div>
          <div className="hamburger-bar middle"></div>
          <div className="hamburger-bar bottom"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
