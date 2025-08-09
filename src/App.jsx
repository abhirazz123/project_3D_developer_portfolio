import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <main>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </main>

        {/* Contact + Stars */}
        <footer className="relative z-0">
          <Contact />
          <StarsCanvas />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
