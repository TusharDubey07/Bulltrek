import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    { 
      name: "Mr. Lorem Dolor", 
      role: "Lorem Specialist",
      image: "/src/assets/Team1.png" 
    },
    { 
      name: "Ms. Name Name", 
      role: "Lorem Specialist",
      image: "/src/assets/Team2.png" 
    },
    { 
      name: "Mr. Lorem Dolor", 
      role: "Lorem Specialist",
      image: "/src/assets/Team3.png" 
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisil dolore magna aliqua. Ut enim ad",
      author: "Rahul David",
      role: "Consultant",
      avatar: "/src/assets/Testimonial.png"
    },
    {
      id: 2,
      text: "Second testimonial text here...",
      author: "Jane Smith",
      role: "Manager",
      avatar: "/src/assets/Testimonial.png"
    },
    {
      id: 3,
      text: "Third testimonial text here...",
      author: "John Doe",
      role: "Director",
      avatar: "/src/assets/Testimonial.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg mb-4 mx-auto w-[300px] h-[300px] object-cover"
            />
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-4xl mx-auto px-4 py-12 relative">
        <div className="text-center space-y-8">
          <div className="relative px-12">
            {/* Left quote mark */}
            <span className="absolute left-0 top-0 text-5xl text-[#FF6B00] leading-none">
              "
            </span>
            
            {/* Testimonial text */}
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              {testimonials[currentSlide].text}
            </p>
            
            {/* Right quote mark */}
            <span className="absolute right-0 top-0 text-5xl text-[#FF6B00] leading-none">
              "
            </span>
          </div>

          {/* Author info */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <img
              src={testimonials[currentSlide].avatar}
              alt={testimonials[currentSlide].author}
              className="rounded-full w-[80px] h-[80px]"
            />
            <div className="text-left">
              <h3 className="font-semibold text-lg">
                {testimonials[currentSlide].author}
              </h3>
              <p className="text-gray-600">
                {testimonials[currentSlide].role}
              </p>
            </div>
          </div>

          {/* Navigation lines */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-sm transition-colors ${
                  index === currentSlide ? 'bg-[#40101B]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;