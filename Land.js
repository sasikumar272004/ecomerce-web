'use client'
import React, { useState, useEffect } from 'react';
 import Image from 'next/image';
 import cap from '@/assests/cup.png';
import cup from '@/assests/cap.png';
 import c1 from '@/assests/c1.png';
import c2 from '@/assests/c2.png';
import c3 from '@/assests/c3.png';
 import t2 from '@/assests/t2.png';
 import vid from '@/videos/vid.mp4';
import vid1 from '@/videos/vid1.mp4';
import vid2 from '@/videos/vid2.mp4';
import vid3 from '@/videos/vid3.mp4';
import {ScrollTrigger} from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Navbar';
 

 

gsap.registerPlugin(ScrollTrigger);
 

const Land = () => {

 


    useEffect(() => {
        let ctx = gsap.context(() => {


            gsap.from(".c  ",{
                y:-50,
                duration:.8,
                ease:"bounce.out"
              
            })
            gsap.to(".cup",{
                rotate:'.6deg',
                y:6,
                duration:1.5,
                ease:"linear",
                repeat:-1,
                yoyo:true
            },'cup')
            gsap.to(".cap",{
                rotate:'.6deg',
                y:6,
                duration:1.5,
                ease:"linear",
                repeat:-1,
                yoyo:true
            },'cup')
            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger:".md",
                    start:"top 0%",
                    end:"+=50%",
                   pin:true,
                    scrub:2
                }
          
              });              
            tl.to(".cap",{
                y:-20,
                rotate:'-5deg',     
                 
            },'h')          

            tl.to(".cir1",{
                scale:4,
                opacity:0,
                rotate:'360deg',                  
            },'h')
            tl.to(".cir2",{
                scale:5.5,
                opacity:0,
                rotate:'360deg',                  
            },'h' )
            tl.to(".cir3",{
                scale:7,
                opacity:0,
                rotate:'360deg',                  
            },'h' )
            tl.to(".cir4",{
                scale:8.5,
                opacity:0,
                rotate:'360deg',                
            },'h' )
            tl.to(".cir5",{
                scale:10,
                opacity:0,
                rotate:'360deg',                
            },'h' )
            tl.to(".c",{
                x:10,
                y:-5,

            },'h')
            tl.to(".pgcap1",{
                opacity:0,
                y:'-9vh'
            },'h')            
            tl.to(".pgcap2",{
                opacity:1,
                y:'-8vh'
            },'h')

            tl.to(".r1",{
                rotate:'450deg'
            },'h')
            tl.to(".r2",{
                rotate:'360deg'
            },'h')



            //page2

            gsap.to(".md",{
                backgroundBlendMode: "color",
                 duration: 0.5,
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -2%",
                    scrub:3,

                }
            },'p2')

            gsap.to(".mmd",{
                backgroundBlendMode: "color",
                 duration: 0.1,
                
            },)


            gsap.to(".cap, .cup",{
                x:950,

                  scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -2%",
                     scrub:5,

                }
            },'p2')

            gsap.to(".t1",{
                left:'43.5%',
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -2%",
                     scrub:5,

                }


            },'p2')

            gsap.to(".n1",{
                width:'0vw',
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }


            },'p2')

            gsap.to(".n2",{
                width:'15vw',
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }
            },'p2')

            gsap.to(".h1",{
                x:-500,
                opacity:0,
               
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }
            },'p2')
            gsap.from(".h2",{
                x:-500,
                opacity:0,
                 
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }
            },'p2')

            gsap.to(".pgcap1 , .pgcap2",{
                x:600,
                opacity:0,
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }

            },'p2')

            gsap.to(".pgcap3  ",{
                right:'13%',
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }

            },'p2')

            gsap.to(".pgcap4  ",{
                right:'10%',
                scrollTrigger:{
                    trigger:".md",
                    start:"top -1%",
                    end:"top -1.5%",
                     scrub:5,

                }

            },'p2')


            let tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger:".md",
                    start:"top -3%",
                    end:"+=50%",
                   pin:true,
                    scrub:2,
                 }
          
              }); 
              
              tl1.to(".t1",{
                scale:'1.13',
                rotate:'-3deg'
              },'t2')

              tl1.to(".pgcap3",{
                opacity:0,
                y:'-9vh'
            },'t2')            
            tl1.to(".pgcap4",{
                opacity:1,
                y:'-8vh'
            },'t2')

            tl1.to(".c",{
                x:-5,
                y:-30,
            },'t2')

            tl1.to(".cir5",{
                scale:4,
                opacity:0,
                rotate:'360deg',                
            },'t2' )
            
            tl1.to(".cir6",{
                scale:5.5,
                opacity:0,
                rotate:'360deg',                
            },'t2' )
            
            tl1.to(".cir7",{
                scale:7,
                opacity:0,
                rotate:'360deg',                
            },'t2' )
            
            tl1.to(".cir8",{
                scale:8.5,
                opacity:0,
                rotate:'360deg',                
            },'t2' )
            tl1.to(".r1",{
                rotate:'810deg'
            },'t2')
            tl1.to(".r2",{
                rotate:'720deg'
            },'t2')

            






         //page3






         let tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:".md",
                start:"top -105%",
                end:"+=50%",
               pin:true,
                scrub:2,
                
             }
      
          }); 

         tl2.to('.video',{
            scale:'.7',
            y:-0,
            borderRadius:'2%',
             
         })

   
           

          tl2.to(".vv",{
            y:-1500
          },'vv')

          tl2.from(".card",{
            x:500
          },'vv')

          let tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:".md",
                start:"top -106%",
                end:"+=30%",
               pin:true,
                scrub:2,
                
             }
      
          });
        
       
 

         
           
 

       

 




                       

             
    
  
 
 
         
       
    
     
        
        });
        return () => ctx.revert();  
      }, []);
    
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNav(false);  
      } else {
        setShowNav(true);  
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <> 

    <div className='overflow-hidden md'>
       <div className='h-[105vh] md w-[100vw] bg-[#e7e7e5] font-extralight overflow-hidden'>

         

        <div className='flex justify-center pt-[3.2%] text-[#6d6b6b] gap-2 text-[30px] z-50 font-extralight opacity-1 '>
            <h1>COFFEE </h1>
            <h1 className='font-bold text-[#414040] ' > | </h1>
            <h1 className='font-bold n1 w-[15vw] h-[5vh] overflow-hidden text-[#414040]   '>FRAPPUCCINO</h1>
            <h1 className='font-bold n2 w-[0vw] h-[5vh] overflow-hidden text-[#414040]   '>CAPPUCCINO</h1>
        </div>
        
         
        <div className='absolute h1 left-[21%] top-[29%] whitespace-nowrap text-[#797777] overflow-hidden  scale-y-[1.8] font-light scale-x-[1.4] text-[25px]'>
        <h1>The ultimate frozen   <br></br> blended coffee</h1>
        </div>

        <div className='absolute whitespace-nowrap h2 left-[21%] top-[29%] overflow-hidden   text-[#797777] scale-y-[1.8] font-light scale-x-[1.4] text-[25px]'>
        <h1>Savor the creamy  <br></br> coffee experience.</h1>
        </div>
         
         <Image src={cap} className='h-[17vh] cap w-[20vw] absolute left-[39.5%] top-[10.5%] z-10  '></Image>
          <Image src={cup} className='h-[62vh] cup w-[20vw] absolute left-[39.5%] top-[27%]  '></Image>
         <Image src={c1} className='h-[13vh] c w-[10vw] absolute left-[1%] top-[37%]  '></Image>
         <Image src={c2} className='h-[12vh] c w-[8vw] absolute left-[10%] top-[75%] rotate-45  '></Image>
         <Image src={c3} className='h-[11vh] c w-[4vw] absolute left-[24%] scale-[1.34] top-[57%]  rotate-45  '></Image>
          <Image src={c1} className='h-[13vh] c w-[11vw] absolute right-[24%] scale-[.8] top-[22%]  rotate-[30deg]   '></Image>
         <Image src={c1} className='h-[13vh] c  w-[8vw] absolute right-[4%]   rotate-12  '></Image>
         <Image src={c2} className='h-[13vh] c w-[7vw] absolute bottom-[40%] right-[10%]  rotate-[130deg]  '></Image>
         <Image src={c3} className='h-[13vh] c w-[4vw] absolute top-[9%] left-[13%]  rotate-45  '></Image>
         <Image src={c3} className='h-[12vh] c w-[3.7vw] absolute right-[4%] bottom-[2%] scale-[1.2] rotate-[127deg]  '></Image>
  

        <div className='absolute bottom-[24%] pgcap1  h-[6vh] z-10  overflow-hidden  text-[#838386] scale-y-[1.8] text-[15px] scale-x-[1.4] right-[15%]'>
        <div  >
        <h1>Savor the smooth, balanced flavor of Colombian <br></br> Supremo with sweet, nutty and chocolate.</h1>
        </div>       
        </div>

        <div className='absolute bottom-[14%] pgcap2  h-[6vh] opacity-0 -z-10 overflow-hidden  text-[#838386] scale-y-[1.8] text-[15px] scale-x-[1.4] right-[13%]'>
            <h1>A chilled blend of coffee, ice, and milk, topped <br></br> with whipped cream and drizzled with sweet syrup.</h1>
        </div>

        <div className='absolute bottom-[24%] pgcap3  h-[6vh] z-10  overflow-hidden  text-[#838386] scale-y-[1.8] text-[15px] scale-x-[1.4] right-[-35%]'>
        <div  >
        <h1>A harmonious balance of strong espresso and soft, <br></br>  foamy milk, cappuccino is the coffee lover’s dream.</h1>
        </div>       
        </div>

        <div className='absolute bottom-[14%] pgcap4  h-[6vh] opacity-0 -z-10 overflow-hidden  text-[#838386] scale-y-[1.8] text-[15px] scale-x-[1.4] right-[-33%]'>
            <h1>Cappuccino offers a rich, full-bodied coffee experience     <br></br> with a light airy foam that’s pure perfection in every sip..</h1>
        </div>
        
       <div class="wrapper">
        <div class="wrapper">
        <span class="letter letter1">E</span>
        <span class="letter letter2">S</span>
        <span class="letter letter3">P</span>
        <span class="letter letter4">R</span>
        <span class="letter letter5">E</span>
        <span class="letter letter6">S</span>
        <span class="letter letter7">S</span>
        <span class="letter letter8">O</span>
        <span class="letter letter9"></span>
        <span class="letter letter10">Y</span>
        <span class="letter letter11">O</span>
        <span class="letter letter12">U</span>
        <span class="letter letter13">R</span>
        <span class="letter letter14">S</span>
        <span class="letter letter15">E</span>
        <span class="letter letter16">L</span>
        <span class="letter letter17">F</span>
        <span class="letter letter18"></span>
        <span class="letter letter19">T</span>
        <span class="letter letter20">O</span>
        <span class="letter letter21">D</span>
        <span class="letter letter22">A</span>
        <span class="letter letter23">Y</span>
        <span class="letter letter24"> </span>
        </div>
        </div>
        
        <div className='cir1 rounded-full h-[40vh] w-[40vh]  z-[-1] scale-0 opacity-[.2] bg-transparent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[#4A3933] border-[.01px] '>
        </div>

        <div className='cir2 rounded-full h-[40vh] w-[40vh]  z-[-1] scale-[0] opacity-[.2] bg-transparent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[#4A3933] border-[.01px] '>
        </div>
        <div className='cir3 rounded-full h-[40vh] w-[40vh]  z-[-1] scale-[0] opacity-[.2] bg-transparent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[#4A3933] border-[.01px] '>
        </div>      
        <div className='cir6 rounded-full h-[40vh] w-[40vh]  z-[-1] scale-[0] opacity-[.2] bg-transparent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[#1f1e1e] border-[.01px] '>
        </div>
        <div className='cir7 rounded-full h-[40vh] w-[40vh]  z-[-1] scale-[0] opacity-[.2] bg-transparent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[#1f1e1e] border-[.01px] '>
        </div>
        <div className='cir8 rounded-full h-[40vh] w-[40vh]  z-[-1] scale-[0] opacity-[.2] bg-transparent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-[#1f1e1e] border-[.01px] '>
        </div>
        
 
    

    
    
   {/* page2 */}


   <Image 
  src={t2} 
  className='h-[67vh] t1 w-[13vw]   absolute top-[17%] left-[-23.5%] scale-[1.11] z-10' 
  style={{ filter: 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))' }} 
/>

    <div className='h-[1vh] absolute r1 left-10 w-[3vw]  scale-[.7] rounded-lg bottom-[10%] rotate-90 border-[#1f1e1e] border-[.01px] '></div>
 
      
     <div className='h-[1vh] w-[3vw] r2 absolute left-10 scale-[.7] bottom-[10%] rounded-lg   border-[#1f1e1e] border-[.01px]  '></div>

      </div>


    {/* page3 */}


      <div className="mmd h-[105vh] w-[100vw] overflow-hidden">

      <div className='vidiv   h-[100vh] w-[100vw] overflow-hidden'> 
        <div className=" h-[90vh] w-[90vw] overflow-hidden video  absolute mx-[5%] my-[3%] rounded-3xl scale-[1.2]  ">
            <video autoPlay loop muted playsInline   >
            <source src={vid} type="video/mp4" />           
            </video>
        </div>


         {/* <Image src={p6} className=' vv h-[30vh]  w-[8vw] absolute right-[24%] bottom-[-10%]    '></Image> */}
        
            <video autoPlay loop muted playsInline  className=" vv h-[50vh] w-[10vw] overflow-hidden   absolute  bottom-[-73%] left-[10%] " >
            <source src={vid1} type="video/mp4" />           
            </video>

            <video autoPlay loop muted playsInline  className=" vv h-[50vh] w-[10vw] overflow-hidden   absolute  bottom-[-100%] left-[10%] " >
            <source src={vid2} type="video/mp4" />           
            </video>

            <video autoPlay loop muted playsInline  className=" vv h-[50vh] w-[10vw] overflow-hidden scale-[2.1]  absolute    bottom-[-87%] right-[10%] " >
            <source src={vid3} type="video/mp4" />           
            </video>


            
            <div class="card absolute bottom-2 right-0">
            <div class="loader">
                <p>STARBUCKS</p>
                <div class="words">
                <span class="word">ESPRESSO</span>
                <span class="word">FRAPPUCCINO</span>
                <span class="word">LATTE</span>
                <span class="word">CAPPUCINO</span>
                <span class="word">MACCHIATO</span>
                
                </div>
            </div>
            </div>             


      

      </div>  
      </div>
    
    {/* page4 */}

 
    </div>


    
    </>
  );
};

export default Land;
