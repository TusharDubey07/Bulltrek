import React, { useState } from 'react';

// Custom dot button component
const DotButton = ({ isActive, onClick }) => (
  <button
    className={`w-2 h-2 rounded-full ${
      isActive ? 'bg-[#FFB366]' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    onClick={onClick}
    aria-label="Navigation dot"
  />
);

// Testimonial Card Component
const TestimonialCard = ({ data, isActive, position }) => {
  // Custom corner rounding based on position
  const cornerClasses = {
    prev: "rounded-tr-3xl rounded-bl-3xl", // Previous card
    current: "rounded-tl-3xl rounded-br-3xl", // Current card
    next: "rounded-tr-3xl rounded-bl-3xl", // Next card
  };

  const baseClasses = `w-72 h-64 p-6 ${
    isActive 
      ? 'bg-[#FFB366] z-10 transform scale-105' 
      : 'bg-[#FFE4CC]'
  } ${cornerClasses[position]}`;

  return (
    <div className={baseClasses}>
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 mb-4 relative">
          <img
            src={data.image}
            alt={data.name}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <h3 className="font-medium mb-2">
          {data.name}
        </h3>
        <p className={`text-sm ${isActive ? 'text-gray-700' : 'text-gray-600'}`}>
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default function TestimonialsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amit.K",
      image: "/images/Testimonial1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla"
    },
    {
      id: 2,
      name: "Saurav.R",
      image: "/images/Testimonial2.png",
      text: "Loredunt justo interdum. Aenean lacinia justo vitae nisl convallis, nec gravida lorem varius. Sed quis tortor ut lacus auctor pulvinar. Curabitur id vulputa"
    },
    {
      id: 3,
      name: "Priya.D",
      image: "/images/Testimonial3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla"
    },
    {
      id: 4,
      name: "John.D",
      image: "/images/Testimonial1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      name: "Sarah.M",
      image: "/images/Testimonial3.png",
      text: "Nullam vehicula urna nec libero fringilla in efficitur."
    }
  ];

  const getPreviousIndex = () => {
    return (activeSlide - 1 + testimonials.length) % testimonials.length;
  };

  const getNextIndex = () => {
    return (activeSlide + 1) % testimonials.length;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Client Testimonials
      </h2>

      <div className="relative">
        {/* Testimonials Display */}
        <div className="flex justify-center items-center gap-14 mb-8">
          {/* Previous Testimonial */}
          <div className="hidden md:block">
            <TestimonialCard
              data={testimonials[getPreviousIndex()]}
              isActive={false}
              position="prev"
            />
          </div>

          {/* Current Testimonial */}
          <TestimonialCard
            data={testimonials[activeSlide]}
            isActive={true}
            position="current"
          />

          {/* Next Testimonial */}
          <div className="hidden md:block">
            <TestimonialCard
              data={testimonials[getNextIndex()]}
              isActive={false}
              position="next"
            />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <DotButton
              key={index}
              isActive={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}