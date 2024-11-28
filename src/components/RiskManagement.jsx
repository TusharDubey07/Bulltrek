import React from 'react';

// Simple InfoIcon component to replace lucide-react
const InfoIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

// Tooltip component
const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg -top-8 left-1/2 transform -translate-x-1/2">
          {content}
        </div>
      )}
    </div>
  );
};

// Select component
const Select = ({ options, placeholder }) => {
  return (
    <select className="w-24 px-3 py-2 bg-white text-black rounded-md border border-gray-300">
      <option value="" disabled selected>{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default function RiskManagement() {
  const currencyOptions = [
    { value: 'ustd', label: 'USTD' },
    { value: 'usdc', label: 'USDC' },
    { value: 'busd', label: 'BUSD' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-4xl bg-black text-white rounded-lg shadow-xl p-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-normal">Risk Management</h2>
        </div>

        <div className="space-y-8">
          {/* Top Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Investment CAP */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>Investment CAP</span>
                <Tooltip content="Information about Investment CAP">
                  <button className="text-gray-400">
                    <InfoIcon />
                  </button>
                </Tooltip>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Value" 
                  className="flex-1 px-3 py-2 bg-white text-black rounded-md"
                />
                <Select options={currencyOptions} placeholder="USTD" />
              </div>
              <h3 className="text-lg font-semibold">Investment CAP</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec
                libero fringilla, in
              </p>
            </div>

            {/* Stop Loss */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>Stop Loss By</span>
                <Tooltip content="Information about Stop Loss">
                  <button className="text-gray-400">
                    <InfoIcon />
                  </button>
                </Tooltip>
              </div>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Value" 
                  className="w-full px-3 py-2 bg-white text-black rounded-md pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">%</span>
              </div>
              <h3 className="text-lg font-semibold">Stop Loss</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. cidunt justo interdum.
                Asuscipit elit gravNu
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book Profit */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>Book Profit By</span>
                <Tooltip content="Information about Book Profit">
                  <button className="text-gray-400">
                    <InfoIcon />
                  </button>
                </Tooltip>
              </div>
              <input 
                type="text"
                placeholder="Value" 
                className="w-full px-3 py-2 bg-white text-black rounded-md"
              />
              <h3 className="text-lg font-semibold">Take Profit Levels</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna nec
                libero fringilla, ot.
              </p>
            </div>

            {/* Entry Interval */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>Entry Interval</span>
                <Tooltip content="Information about Entry Interval">
                  <button className="text-gray-400">
                    <InfoIcon />
                  </button>
                </Tooltip>
              </div>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Value" 
                  className="w-full px-3 py-2 bg-white text-black rounded-md pr-12"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">Pts</span>
              </div>
              <h3 className="text-lg font-semibold">Entry and Exit Levels</h3>
              <p className="text-gray-400">
                Lro fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec facilisis
                magna veorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}