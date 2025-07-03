import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <hr />
      <Hero />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
