export default function Strategies() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-medium text-center mb-16">Our Strategies</h1>
        
        <div className="flex flex-col lg:flex-row gap-52 items-start">
          {/* Left Column - Strategy List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* Growth DCA - Expanded */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M20 20H4V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 16L12 8L16 12L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-lg font-medium">Growth DCA</h3>
                </div>
                <button className="p-2">
                  <svg className="w-4 h-4 transform rotate-180" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula 
                urna nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. 
                Donec facilisis magna vel velit iaat felis eu orci consectetur consequat 
                ut in est.
              </p>
            </div>
  
            {/* Other Strategy Items - Collapsed */}
            {[
              { icon: "∞", title: "Human Grid" },
              { icon: "⊞", title: "Smart Grid" },
              { icon: "⬚", title: "Indy UTC" },
              { icon: "◯", title: "Indy Trend" },
              { icon: "□", title: "Indy LESI" },
              { icon: "↕", title: "Price Action" },
              { icon: "⚙", title: "Customize it" }
            ].map((strategy, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{strategy.icon}</span>
                    <h3 className="text-lg font-medium">{strategy.title}</h3>
                  </div>
                  <button className="p-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
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
    )
  }
  
  