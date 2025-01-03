'use client'
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"
import Link from "next/link";
export const Header = () => {
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
     <MenuIcon className=" h-5 w-5 cursor-pointer hover:h-6 hover:w-6 md:hidden" />

     <nav className="hidden md:flex gap-6 items-center text-black/60">
     <Link href="/about">About</Link> 
     <a href="#">Features</a>
     <a href="#">Customers</a>
     <a href="#">Updates</a>
     <a href="#">Help</a>
     <Link href="/formfield"><button className="bg-black text-white font-medium  px-4 py-2 align-items justify-center rounded-lg tracking-tight hover:bg-black/20 hover:text-black ">Get it for free</button></Link>
     </nav>
     </div>
  </div>
</div>
  </header>
)};
 