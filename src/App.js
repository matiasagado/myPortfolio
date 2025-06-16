import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
