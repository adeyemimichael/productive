import { Pricing } from "@/sections/Pricing";
import  { Header } from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
export default function Home () {
    return (
    <div>  
        <Header />
           <Hero/>
           <LogoTicker/>
           <ProductShowcase/>
           <Pricing/> 
            <Testimonials/>
            <CallToAction/>
            <Footer/>
    </div>
    )
};