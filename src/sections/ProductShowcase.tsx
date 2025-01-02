"use client"
import productImage from "@/assets/product-image.png"
import Image from "next/image"
import pyramidImage from  "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import {motion, useScroll, useTransform  } from "framer-motion"
import { useRef } from "react"
export const ProductShowcase = () => {
  const sectionRef = useRef(null)
   const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset: ["start end" , "end start"]
  })

  const translateY = useTransform (
    scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={sectionRef} className=" background-section  ">
      <div className="container">
        <div className=" section-heading ">
        <div className="flex justify-center">
<div className="tag">
  Boost your Productivity 
</div>
</div>
<h2 className=" section-title mt-5">A more effective way to track your progress </h2>
<p className="sectin-description mt-5 ">Effortlessly turn your ideas into a fully functionnal, responsive, SaaS website in just minutes with this templates
   </p>
   </div>
   <div className="relative">
   <Image
   src={productImage}
   alt="productimage "
   className="mt-10 "
   loading="eager"
   />

  <motion.img
  src={pyramidImage.src}
  alt="pyramid image"
  height={262}
  loading="eager"
  width={262}
  className=" hidden md:block absolute -right-36 -top-32 "
  style={
    {
      translateY:translateY
    }
  }
  />
<motion.img
src={tubeImage.src}
alt="tube image"
 loading="eager"
height={248}
className=" hidden md:block absolute  bottom-24 -left-36 "
style={{
  translateY:translateY
}}
/>
   </div>
      </div>
    </section>
  )
};
