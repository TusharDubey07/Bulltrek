import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import About from "./pages/About";
import Broker from "./pages/Broker";
import Termscondition from "./pages/Termscondition";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/broker" element={<Broker />} />
            <Route path="/terms" element={<Termscondition />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;