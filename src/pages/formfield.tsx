// src/pages/formfield.tsx
import React from "react";
import "../app/globals.css";
import { useState } from "react";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";



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
  const [name, setName] = useState('');
  const [error, setError ] = useState('');

  const totalSteps = 3;
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep === 1 && !name) {
      setError("Name is required to proceed.");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };


  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };
   const handlenameChange = (e: React.ChangeEvent <HTMLInputElement> ) => {
    const input = e.target.value
     setName(input)
     const namePattern = /^[A-Za-z\s]+$/;
      if (!input.match(namePattern)) {
        setError(" The Input only accept letters and spaces not figures or characters ")
      }
      else(
        setError(" ")
      )
   }



   const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div>
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
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="mb-4">
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
          <div>
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
      default:
        return null;
    }
  }; 
  return (

    <section className="container overflow-x-clip bg-gradient-to-l from-[#fff] to-[#cff] py-24 ">
    <div className=" mt-5 bg-white/50  flex justify-center items-center flex-col  rounded-l-md">
      <h1 className=" text-3xl  mb-6 mt-6  section-title py-4">Get started with our intuitive Productive app</h1>
      <Stepper currentStep={currentStep} />
      <form className=" p-8 rounded-lg  w-full max-w-md">
     
        
       
       

        {renderStepContent(currentStep)}
        <div className="flex justify-between py-4 ">
        {currentStep > 1 && (
        <button
          type="submit"
          className="btn btn-primary  "
        >
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
  );
};

export default FormField;
