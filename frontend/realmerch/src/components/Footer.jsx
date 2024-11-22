// import React from 'react'
import { Link } from "react-router-dom";
import logo from "./../assets/logo.svg";
import insta from "./../assets/instaIcon.svg";
import facebook from "./../assets/facebookIcon.svg";
import whatsapp from "./../assets/whatsappIcon.svg";
const Footer = () => {
  return (
    <div className="bg-[#845649] flex flex-col md:flex-row px-[24px] gap-[24px] lg:px-[50px] justify-between text-[#FFFFFF] py-[67px]">
      <div className="flex flex-col gap-[10px] md:gap-[17px]">
        <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px]">
          Customer Service
        </p>

        <span className="flex flex-col gap-[10px] md:gap-[10px]">
          <Link to={""} className="text-[14px] lg:text-[16px] font-[400] leading-[24px]">
            FAQ
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Shipping Information
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Order Tracking
          </Link>
        </span>
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[17px]">
        <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px]">Quick Links</p>

        <span className="flex flex-col gap-[10px]">
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Login
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Create Account
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            My Account
          </Link>
        </span>
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[17px]">
        <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px]">Company</p>
        <span className="flex flex-col gap-[10px]">
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            About Us
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Contact Us
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Blog
          </Link>
        </span>
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[17px]">
        <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px]">Legal</p>
        <span className="flex flex-col gap-[10px]">
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Terms and Conditions
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Privacy Policy
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Cookie Policy
          </Link>
          <Link to={""} className="text-[12px] lg:text-[16px] font-[400] leading-[24px]">
            Refund Policy
          </Link>
        </span>
      </div>

      <div className="flex flex-col gap-[14px]">
        <img src={logo} alt="" width={150}/>
        <p>2024 Copyright</p>

        <span className="flex gap-[20px]">
          <a href="http://" className="bg-[#FFFFFF] p-[8px] rounded-[20px]">
            <img src={insta} alt="" />
          </a>
          <a href="http://" className="bg-[#FFFFFF] p-[8px] rounded-[20px]">
            <img src={facebook} alt="" />
          </a>
          <a href="http://" className="bg-[#FFFFFF] p-[8px] rounded-[20px]">
            <img src={whatsapp} alt="" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
