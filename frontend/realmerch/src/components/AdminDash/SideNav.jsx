import React from 'react'
import arrow from './../../assets/arrowBack.svg'
import reviews from './../../assets/reviews.svg'
// import arrow from './../../assets/arrowBack.svg'
import profile from './../../assets/profilee.svg'
import contact from './../../assets/contact.svg'
import task from './../../assets/task.svg'
import orders from './../../assets/orders.svg'
import product from './../../assets/product.svg'
import logout from './../../assets/logout.svg'
const SideNav = () => {
  return (
    <div className='h-screen  fixed w-[10%] bg-[#845649] px-[40px] py-[28px] flex flex-col items-center gap-[28px]'>
        <img src={arrow} alt="" className='w-[30px] h-[30px]'/>
        <div className='flex flex-col gap-[14px]'>
       
        <img src={profile} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>
        <img src={contact} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>
        
        <img src={task} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>
        <img src={orders} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>

        <img src={reviews} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>
        <img src={product} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>
        <img src={logout} alt="" className='p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'/>
        </div>
    </div>
  )
}

export default SideNav