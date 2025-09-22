import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Contact from "./Contact"; 
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer/>} />
        
      </Routes>
    </Router>
  );
};

export default App;


