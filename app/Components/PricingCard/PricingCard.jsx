// components/PricingCard.js
import React from 'react';

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700 mb-2">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
