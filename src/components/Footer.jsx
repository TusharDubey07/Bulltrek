import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaChevronDown } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#1F2630] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Legal Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  User Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
          <div className="flex space-x-4 mb-4">
    <a href="#" className="hover:text-gray-300">
      <FaInstagram className="h-6 w-6" />
    </a>
    <a href="#" className="hover:text-gray-300">
      <FaLinkedin className="h-6 w-6" />
    </a>
    <a href="#" className="hover:text-gray-300">
      <FaTwitter className="h-6 w-6" />
    </a>
    <a href="#" className="hover:text-gray-300">
      <FaFacebook className="h-6 w-6" />
    </a>
  </div>
            <p className="mb-2">bulltrek@gmail.com</p>
            <p>+91 1234567891</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
  {/* Newsletter Subscription */}
  <div className="flex-1">
    <h3 className="text-lg mb-4">Subscribe to never miss updates</h3>
    <div className="relative max-w-md">
      <input
        type="email"
        placeholder="Enter mail"
        className="w-full bg-white text-black p-2 rounded-full pr-32"
      />
      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FF6B00] hover:bg-[#FF6B00]/90 px-4 py-1.5 text-white rounded-full">
        Subscribe
      </button>
    </div>
  </div>

  {/* Download Section */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div>
      <h3 className="text-xl mb-4">Download from</h3>
      <div className="flex space-x-4">
        <a href="#">
          <img
            src="/images/appstore.png"
            alt="Download on the App Store"
            className="h-10"
          />
        </a>
        <a href="#">
          <img
            src="/images/googleplay.png"
            alt="Get it on Google Play"
            className="h-10"
          />
        </a>
      </div>
    </div>
    <div>
      <p className="text-center mb-2">Or Scan QR below</p>
      <img
        src="/images/QR Code.png"
        alt="QR Code"
        className="bg-white p-2 w-[100px] h-[100px]"
      />
    </div>
  </div>
</div>

        {/* Brokers Section */}
        <div className="mb-8">
  
    <div className="flex items-center gap-2">
      <h3 className="text-xl font-semibold">Brokers</h3>
      <FaChevronDown className="text-gray-400 w-4 h-4" />
    </div>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      "Binance",
      "Bybit Trading",
      "Coinbased Advance",
      "Karen",
      "Bitfinex",
      "Lorem Ipsum",
    ].map((broker, index) => (
      <a key={index} href="#" className="hover:text-gray-300">
        {broker}
      </a>
    ))}
  </div>
</div>
<div className="border-t border-gray-600 my-8 mx-4"></div>

        {/* Disclaimer */}
        <div>
          <h3 className="font-semibold mb-4">Disclaimer</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula urna nec libero fringilla, in tincidunt justo interdum.
            Aenean lacinia justo vitae nisl convallis, nec gravida lorem varius.
            Sed quis tortor ut lacus auctor pulvinar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;