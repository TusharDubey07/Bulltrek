import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover the
              <br />
              <span className="text-[#FF6B00]">Future</span> of Trading
            </h1>

            <div className="flex items-center gap-4 text-sm md:text-base text-gray-600">
              <span>Precision</span>
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span>Performance</span>
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span>Profitability</span>
            </div>

            <button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 px-8 py-6 text-lg rounded">
              Get Started
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#FF6B00] rounded-full opacity-20 blur-3xl" />
            <div className="relative">
              <img
                src="/src\assets\Wood-Hand (1).png"
                alt="Trading app interface"
                className="mx-auto w-[400px] h-[800px]"
              />

              {/* Chat Overlay */}
              

              {/* Strategy Bots Card */}
              <div className="absolute bottom-1/3 -left-8 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF6B00]/10 p-2 rounded-lg">
                    <div className="w-8 h-8 bg-[#FF6B00] rounded-lg" />
                  </div>
                  <div>
                    <p className="font-medium">Multiple Strategy Bots</p>
                    <p className="text-sm text-gray-500">
                      Customize as you wish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
