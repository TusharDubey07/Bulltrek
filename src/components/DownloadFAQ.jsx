import React, { useState } from 'react';

// Simple Plus icon component
const PlusIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// Simple Minus icon component
const MinusIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// FAQ Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-normal">{question}</span>
        <span className="shrink-0 ml-6">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function DownloadFAQ() {
  const faqItems = [
    {
      question: "How does the BullTrek work?",
      answer: "The marketplace provides a curated selection of products and services. Employees can browse and purchase directly through the platform."
    },
    {
      question: "How do I sign up for BullTrek?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla."
    },
    {
      question: "Can I customize the BullTrek Dashboard?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla."
    },
    {
      question: "Can I try BullTrek before I subscribe?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Download Section */}
      <section className="bg-black rounded-2xl p-8 mb-16 relative overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl mb-6">Download from</h2>
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="hover:opacity-90">
              <img
                src="/images/appstore.png"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-90">
              <img
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/images/QR Code.png"
              alt="Download QR Code"
              className="w-[100px] h-[100px] rounded-lg"
            />
          </div>
        </div>
        
        {/* Device Mockups */}
        <div className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#61001D]/20 to-transparent rounded-lg" />
          <img
            src="/images/DownloadFAQ.png"
            alt="BullTrek platform interface on devices"
            className="object-contain w-full h-full"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently asked Questions
        </h2>
        <div className="w-full font-bold">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}