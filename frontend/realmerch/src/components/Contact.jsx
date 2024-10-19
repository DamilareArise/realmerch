// import React from 'react'
import phone from "./../assets/phone.svg";
import email from "./../assets/contactMail.svg"
import whatsapp from './../assets/whatsapp.svg'
const Contact = () => {
  return (
    <div className="bg-[#845649] px-[50px] py-[56px] flex text-[#FFFFFF] justify-between">
      <a href="mailto:" className="flex items-start gap-[12px]">
        <img src={email} alt="" width={30}/>
        <span className="flex flex-col gap-[2px]">
          <p className="text-[18px] font-[500] leading-[28px]">Email Us</p>
          <p className="text-[16px] font-[400] leading-[24px]">realmerch@gmail.com</p>
        </span>
      </a>
     

      <a href="tel:+" className="flex items-start gap-[12px]">
        <img src={phone} alt="" width={30}/>
        <span className="flex flex-col gap-[2px]">
          <p className="text-[18px] font-[500] leading-[28px]">Phone Support</p>
          <p className="text-[16px] font-[400] leading-[24px]">+234 903 1328 853</p>
        </span>
      </a>

      <a href="#" className="flex items-start gap-[12px]">
        <img src={whatsapp} alt="" width={30}/>
        <span className="flex flex-col gap-[2px]">
          <p className="text-[18px] font-[500] leading-[28px]">Whatsapp</p>
          <p className="text-[16px] font-[400] leading-[24px]">+234 903 1328 853</p>
        </span>
      </a>

      <span className="flex flex-col gap-[2px]">
        <p className="text-[18px] font-[500] leading-[28px]">Best deals</p>
        <p className="text-[16px] font-[400] leading-[24px]">Get our best deals<br/> sent to your mail</p>
      </span>

      <span className="flex h-[50px]">
        <input type="search" name="" id="" className="bg-[#FFFFFF] w-[230px] rounded-tl-[18px] rounded-bl-[18px]"/>
        <button type="submit" className="bg-transparent border-[1px] border-[#FFFFFF] py-[13px] px-[20px] rounded-tr-[18px] rounded-br-[18px]">Subscribe</button>
      </span>
    </div>
  );
};

export default Contact;
