import React from "react";
import { MessageSquare, Mail, MessageCircle, MapPin, Phone, Clock } from "lucide-react";
// Remove Contact from import as it conflicts with component name

const ContactPage = () => {  // Renamed from Contact to ContactPage
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-medium text-center mb-8">
        We've got a whole team dedicated to support you
      </h1>
      <img
            src="/src\assets\Chat dialog with support service.png"
            alt="Support illustration"
            className="mx-auto mb-8 w-[300px] h-[300px]"
          />

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 space-y-6">

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-2">
                First Name
              </label>
              <input
                id="firstName"
                placeholder="First Name"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                placeholder="Last Name"
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email ID"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 | Enter Number"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Leave us a message"
              className="w-full min-h-[120px] border rounded-md p-2"
            />
          </div>

          <button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white py-2 rounded-md">
            Send Message
          </button>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-12">
          {/* Call Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Us
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                Call our team Mon-Fri from 09:00 AM to 06:00 PM
              </div>
              <p className="font-medium">+91 1234567891</p>
            </div>
          </div>

          {/* Chat with us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Chat with us
            </h2>
            <p className="text-gray-600 mb-4">Speak to our team via live chat</p>
            <div className="space-y-3">
              <button className="w-full border rounded-md p-2 flex items-center gap-2 hover:bg-gray-50">
                <MessageCircle className="h-4 w-4" />
                Start Live chat
              </button>
              <button className="w-full border rounded-md p-2 flex items-center gap-2 hover:bg-gray-50">
                <Mail className="h-4 w-4" />
                Shoot us an Email
              </button>
              <button className="w-full border rounded-md p-2 flex items-center gap-2 hover:bg-gray-50">
                <MessageSquare className="h-4 w-4" />
                Message on WhatsApp
              </button>
            </div>
          </div>

          {/* Visit Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Visit Us
            </h2>
            <p className="text-gray-600 mb-2">Let us meet in person</p>
            <p className="font-medium">Lorem Ipsum Colony, City Name, State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;