import React from 'react';
import { Link } from 'react-router-dom';  // Changed from Next.js Link

const Termscondition = () => {
  const brokerLinks = [
    { name: "Binance", image: "/images/binance.png" },
    { name: "Coinbased Advance", image: "/images/coinbased.png" },
    { name: "Bybit Trading", image: "/images/bybit.png" },
    { name: "Karen", image: "/images/karen.png" },
    { name: "Bitfinex", image: "/images/bitfinex.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6 mb-12">
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo
          interdum. Aenean lacinia justo vitae nisl
        </p>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo
          interdum. Aenean lacinia justo vitae nisl
        </p>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="space-y-6 mb-12">
        <h2 className="text-xl font-semibold">
          Bitstamp Trading Bot lorem ipsum dolor sit
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <h3 className="text-lg font-medium">
          Bitstamp Trading Bot lorem ipsum dolor sit
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

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
              className="w-4 h-4 object-contain" // Adjust size as needed
            />
            {broker.name}
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Termscondition;