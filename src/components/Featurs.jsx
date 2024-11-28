import React, { useState } from "react";

export default function Features() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Backtesting");

  // Content for each tab
  const tabContent = {
    Backtesting: {
      title: "Backtesting Features",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna
        nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl
        convallis, nec gravida lorem varius. Sed quis tortor ut lacus auctor pulvinar.
        Curabitur id vulputate est. Phasellus ultricies tellus nec erat lobortis, sed
        suscipit elit consequat ut.
      `,
    },
    Tools: {
      title: "Trading Tools",
      description: `
        Vivamus fermentum, ipsum a feugiat varius, augue massa volutpat quam, vel
        venenatis lacus felis vitae ligula. Aliquam erat volutpat. Proin sed quam
        volutpat, scelerisque lorem eget, condimentum sapien.
      `,
    },
    MarketPlace: {
      title: "Market Place Overview",
      description: `
        Discover new markets and opportunities. Sed auctor, ligula ut consectetur
        scelerisque, turpis lorem tincidunt libero, quis dapibus purus magna vel
        tortor. Integer id mi in odio fermentum placerat.
      `,
    },
    CopyTrading: {
      title: "Copy Trading Made Easy",
      description: `
        Follow top traders and replicate their success. Etiam non sapien vel nisi
        vulputate convallis sed vel ligula. Donec tincidunt tristique ligula, vel
        sodales odio bibendum sed.
      `,
    },
  };

  return (
    <div className="w-full min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center mb-16">Our Features</h1>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center border-b relative">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`px-8 py-3 rounded-lg font-medium ${
                activeTab === tab ? "text-white bg-[#F59120]" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto ">
        <div className="bg-black rounded-3xl relative overflow-hidden p-36">
          <div className="max-w-xl relative z-10 ">
            <h2 className="text-3xl font-bold text-white mb-6 mr-14">
              {tabContent[activeTab].title}
            </h2>
            <p className="text-gray-300 mb-8">{tabContent[activeTab].description}</p>
            <button className="px-8 py-3 bg-[#F59120] text-white rounded-lg font-medium">
              Learn More
            </button>
          </div>

          {/* Decorative Image */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <img
              src="/images/Features.png"
              alt="Trading app interface"
              className="mx-auto w-[600px] h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
