import React from "react";

const CTABanner = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-[#FFAE53] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between px-20 h-[200px]">
        <div className="max-w-lg">
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna
            nec libero fringilla.
          </p>
          <button className="bg-[#4B2800] hover:bg-[#FF6B00]/90 text-white px-4 py-2 rounded w-72 ">
            Get Started
          </button>
        </div>
        <img
          src="/images/CTA.png"
          alt="CTA illustration"
          className="w-[250px] h-[250px]"
        />
      </div>
    </section>
  );
};

export default CTABanner;