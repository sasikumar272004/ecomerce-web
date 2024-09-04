'use client'
import vid from '@/videos/vid.mp4';
import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const Des = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.to('video',{
                scale:'.7',
                y:-80,
                borderRadius:'10%',
                scrollTrigger:{
                    trigger:'video',
                    start:'top 20%',
                    end:'+= 30%',
                    pin:true,
                    scrub:3,
                    markers:true
                }

                 
                 
               
            })

        });
        return () => ctx.revert();  
      }, []);
  return (
    <div className="mmd h-[100vh] w-[100vw]">
      <div className='vidiv bg-black h-[100vh] w-[100vw]'> 
      <div className=" h-[90vh] w-[90vw] overflow-hidden video  absolute mx-[5%] my-[3%] rounded-3xl   ">
        <video autoPlay loop muted playsInline   >
          <source src={vid} type="video/mp4" />
           
        </video>
      </div>
      </div>  
    </div>
  );
};

export default Des;
