import React from "react";

const ChatInterface = () => {
  return (
    <div className="w-[400px] h-[600px] flex flex-col border rounded shadow-lg">
      {/* Chat Header */}
      <div className="flex flex-row items-center justify-between border-b p-4">
        <h2 className="text-lg font-medium">Live Chat</h2>
        <button
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200"
          aria-label="Close chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4">
        <div className="bg-[#FFF5EB] rounded-lg p-4 space-y-2">
          <p className="font-medium">Hey There!</p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea.
          </p>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t p-4">
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            placeholder="Type Here"
            className="flex-1 rounded-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
          />
          <button
            className="h-10 w-10 flex items-center justify-center rounded-full bg-[#FF6B00] hover:bg-[#FF6B00]/90"
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
