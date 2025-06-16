import { useState } from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-title">Pet Projects</span>
      </div>
      <div className="project-container">
        <div className="project-grid"></div>
      </div>
      <div className="more-projects">
        <a
          href="https://github.com/matiasagado"
          target="_blank"
          rel="noopener noreferrer"
          className="more-link"
        >
          See more on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
