
// Services.jsx
import React from "react";
import { FaCode, FaLaptopCode, FaApple } from "react-icons/fa";
import "./Services.css"; // Make sure this path matches your project structure

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
          <h3>UI/UX Design using Figma</h3>
          <p>
            I create intuitive and visually appealing user interfaces using Figma. 
            From wireframes to high-fidelity prototypes, I design seamless digital 
            experiences that engage users and enhance usability. My approach combines 
            creativity and user-centered design principles to ensure that every interface 
            is both functional and aesthetically pleasing, resulting in products that 
            are easy to navigate and enjoyable to use.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Website Development using React, HTML, CSS</h3>
          <p>
            I build dynamic and responsive websites using HTML, CSS, JavaScript, 
            and React. From structuring web pages with HTML to styling them with CSS, 
            I create visually appealing and user-friendly interfaces. Using JavaScript 
            and React, I develop interactive features and seamless single-page 
            applications that provide engaging user experiences. My focus is on writing 
            clean, efficient code while ensuring websites are responsive, accessible, 
            and optimized for performance across devices.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <FaApple className="service-icon" />
          <h3>App Development using Flutter</h3>
          <p>
            I develop cross-platform mobile applications using Flutter, creating seamless 
            experiences for both Android and iOS devices. From building intuitive user 
            interfaces to implementing smooth animations and responsive layouts, I focus 
            on crafting apps that are visually appealing and highly functional. Leveraging 
            Dart and Flutter’s rich widget library, I ensure that every app is optimized 
            for performance, scalability, and user engagement, delivering solutions that 
            are both innovative and reliable.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Card 4 */}
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Graphic Designing using Photoshop & Illustrator</h3>
          <p>
            I create visually striking graphics using Adobe Photoshop and Illustrator, 
            combining creativity with technical skills to produce professional designs. 
            From editing photos and creating digital illustrations to designing logos, 
            banners, and marketing materials, I focus on crafting visuals that communicate 
            messages effectively and captivate audiences. By leveraging color, typography, 
            and layout principles, I ensure every design is both aesthetically pleasing 
            and impactful.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

