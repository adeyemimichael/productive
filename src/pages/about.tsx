import React from "react";
import Link from "next/link";   
import "../app/globals.css"; 
const About = () => {
  return (
    <div className="container bg-gradient-to-l from-[#fff] py-24">
      <div className="bg-white/50 p-8 rounded-lg">
        <h1 className="text-3xl mb-6">About Us</h1>
        <p className="mb-4 text-gray-700">
          We are a forward-thinking company, dedicated to creating innovative solutions that impact the world. Our mission is to deliver exceptional products and services that provide value to our customers and contribute to the betterment of society.
        </p>
        <p className="mb-4 text-gray-700">
          Our team is made up of talented and passionate individuals, each bringing unique perspectives and expertise to the table. We believe in collaboration and continuously seek to push the boundaries of what's possible.
        </p>
        <p className="mb-4 text-gray-700">
          Whether you're a customer, partner, or team member, we value your input and are excited to work with you to create meaningful impact.
        </p>
        <div className="mt-6">
          <Link href="/">
        Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
