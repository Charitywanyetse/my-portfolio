import React from "react";
import "./About.css";
import profilePic from "./assets/charity.jpg"; // change to your image path

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="about-left">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>

        {/* Right: Information */}
        <div className="about-right">
          <h2>About Me</h2>
        <p>
  Hi , I'm <strong>Wanyetse Charity</strong>, a passionate tech
  enthusiast currently pursuing a Diploma in Computer Science at WITI
  Institute.  
</p>

<p>
  I specialize in <strong>HTML, CSS, React, Graphic Design, and
  Python</strong>. I love solving problems, building creative
  solutions, and designing beautiful user experiences in Figma.
</p>

<p>
  My mission is to grow into a professional computer scientist and
  contribute to impactful projects.
</p>


<p>
  I enjoy working on <strong>team projects</strong> where I can learn
  from others, share ideas, and grow my skills. Collaboration and
  communication are values I always carry into my work.
</p>

<p>
  Outside of coding, I love exploring <strong>graphic design tools</strong>
  like Canva and Photoshop, creating designs that bring ideas to life.  
  This combination of design and development helps me build both functional
  and visually appealing solutions.
</p>

<p>
  My long-term goal is to use technology to <strong>solve real-world
  challenges</strong> in my community and inspire others who are starting
  their journey in tech.
</p>

          <button className="about-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default About;


