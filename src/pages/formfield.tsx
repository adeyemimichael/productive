// src/pages/formfield.tsx
import React, { useState } from "react";
import "../app/globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
const Stepper = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  return (
    <div className="flex items-center justify-center mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              index + 1 <= currentStep
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-1 ${
                index + 1 < currentStep ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

const FormField = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const totalSteps = 3;

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep === 1 && !name) {
      setError("Name is required to proceed. Kindly Input your name in this Format LastName, Firstname and or Middle name ");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };

  const handlenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setName(input);
    const namePattern = /^[A-Za-z\s]+$/;
    if (!input.match(namePattern)) {
      setError("The input only accepts letters and spaces. Kindly Input your name in this Format LastName, Firstname and or Middle name");
    } else {
      setError("");
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
            <div className=" ">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handlenameChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm font-bold py-2 ">{error}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>
        );
      case 2:
        return (
            <div className="flex flex-col justify-center">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
            
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      case 3:
        return (
            <div>
            <label
              htmlFor="Username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="Username "
              placeholder="Enter your unique Username"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <Header></Header>
    <section className="container bg-gradient-to-l from-[#fff] to-[#cff] py-24">
        
      <div className="bg-white/50 p-8 rounded-lg">
        <h1 className="text-3xl mb-6 section-title ">Get intuitive with your Productivity</h1>
        <Stepper currentStep={currentStep} />
        <form>
          {renderStepContent(currentStep)}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button className="btn btn-secondary" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {currentStep < totalSteps ? (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default FormField;
