// import React from 'react'
import search from './../assets/search.svg'
import profile from './../assets/profile.svg'
import cart from './../assets/cart.svg'
const Navbar = () => {
  return (
    <div className='bg-[#476A6F] py-[17px] flex justify-end px-[54px] gap-[40px] fixed top-0 w-full '>
        <span className='flex gap-[11px] py-[8px] pl-[22px] border-[1px] border-[#FFFFFF] rounded-[19px] w-[420px]'>
            <img src={search} alt="" />
        <input type="search" name="" id="" placeholder='Search' className='bg-transparent border-none outline-none w-[380px]'/>
        </span>

        <div className='flex gap-[13px] items-center'>
            <img src={profile} alt="" />

            <p>My Account</p>
        </div>

        <div className='flex gap-[13px] items-center'>
            <img src={cart} alt="" />

            <p>Cart</p>
        </div>
    </div>
  )
}

export default Navbar