import React from "react";

const StorySection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Story of Builtrek</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center px-28">
        <img
          src="/images/storysection.png"
          alt="Office interior"
          className="rounded-lg w-full h-auto"
        />
        <div className="space-y-6">
          <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl 
          </p>
          <p className="text-gray-600">
            Nullam vehicula urna nec libero fringilla...
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;