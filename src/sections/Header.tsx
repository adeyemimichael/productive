'use client'
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"
import Link from "next/link";
import {  useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AOS from 'aos';
import "aos/dist/aos.css"
export const Header = () => {

  const [nav, setNav] = useState(true);
  useEffect(() => {
    const storedIsOpen = sessionStorage.getItem('navbarIsOpen');
    if (storedIsOpen !== null ) {
        setNav(JSON.parse(storedIsOpen));
    }
   
}, []);
  const handleNav = () => {
    setNav(!nav);
    sessionStorage.setItem('navbarIsOpen', JSON.stringify(!nav));
}

useEffect(() => {
    AOS.init({})
  } , [])
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
  <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
  <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity </p>
    <div className="inline-flex gap-1 items-center">
     
<p className="bg-black ">
  Get started for free 
</p>
<ArrowRight className=" h-4 w-4 justify-center  inline-flex items-center cursor-pointer hover:h-5 hover:w-5"/>
</div>
  </div>

{/* navbar set up */}
<div className="py-5">
  <div className="container">
    <div className="flex justify-between items-center">
     <Image src={Logo} alt="saas logo" height={40}  width={40}/>
     <section className="hidden md:flex gap-6 items-center text-black/60">
     <Link href="/about">About</Link> 
     <a href="#">Features</a>
     <a href="#">Customers</a>
     <a href="#">Updates</a>
     <a href="#">Help</a>
     <Link href="/formfield"><button className="bg-black text-white font-medium  px-4 py-2 align-items justify-center rounded-lg tracking-tight hover:bg-black/20 hover:text-black ">Get it for free</button></Link>
     </section>

     <div className="md:hidden ">
     <MenuIcon className={`h-5 w-5 cursor-pointer hover:h-6 hover:w-6 ${nav ? '' : 'hidden'}`}
          onClick={handleNav}>
     </MenuIcon>
     
     </div>

     {/* menu list  */}

     <div
        className={`absolute top-14 left-0 w-full bg-[#cff]
         shadow-md p-4 flex flex-col gap-4 items-center transition-transform duration-300 ${
          nav ? 'hidden' : 'block'
        }`}
        
      
      >
        <div className="relative  left-24">
        <AiOutlineClose  onClick={handleNav} className={`h-5 w-5 cursor-pointer hover:h-6 hover:w-6 ${!nav ? '' : 'hidden'}`}
           />
           </div>
        <Link href="/about" onClick={handleNav}>
          About
        </Link>
        <a href="#" onClick={handleNav}>
          Features
        </a>
        <a href="#" onClick={handleNav}>
          Customers
        </a>
        <a href="#" onClick={handleNav}>
          Updates
        </a>
        <a href="#" onClick={handleNav}>
          Help
        </a>
        <Link href="/formfield" onClick={handleNav}>
          <button className="bg-black text-white font-medium px-4 py-2 rounded-lg tracking-tight hover:bg-black/20 hover:text-black">
            Get it for free
          </button>
        </Link>
      </div>
     </div>
  </div>
</div>
  </header>
  );
};