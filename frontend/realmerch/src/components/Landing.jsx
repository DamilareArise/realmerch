// import React from 'react'

import Navbar from "./Navbar";
import landing from "./../assets/landingimg.png";
import female from "./../assets/female.svg";
import male from "./../assets/male.svg";
import office from "./../assets/office.svg";
import home from "./../assets/home.svg";
import promo from "./../assets/promotional.svg";
import others from "./../assets/others.svg";
import Category1 from "./Categories/category1";
// import female from './../assets/female.svg'

const Landing = () => {
  return (
    <div className="bg-[#fbf0f0]">
      <Navbar />

      <div className="pt-[100px]  px-[50px]">
        <div className="flex justify-between mb-[30px]">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={landing}
              alt=""
              height={250}
              
              className="/h-[350px] hover:scale-[1.1] transition-all"
            />
          </div>
          <div className="py-[24px] bg-[#476A6F] pl-[24px] pr-[54px] flex flex-col gap-[23px]">
            <p>All Categories</p>
            <div className="flex flex-col gap-[17px]">
              <span className="flex gap-[10px] items-center">
                <img src={female} alt="" />
                <p>Female Clothing</p>
              </span>

              <span className="flex gap-[10px] items-center">
                <img src={male} alt="" />
                <p>Male Clothing</p>
              </span>

              <span className="flex gap-[10px] items-center">
                <img src={office} alt="" />
                <p>Office Supplies</p>
              </span>

              <span className="flex gap-[10px] items-center">
                <img src={home} alt="" />
                <p>Home Decors</p>
              </span>

              <span className="flex gap-[10px] items-center">
                <img src={promo} alt="" />
                <p>Promotional items</p>
              </span>

              <span className="flex gap-[10px] items-center">
                <img src={others} alt="" />
                <p>Others</p>
              </span>
            </div>
          </div>
        </div>



       
        <Category1/>
    
      </div>
    </div>
  );
};

export default Landing;
