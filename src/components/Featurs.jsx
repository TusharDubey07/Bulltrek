export default function Features() {
    return (
      <div className="w-full min-h-screen bg-white p-8">
        <h1 className="text-4xl font-bold text-center mb-16">Our Features</h1>
        
        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center border-b relative">
            <button className="px-8 py-3 text-white bg-[#E69849] rounded-lg font-medium">
              Backtesting
            </button>
            <button className="px-8 py-3 text-gray-600 font-medium">
              Tools
            </button>
            <button className="px-8 py-3 text-gray-600 font-medium">
              Market Place
            </button>
            <button className="px-8 py-3 text-gray-600 font-medium">
              Copy Trading
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-3xl p-12 relative overflow-hidden">
            <div className="max-w-xl relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Lorem Ipsum Dolor Sit
              </h2>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna
                nec libero fringilla, in tincidunt justo interdum. Aenean lacinia justo vitae nisl
                convallis, nec gravida lorem varius. Sed quis tortor ut lacus auctor pulvinar.
                Curabitur id vulputate est. Phasellus ultricies tellus nec erat lobortis, sed
                suscipit elit consequat ut
              </p>
              <p className="text-gray-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna
                nec libero fringilla, in tincidunt justo interdum. Asuscipit elit gravida. Donec
                facilisis magna vel velit iaculis, ac pharetra leo aliquam. Nam interdum enim in
                nunc volutpat convallis. Vivamus at felis eu orci consectetur consequat ut in
              </p>
              <button className="px-8 py-3 bg-[#E69849] text-white rounded-lg font-medium">
                Learn More
              </button>
            </div>
  
            {/* Decorative Image */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="relative w-[400px] h-[300px]">
                <div className="absolute top-0 right-0">
                  <div className="w-48 h-24 bg-white/10 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2">
                  <div className="w-64 h-40 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10" />
                </div>
                <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-[#E69849]/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#ff9bd7] flex items-center justify-center text-white font-bold">
                      ₿
                    </div>
                  </div>
                </div>
                <div className="absolute -left-4 top-1/4">
                  <div className="w-16 h-16 rounded-full bg-[#E69849]/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#98ff9b] flex items-center justify-center text-white font-bold">
                      Ξ
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-8">
                  <div className="w-16 h-16 bg-[#E69849]/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  