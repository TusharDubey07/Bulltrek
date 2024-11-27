import React from "react";

const GetToKnow = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">GET TO KNOW US</h1>
          <h2 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet, consetetur
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="flex gap-12">
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-gray-600">Lorem Ipsum</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">20k+</h3>
              <p className="text-gray-600">Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/Image.png"
            alt="Laptop showcase"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;