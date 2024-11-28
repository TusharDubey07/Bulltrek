import React, { useState } from "react";
import Header from "./Header";
import { IoMdClose } from "react-icons/io";

import ChatInterface from "../components/ChatInterface"; // Import the modal component

const RenderImages = ({ imageUrl, count }) => {
  return (
    <div className="flex gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <img 
          key={index} 
          src={imageUrl} 
          alt={`Rendered ${index}`} 
          className="w-[121px] h-[41px] object-contain mr-20"
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

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
              <span className="text-[#F59120]">Future</span> of Trading
            </h1>

            <div className="flex items-center gap-4 text-sm md:text-base text-gray-600">
            <span className="w-2 h-2 rounded-full bg-[#F59120]" />
              <span>Precision</span>
              <span className="w-2 h-2 rounded-full bg-[#F59120]" />
              <span>Performance</span>
              <span className="w-2 h-2 rounded-full bg-[#F59120] " />
              <span>Profitability</span>
            </div>

            <button className="bg-[#F59120] text-white hover:bg-[#FF6B00]/90 px-8  text-lg rounded-lg w-[256px] h-[47px]  self-center">
              Get Started
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-4/5 h-4/5  rounded-full opacity-20 blur-3xl "  />
            <div className="relative bg-gradient-to-br from-[#F59120] to-[#EDDDCA] rounded-full	w-[800px]">
              <img
                src="/images/Wood-Hand (1).png"
                alt="Trading app interface"
                className="mx-auto w-[400px] h-[800px]"
              />

              {/* Chat Overlay */}
              <div className="absolute top-1/4 right-0 bg-white rounded-lg shadow-lg p-4 w-72">
              <div className="flex items-center gap-3">
                  <div className="bg-[#FF6B00]/10 p-2 rounded-lg">
                  <img
                src="/images/Message Bot.png"
                alt="Trading app interface"
                className="mx-auto w-[30px] h-[30px]"
              />
                  </div>
                  <div>
                    <p className="font-medium">Multiple Strategy Bots</p>
                    <p className="text-sm text-gray-500">
                      Customize as you wish
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategy Bots Card */}
              <div className="absolute bottom-1/3 -left-8 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FF6B00]/10 p-2 rounded-lg">
                  <img
                src="/images/Message Bot.png"
                alt="Trading app interface"
                className="mx-auto w-[30px] h-[30px]"
              />                  </div>
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
        <div className="mt-32 ml-10">
              <RenderImages 
        imageUrl="/images/image 1.png" 
        count={7} // Replace 5 with the number of times you want to render the image
      />
              </div>
      </div>
      <button
        onClick={toggleModal}
        className="fixed bottom-4 right-4 bg-[#F59120] text-white rounded-full p-4 shadow-lg hover:bg-[#FF6B00]/90"
      >
           <img
                src="/images/Message.png"
                alt="Trading app interface"
                className="mx-auto w-[50px] h-[40px]"
              />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 rounded-full"
            > <IoMdClose size={'20px'} className="z-10" />

            </button>
            <ChatInterface  />
          </div>
        </div>
      )}
    </div>
  );
}
