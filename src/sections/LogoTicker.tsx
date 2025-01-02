"use client"
import acmeLogo from "@/assets/logo-acme.png"
import quatumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import Purselogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image";
import {motion }from "framer-motion"
export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
<div className="container">
  <div className="flex  overflow-hidden mask-image-[linear-gradient(to_right,transparent,black,transparent)]  ">
<motion.div className=" flex gap-14 flex-none pr-14  "
animate={
  {
    translateX:"-50%"
  }
}

transition={
  {
    duration:10,
    repeat:Infinity,
    ease:"linear",
    repeatType:"loop"
  }
}>

  <motion.img 
  src={acmeLogo.src}
   alt="acmelogos" 
   loading="eager"
   className="logo-ticker-image"/>
  <motion.img
   src={quatumLogo.src} 
   alt="quatumlogos" 
   loading="eager"
   className="logo-ticker-image" />
  <motion.img 
  src={echoLogo.src} 
  alt="echologos" 
  loading="eager"
  className="logo-ticker-image" />
  <motion.img
   src={celestialLogo.src} 
   alt="celestiallogos"
   loading="eager" 
   className="logo-ticker-image" />
  <motion.img 
  src={Purselogo.src} 
  alt="purselogos" 
  loading="eager"
  className="logo-ticker-image" />
  <motion.img 
  src={apexLogo.src}
   alt="apexlogos"
   loading="eager" 
   className="logo-ticker-image" />
{/* second set of logo for animation# */}

<motion.img 
  src={acmeLogo.src}
   alt="acmelogos" 
   loading="eager"
   className="logo-ticker-image"/>
  <motion.img
   src={quatumLogo.src} 
   alt="quatumlogos"
   loading="eager" 
   className="logo-ticker-image" />
  <motion.img 
  src={echoLogo.src} 
  alt="echologos" 
  loading="eager"
  className="logo-ticker-image" />
  <motion.img
   src={celestialLogo.src} 
   alt="celestiallogos" 
   loading="eager"
   className="logo-ticker-image" />
  <motion.img 
  src={Purselogo.src} 
  alt="purselogos" 
  loading="eager"
  className="logo-ticker-image" />
  <motion.img 
  src={apexLogo.src}
   alt="apexlogos" 
   loading="eager"
   className="logo-ticker-image" />

</motion.div>
</div>
</div>

    </div>
  )
};
