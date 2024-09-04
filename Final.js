'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {ScrollTrigger} from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
 import c1 from '@/assests/c1.png';
import c2 from '@/assests/c2.png';
import f3 from '@/assests/f3.png';
 import c3 from '@/assests/c3.png';
 import p6 from '@/assests/p6.png';
   import l2 from '@/assests/l2.png';
  
const Final = () => {

  useEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to('.i',{
        y:-250,
        scrollTrigger:{
          trigger:'final',
          start:'top -1%',
          end:'top -80%',
          scrub:5
        }
      })



    });
    return () => ctx.revert();  
    }, []);
  return (
    <>
     <div className='h-[100vh] w-[100vw] bg-slate-50 overflow-hidden final mx-[-1.2%]'>


        <div>
            <h1 className='absolute top-[20%] left-[45%] text-3xl font-extralight text-[#514f4f]' > STARBUCKS</h1>
            
        </div>

        <Image src={p6} className='h-[17vh] w-[5vw] absolute top-[17%] i right-[13%] scale-[2] -rotate-6    '></Image>
         <Image src={l2} className='h-[17vh] i w-[10vw] absolute top-[20%] left-[10%] scale-[2]  -rotate-[30deg]    '></Image>
         <div className='flex flex-col justify-center items-center font-ex text-8xl scale-y-[1.1] mt-[15%] font-light text-[#312e2e]'>
        <h1>DELIVER's THE WORLD's  </h1>
        <h1> BEST COFFEE</h1>
        </div>

        {/* <Image src={t6} className='h-[27vh] w-[5vw] absolute bottom-[11%] left-[18%] scale-[1.2] rotate-6'></Image> */}
        {/* <Image src={t8} className='h-[27vh] w-[6.3vw] absolute bottom-[6%] right-[33%] brightness-105 -rotate-[30deg]'></Image> */}
        <Image src={c1} className='h-[15vh] i w-[10vw] absolute bottom-[19%] right-[3%]    '></Image>
        <Image src={c2} className='h-[12vh] i w-[7vw] absolute bottom-[5%] right-[12%]   -rotate-[30deg]'></Image>
        {/* <Image src={c2} className='h-[12vh] w-[7vw] absolute top-[45%] left-[6%]   -rotate-[30deg]'></Image> */}
        {/* <Image src={c2} className='h-[12vh] w-[7vw] absolute top-[5%] right-[30%]   rotate-[30deg]'></Image> */}
        <Image src={c3} className='h-[11vh] i w-[5vw] absolute bottom-[25%] right-[20%]   -rotate-[30deg]'></Image>
        <Image src={f3} className='h-[17vh] i w-[5vw] absolute bottom-[20%] left-[15%] scale-[2] brightness-105  rotate-[10deg]'></Image>

        
         <div className='w-[30vw] h-[10vh] opacity-[.3] absolute bottom-[2%] mx-[37%] scale-[.5]'><svg
  class="heart"
  viewBox="-5 -5 278 56"
  version="1.1"
  id="svg5"
  xmlns="http://www.w3.org/2000/svg"
>
  <filter>
    <feGaussianBlur stdDeviation="1.6"></feGaussianBlur>
  </filter>
  <g transform="translate(29.1 -127.42)" id="layer1">
    <path
      pathLength="1"
      d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36"
      id="line"
    ></path>
  </g>
  <g transform="translate(29.1 -127.42)" id="layer2">
    <path
      pathLength="1"
      d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36"
      id="point"
      filter="url(#blur)"
    ></path>
  </g>
</svg>
</div>

 
 
      </div>
       
       
    </>
  )
}

export default Final
