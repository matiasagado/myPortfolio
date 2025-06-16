import React, { useEffect, canvasRef } from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">Matias Agado</span>
        </h1>
        <h2 className="hero-subtitle">Software Engineer & Developer</h2>
        <p className="hero-description">
          I'm a Software Engineer based in San Francisco. I'm passionate about
          contributing to meaningful projects that challenge me, help explore
          new technologies, and allow me to explore new technologies while
          making a real impact.
        </p>
        <div className="hero-buttons">
          <button href="#projects" className="hero-button primary">
            View My Work
          </button>
          <button href="#contact" className="hero-button secondary">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
