'use client'
import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import Cylindercog from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { easeInOut, motion, useScroll,useTransform, useMotionValueEvent  } from "framer-motion";
import { useRef } from "react";
import { use } from "framer-motion/m";

export const Hero = () => {
 const heroRef = useRef(); 
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset:["start end" , "end start"]
  });
  const translateY = useTransform(
    scrollYProgress, [0,1], [150, -150]
  )
  // useMotionValueEvent(
  //   scrollYProgress, 'change', (latestValue) => console.log(latestValue)
  // )
  return (
<section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 custom-radial overflow-x-clip">
  <div className="container">
     <div className="md:flex items-center">
      <div className="md:w-[478px]">
      <div className=" tag">
      Version 2.0 is here 
      </div>
        
        <h1  className="text-5xl md:text-7xl tracking-tighter font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">Pathway to productivity </h1>
        <p className="text-xl text-[#010d3e] tracking-tight mt-6 ">Celebrate the joy of your accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your success </p>
       <div  className="flex gap-1 mt-[30px] items-center ">
        <button className="btn btn-primary"> Get for Free</button>
        <button className="btn btn-text gap-1 flex"> <span>Learn more </span>
          <ArrowIcon className=" h-5 w-5"/>
        </button>
       </div>
      </div>

      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
       <motion.img
       src={ CogImage.src} 
       alt=" cog image" 
       className="md:absolute md:h-full md:w-auto  md:max-w-none md:-left-6  lg:left-0"
       animate ={{
        translateY:[-30, 30],
       }}
       transition={{
        repeat:Infinity,
        repeatType:"mirror",
        duration:3,
        ease:easeInOut,
       }}
       />
       <motion.img 
       src={ Cylindercog.src}
       alt =" cyclinder image "
       width={220}
       height={220}
       className="hidden md:block -top-8 -left-32 md:absolute "
       style={
        {
translateY:translateY
        }
       }
       />
       <motion.img 
       src={noodleImage.src}
       alt="noodleimage"
       width={220}
       className="hidden lg:block absolute top-[542px] left-[448px] rotate-[30deg]"
       style={
        {
          translateY:translateY,
          rotate:30,
        }
       }
       />
      </div>
      </div>
     </div>
 
</section>
  )
};


