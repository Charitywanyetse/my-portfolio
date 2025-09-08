
import react from "react";
import "./Services.css";

import { FaCode, FaLaptopCode, FaApple } from "react-icons/fa";


const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>

      <div className="services-container">
        {/* Card 1 */}
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>
            I create intuitive and visually appealing user interfaces using Figma. 
  From wireframes to high-fidelity prototypes, I design seamless digital 
  experiences that engage users and enhance usability.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Design</h3>
          <p>
           
  I design responsive and user-friendly websites that combine aesthetics with functionality. 
  Using modern tools and best practices, I ensure every site
   is visually appealing and easy to navigate
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <FaApple className="service-icon" />
          <h3>App Design</h3>
          <p>
            I design engaging and intuitive mobile apps that offer smooth user experiences. 
  From wireframes to interactive prototypes, I focus on functionality and visual
   appeal for both iOS and Android.
   </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );

  
}

export default Services
