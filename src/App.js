// App.jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";  


export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1b2a]">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

