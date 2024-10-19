// import React from 'react'
import search from './../assets/search.svg'
import profile from './../assets/profile.svg'
import cart from './../assets/cart.svg'
import logo from './../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='bg-[#845649] py-[17px] px-[54px] fixed top-0 w-full z-[100000] flex justify-between text-[#FFFFFF]'>
      <img src={logo} alt="logo" />
      <div className='  flex justify-end  gap-[40px] '>
        <span className='flex gap-[11px] py-[8px] pl-[22px] border-[1px] border-[#FFFFFF] rounded-[19px] w-[420px]'>
            <img src={search} alt="" />
        <input type="search" name="" id="" placeholder='Search' className='bg-transparent border-none outline-none w-[380px] placeholder:text-[#ffffff] placeholder:font-bold'/>
        </span>

        <div className='flex gap-[13px] items-center'>
            <img src={profile} alt="" />

            <p>Login</p>
        </div>

        <div className='flex gap-[13px] items-center'>
            <img src={cart} alt="" />

            <p>Cart</p>
        </div>
    </div>
    </div>
  )
}

export default Navbar