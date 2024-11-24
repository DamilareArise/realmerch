// import React from 'react';
import deal from "./../assets/deal1.png";

const PromoBanner = () => {
  return (
    <div className=" w-full p-[24px] md:p-8">
      <div className="flex-col md:flex-row flex justify-between items-center gap-[20px]">
        {/* Left Promo Block */}
        <div
          className="flex items-center space-x-4 bg-white p-6 rounded-lg hover:shadow-2xl hover:scale-[1.05] basis-1/2 transition-all"
          style={{
            background: "linear-gradient(to left, #845649, #F2E3DD)",
          }}
        >
          <div className="flex-1 ">
            <h2 className="text-lg md:text-3xl font-bold">10% Off</h2>
            <p className="text-xs mt-2 md:text-lg">
              On branded phone accessories every Thursday this November
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={deal} // replace with actual image path
              alt="Phone Accessories"
              className="w-[150px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Promo Block */}
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg hover:shadow-2xl hover:scale-[1.05] basis-1/2 transition-all"
            style={{
                background: 'linear-gradient(to left, #845649, #F2E3DD)',
                
              }}
        >
          <div className="flex-shrink-0">
            <img
              src={deal} // replace with actual image path
              alt="Fashion Items"
              className="w-[150px] h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg md:text-[1.30rem] lg:text-2xl font-bold">
              Buy 2 fashion items and get 2% off delivery fees
            </h2>
            <p className="mt-2 md:text-sm ">T&Cs Apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
