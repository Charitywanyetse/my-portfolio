import react from "react";
import "./About.css";
import profile from "./assets/charity.jpg"; 
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      {/* Left Text Section */}
      <div className="about-text">
        <h2>Hello, It's Me</h2>
        <h1>Wanyetse   Charity</h1>
        <h3>
          I'm a <span>Frontend , Backend Developer and a graphics designer</span>
        </h3>
        <p>
Hi, I’m a passionate Web and App Developer with 1 year of hands-on experience. I specialize in:

Web Development : building and designing responsive websites.

App Development : creating functional mobile and desktop applications.

Full-Stack Solutions : working on both frontend and backend development.

UI/UX Design : crafting intuitive and user-friendly digital experiences.

Graphics Design : blending creativity with technology to deliver modern designs.

My goal is to create digital products that are not only visually appealing but
 also easy to use and impactful. I enjoy solving real-world problems through code 
 and design, always striving to learn, grow, and deliver high-quality work.
        </p>

        <p>
          I am constantly exploring new technologies and improving my skills
           to stay up-to-date with industry trends. Collaboration and 
           problem-solving are at the core of my work, and I enjoy working 
           on projects that challenge me to think creatively. Beyond coding 
           and design, I value continuous learning, sharing knowledge,
            and contributing to projects that make a positive impact.
        </p>

        {/* Social Links */}
       <div className="social-icons">
  <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  <a href="https://x.com/WanyetseC97596" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://www.facebook.com/profile.php?id=61567009384790" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
</div>
      </div>

      {/* Right Image Section */}
      <div className="about-image">
        <div className="glow-circle">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  )
}


export default About

