// import React from 'react'

import Navbar from "./Navbar";
import search from "./../assets/search.svg";
import landing from "./../assets/landingimg.png";
import female from "./../assets/female.svg";
import male from "./../assets/male.svg";
import office from "./../assets/office.svg";
import home from "./../assets/home.svg";
import promo from "./../assets/promotional.svg";
import others from "./../assets/others.svg";
import Category1 from "./Categories/category1";
import Category2 from "./Categories/Category2";
// import Event from "./Events/Event";
import Recommended from "./Categories/Recommended";
import Ads from "./Events/Ads";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

// import female from './../assets/female.svg'

const Landing = () => {

  


  return (
    <div className="bg-[#fbf0f0] ">
      <Navbar />

      <span className="flex md:hidden gap-[11px] py-[8px] pl-[22px] border-[1px] border-[#000000] rounded-[19px] mt-[65px] mx-[24px]">
          <img src={search} alt="" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="bg-transparent border-none outline-none w-[380px] placeholder:text-[#000000] placeholder:font-bold"
          />
        </span>

      <div className="pt-[35px] md:pt-[100px]  ">
      
        <div className="flex justify-between mb-[30px] px-[24px] lg:px-[50px] text-[#FFFFFF] gap-[30px]">
          <div className="overflow-hidden rounded-3xl basis-[100%] md:basis-[100%] lg:basis-[80%]">
            <img
              src={landing}
              alt=""
              // height={250}
              
              className="/h-[350px] /hover:scale-[1.1] rounded-3xl transition-all /h-[200px] w-full "
            />
          </div>
          <div className="py-[24px] bg-[#845649] pl-[24px] pr-[54px] /flex flex-col gap-[23px] hidden lg:flex /h-[250px]">
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



       
        <div className=" pb-[35px] pl-[24px]  md:px-[24px] lg:px-[50px]">
        <Category1/>
        </div>


        <div className=" pb-[30px]">
        <Category2/>
        </div>

        {/* <div>
          <Event/>
        </div> */}


        <div>
          <Recommended/>
        </div>

        <div className="px-[24px] lg:px-[50px] /pt-[16px]">
          <Ads/>
        </div>

        <div className="px-[24px] lg:px-[50px] pt-[30px] pb-[44px]  bg-gradient-to-b to-[#0000001A] from-[#fbf0f0]">
          <About/>
        </div>

        <div className="pb-[20px]">
          <Contact/>
        </div>

        <div>
          <Footer/>
        </div>
    
      </div>
    </div>
  );
};

export default Landing;
