// components/PricingSection.js
import React from 'react';
import PricingCard from '../PricingCard/PricingCard'

const pricingPlans = [
  { title: 'Basic', description: 'Ideal for small businesses', price: '$99/mo', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  // Add more pricing plans as needed
];

const PricingSection = () => {
    return (
       
        <div className="relative grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <div className="absolute inset-0 bg-red-500 transform -skew-y-12 w-full h-full"></div>
        <div class="container mx-auto">
        <div class="flex justify-center">
        <div class="w-full z-50 pt-20 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 text-center text-zinc-50">
            <h2 class="text-4xl font-bold mb-4 md:mb-5">We offer great pricing plans for everyone.</h2>
            <hr class="w-1/2 mx-auto border-t border-gray-400 mb-5 xl:mb-9" />
        </div>
        </div>
        </div>
        <div className="relative max-w-7xl mx-auto pt-20  px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
      
    );
  };
  
  export default PricingSection;
