
import React from 'react';
import CTABanner from '../components/CTABanner';
import BrokerLinks from '../components/BrokerLinks';
import Steps from '../components/Steps';

const Broker = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="space-y-6 mb-12">
        <h1 className="text-4xl text-center font-bold">Bitstamp Trading Bot</h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nis! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* Image Section */}
      <section className="mb-12">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <img
            src="/images/Broker1.png?height=400&width=800"
            alt="Comfortable gray couch with teal pillows"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="space-y-8 mb-16">
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nis! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nis! Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo
          interdum. Aenean lacinia justo vitae nis!
        </p>
      </section>

      {/* CTA Banner with reduced padding */}
      <div className="-mx-36">
        <CTABanner />
      </div>

      {/* Additional Content */}
      <section className="space-y-6 mb-12">
        <h1 className="text-2xl text-center font-semibold">Bitstamp Trading Bot lorem ipsum dolor sit</h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nis! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* Image Section */}
      <section className="mb-12">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <img
            src="/images/Broker1.png?height=400&width=800"
            alt="Comfortable gray couch with teal pillows"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="space-y-8 mb-16">
      <h1 className="text-xl font-semibold">Bitstamp Trading Bot lorem ipsum dolor sit</h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt
          justo interdum. Aenean lacinia justo vitae nis! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <h1 className="text-xl font-semibold">Bitstamp Trading Bot lorem ipsum dolor sit</h1>
        <p className="text-gray-600 leading-relaxed">
          Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nis! Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo
          interdum. Aenean lacinia justo vitae nis!
        </p>
      </section>

      {/* Image Grid Section */}
      <section className="mb-16 space-y-8 -mx-36">
        <h2 className="text-2xl font-semibold text-center">Bitstamp Trading Bot lorem ipsum dolor sit</h2>
        <div className="grid grid-cols-3 gap-1.5 h-[600px]"> {/* Reduced gap between columns */}
          {/* First Column - 3 images */}
          <div className="flex flex-col gap-1"> {/* Reduced gap between rows */}
            {[...Array(3)].map((_, i) => (
              <div key={`col1-${i}`} className="relative flex-1">
                <img
                  src="/images/Broker3.png?height=300&width=400"
                  alt={`Business network visualization ${i + 1}`}
                  className="object-cover w-full h-full rounded-2xl" /* Added direct rounded corners to image */
                />
              </div>
            ))}
          </div>
          
          {/* Middle Column - 1 image */}
          <div className="relative">
            <img
              src="/images/broker4.png?height=300&width=400"
              alt="Business network visualization middle"
              className="object-cover w-full h-full rounded-2xl" /* Added direct rounded corners to image */
            />
          </div>
          
          {/* Third Column - 2 images */}
          <div className="flex flex-col gap-1.5"> {/* Reduced gap between rows */}
            {[...Array(2)].map((_, i) => (
              <div key={`col3-${i}`} className="relative flex-1">
                <img
                  src="/images/broker5.png?height=300&width=400"
                  alt={`Business network visualization ${i + 7}`}
                  className="object-cover w-full h-full rounded-2xl" /* Added direct rounded corners to image */
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <Steps />
      <section className="mb-6">
        <BrokerLinks />
      </section>
    </div>
  );
};

export default Broker;