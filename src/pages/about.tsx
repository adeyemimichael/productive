"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import "../app/globals.css";
import { Header } from "@/sections/Header";
import ManageIcon from "@/assets/manage-search.svg";
import AOS from 'aos';
import Avater from "@/assets/avatar-1.png"
import Image from "next/image";
import "aos/dist/aos.css"
const About = () => {
  useEffect(() => {
    AOS.init({})
  } , [])
  return (
   <section className="pt-8 pb-20 md:pt-5 md:pb-10 custom-radial overflow-x-clip">

    <Header/>
    <div className=" container h-full ">
      <div className="md:flex items-center">

      
      <div className="md:w-[478px]">
      <h1 className="text-3xl mb-6 section-title" data-aos="zoom-in">About Us</h1>
              <p className="text-xl text-[#010d3e] tracking-tight mt-6"
              
              data-aos="zoom-in"
              data-aos-offset="400"
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-right">We are a forward-thinking company, dedicated to creating
              innovative solutions that impact the world. Our mission is to
              deliver exceptional products and services that provide value to
              our customers and contribute to the betterment of society. Our team
              is made up of talented and passionate individuals, each bringing
              unique perspectives and expertise to the table. We believe in
              collaboration and continuously seek to push the boundaries of
              what's possible. Whether you're a customer, partner, or team
              member, we value your input and are excited to work with you to
              create meaningful impact.
              
              </p>
              <div className="mt-6 text-center">
          <Link href="/" className="btn btn-primary">
            Go Back to Home
          </Link>
        </div>  
    </div>
    
    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <ManageIcon
              alt="Manage Search Icon"
              width={400}
              height={400}
              className="md:absolute md:h-full md:w-auto  md:max-w-none md:-left-6  lg:left-0"
              data-aos="zoom-in-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-right"
            />
          </div>

          
    </div>

    <div className="">
<div className="modal">
<div className="flex flex-wrap items-center justify-center p-6 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={Avater}
          alt="About Us"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our website! We are dedicated to providing exceptional
          services and solutions tailored to meet your needs. Our team works
          tirelessly to ensure you have the best experience possible. Feel free
          to explore and learn more about what we offer!
        </p>
      </div>
    </div>

</div>
    </div>
    </div>
   

   </section>
  );
};

export default About;
