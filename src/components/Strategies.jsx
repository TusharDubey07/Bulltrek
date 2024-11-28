import React, { useState } from "react";

export default function Strategies() {
  // State to track the expanded strategy
  const [expanded, setExpanded] = useState(null);

  // List of strategies
  const strategies = [
    { id: 1, icon: "∞", title: "Growth DCA", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 2, icon: "∞", title: "Human Grid", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 3, icon: "⊞", title: "Smart Grid", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 4, icon: "⬚", title: "Indy UTC", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 5, icon: "◯", title: "Indy Trend", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 6, icon: "□", title: "Indy LESI", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 7, icon: "↕", title: "Price Action", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
    { id: 8, icon: "⚙", title: "Customize it", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis magna vel velit iaat felis eu orci consectetur consequat ut in est." },
  ];

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-medium text-center mb-16">Our Strategies</h1>

      <div className="flex flex-col lg:flex-row gap-52 items-start">
        {/* Left Column - Strategy List */}
        <div className="w-full lg:w-1/2 space-y-4">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{strategy.icon}</span>
                  <h3 className="text-lg font-medium">{strategy.title}</h3>
                </div>
                <button
                  className="p-2"
                  onClick={() => toggleExpand(strategy.id)}
                >
                  <svg
                    className={`w-4 h-4 transform ${
                      expanded === strategy.id ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {expanded === strategy.id && (
                <p className="mt-4 text-gray-600">{strategy.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Mobile App Preview */}
        <div className="w-auto">
          <div className="bg-[#FFE4CC] p-4 rounded-3xl px-4">
            <img
              src="/images/Strategy 9.png"
              alt="Trading app interface"
              className="mx-auto w-[267.16px] h-[598.16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
