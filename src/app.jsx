import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
//import Portfolio from "./components/Portfolio";
//import Contact from "./components/ContactMe";
//import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      {/*<Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
