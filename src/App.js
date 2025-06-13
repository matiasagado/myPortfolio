import React from "react";
import "./App.css";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
