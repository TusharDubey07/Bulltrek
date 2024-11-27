import React from "react";
import { Flag, Sprout } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-medium text-center mb-12">
        Mission and Vision
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission Card */}
        <div className="relative rounded-lg overflow-hidden border p-1" 
             style={{ 
               background: 'linear-gradient(to right, #440618, #F6921E)',
             }}>
          <div className="bg-white rounded-lg h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-orange-200/20" />
            <div className="p-8 text-center relative space-y-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center">
                <Flag className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower individuals to take back control of their health. We
                achieve this by providing evidence-based knowledge, personalised support, and the
                tools you need to thrive, not just manage your condition.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative rounded-lg overflow-hidden border p-1"
             style={{ 
               background: 'linear-gradient(to right, #440618, #F6921E)',
             }}>
          <div className="bg-white rounded-lg h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-orange-200/20" />
            <div className="p-8 text-center relative space-y-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h2 className="text-xl font-semibold">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where chronic health conditions no longer limit your potential- a
                future where individuals are equipped with the knowledge and skills to manage their
                health and live fulfilling lives, free from the burden of medications and complications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;