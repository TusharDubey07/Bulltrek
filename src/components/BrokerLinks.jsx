import React from 'react';
import { Link } from 'react-router-dom';

const BrokerLinks = () => {
  const brokerLinks = [
    { name: "Binance", image: "/images/binance.png" },
    { name: "Coinbased Advance", image: "/images/coinbased.png" },
    { name: "Bybit Trading", image: "/images/bybit.png" },
    { name: "Karen", image: "/images/karen.png" },
    { name: "Bitfinex", image: "/images/bitfinex.png" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center">
        More Broker Pages
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {brokerLinks.map((broker, index) => (
          <Link 
            key={index}
            to="#" 
            className="flex items-center gap-2 text-gray-600 hover:text-[#FF6B00]"
          >
            <img 
              src={broker.image} 
              alt={broker.name}
              className="w-4 h-4 object-contain" 
            />
            {broker.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrokerLinks;