import React from 'react';
import { Link } from 'react-router-dom';  // Changed from Next.js Link
import BrokerLinks from '../components/BrokerLinks';

const Termscondition = () => {

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

      <BrokerLinks />
    </div>
  );
};

export default Termscondition;