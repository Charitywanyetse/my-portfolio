// Skills.jsx
import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 55 },
  { name: "Python", level: 60 },
  { name: "Flutter", level: 5 },
  { name: "Flask", level: 50 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h4>{skill.name}</h4>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
