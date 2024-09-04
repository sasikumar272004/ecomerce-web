 
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {ScrollTrigger} from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import p7 from '@/assests/p7.png'
import t4 from '@/assests/t4.png'
import s from '@/assests/sta.png'

const Foot = () => {
  return (
    <>
      <div className='h-[210vh] w-[98.7vw]   bg-[#e8dccd]'>
        <div className='h-[90vh] bg-[#fffbf5] relative'>

          <Image src={t4} className='h-[30vh] w-[7vw] scale-[1.7] rotate-12 absolute top-[40%] left-[16%]' ></Image>
          <Image src={p7} className='h-[30vh] w-[9vw]   rotate-[-10deg] absolute top-[40%] scale-[1.7] right-[16%] brightness-110' ></Image>
          <h1 className='text-7xl absolute left-[41%] top-[35%] text-[#242323] font-light font-t1 scale-y-[1.2] scale-x-[1.1]'>TRY NOW</h1>
          <div className='h-[80vh] absolute left-[53%] top-[60%] rounded-2xl w-[27vw] bg-[#fffbf5] border-[.5px] border-black   '>

          <h1 className='absolute left-[13%] mt-[11%] text-2xl' >Basic</h1>
          <div className='text-[17px] flex flex-col gap-4 ml-[8%] mt-[33%]'>
           <h1>- Access to regular Starbucks menu items</h1>
          <h1>- Free coffee refills (in-store only)</h1>
          <h1>-  Monthly free drink of your choice</h1>
          <h1>-  Birthday rewards: Free drink and dessert   </h1>
          <h1>-  Early access to Starbucks merchandise</h1>
          <div className='bg-transparent text-[#000] h-[8vh] w-[17vw] text-center py-[4%] rounded-[40px] mt-[33%] border-[.5px] border-black mx-[12%]'>TRY, $4.99/MONTH</div>

           
           </div>

          </div>
          <div className='h-[80vh] absolute left-[18%] top-[60%] rounded-2xl w-[33vw] bg-[#DFD3C3] border-[.5px] border-black  shadow-[30px_20px_2px_rgba(0,0,0,.2)]'>
          <Image src={s} className='h-[10vh] w-[7vw] scale-[1.4] ml-[2%] mt-[5.5%]'></Image>          
          <h1 className='absolute left-[19%] mt-[-10%] text-2xl' >Pro Access</h1>
           <div className='text-lg flex flex-col gap-4 ml-[11%] mt-[6%]'>
           <h1>+  10% discount on all purchases</h1>
          <h1>+  Free delivery on all orders</h1>
          <h1>+  Monthly free drink of your choice</h1>
          <h1>+  Birthday rewards: Free drink and dessert   </h1>
          <h1>+  Early access to Starbucks merchandise</h1>
          <h1>+  Members-only events and tastings</h1>
          <h1>+  Free upgrade on size for any beverage</h1>
           </div>
           <div className='bg-black text-[#d8d7d7] h-[8vh] w-[25vw] text-center py-[3%] rounded-[40px] mt-[9%] mx-[12%]'>TRY, $20.99/MONTH</div>
          </div>
        </div>
        <div className='flex justify-between absolute h-[10vh] bg-transparent border-[.5px] border-black w-[62vw] mt-[23%] pt-[1.3%] left-[17.7%] rounded-[30px]'> <h1 className='text-3xl pr-[5%] font-light pl-[5%]'>APP? </h1>   <h1 className='text-lg'>Tap into Starbucks magic</h1> <div className='text-2xl pr-[3%]'>DOWNLOAD</div></div>
        <div className='text-2xl mt-[35%] ml-[2%]'>Made With 🖤</div>
        <div className='text-2xl mt-[-2%] ml-[85%] font-light'>Legal info</div>
        <div className='ml-[85.2%] flex flex-col gap-2 mt-[5%]'><h1>License</h1>
             <h1>Use cases</h1>
             <h1>Order custom</h1>
             <h1>Privacy Policy</h1>
             <h1>Terms of Use</h1>
             <h1>help@starbucks.com</h1>
        </div>
        <h1 className='text-sm opacity-[.5] mt-[%] ml-[2%]'>©️ 2024 All Rights Reserved</h1>
      </div>
    </>
  );
}

export default Foot;
