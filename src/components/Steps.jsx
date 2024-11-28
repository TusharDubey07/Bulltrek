import React from 'react';

const Steps = () => {
  return (
    <>
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
    </>
  );
};

export default Steps;