import React, { useState } from "react";
import "./Projects.css";

// Import images
import flyer1 from "./assets/flyer1.png";
import flyer2 from "./assets/flyer2.png";
import flyer3 from "./assets/flyer3.png";
import colorCollage from "./assets/color_collage.png";
import birthday from "./assets/birthday.png";
import brush from "./assets/brush.png";
import carpet from "./assets/carpet.png";
import fruitCollage from "./assets/fruit_collage.png";

import regester from "./assets/regester.png";
import landing from "./assets/landing.png";
import contacd from "./assets/contacd.png";
import booking from "./assets/bookings.png";

import web_image from "./assets/web_image.png"; // add a preview image
import websiteDemo from "./assets/website video.mp4"; // put video in src/assets too
import portfolio from "./assets/portfolio1.mp4";

const projects = [
  {
    type: "gallery",
    title: "Graphics Design",
    description: "Posters, banners, and creative designs made with Canva & Photoshop.",
    images: [flyer1, flyer2, flyer3, colorCollage, birthday, brush, carpet, fruitCollage]
  },
  {
    type: "gallery",
    title: "Figma UI/UX",
    description: "Mobile and web app designs created with Figma.",
    images: [regester, landing, contacd, booking]
  },
  {
    type: "video",
    title: "Website Development",
    description: "Responsive websites built with HTML, CSS, JavaScript, and React.",
    image: web_image,
    video: websiteDemo
  },

  {
    type: "video",
    title: "portfolio",
    description: "Responsive websites built with HTML, CSS, JavaScript, and React.",
    
    video: portfolio
  }
];

function Projects() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.type === "gallery" && (
              <div className="gallery">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    onClick={() => setSelectedMedia({ type: "image", src: img })}
                  />
                ))}
              </div>
            )}

            {project.type === "video" && (
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <button onClick={() => setSelectedMedia({ type: "video", src: project.video })}>
                  ▶ Watch Demo
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedMedia(null)}>✖</span>
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt="Selected work" />
            ) : (
              <video controls autoPlay>
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
