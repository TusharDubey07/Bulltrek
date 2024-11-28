
import React from 'react';
import CTABanner from '../components/CTABanner';
import BrokerLinks from '../components/BrokerLinks';

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
      <section className="mb-16 space-y-8 pt-28">
        <h2 className="text-3xl font-bold text-center">Lorem Ipsum Steps</h2>
        <div className="relative flex justify-between items-center px-8">
          <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-100" />
          {[1, 2, 3].map((step) => (
            <div key={step} className="relative flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full ${step === 1 ? 'bg-orange-500' : 'bg-orange-200'} z-10`} />
              <span className="mt-2 text-sm font-medium">Step {step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna 
            nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae 
            convallis, nec gravida lorem varius. Sed quis tortor ut lacus auctor pulvinar. 
            Curabitur id vulputate est. Phasellus ultricies tellus nec erat laborits, sed 
            suscipit elit consequat ut
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <img
            src="/images/Broker2.png?height=400&width=600"
            alt="Laptop showing login interface"
            className="object-contain w-full h-full"
          />
        </div>
      </section>
      <section className="mb-6">
        <BrokerLinks />
      </section>
    </div>
  );
};

export default Broker;