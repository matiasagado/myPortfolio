import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
