import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
      </main>
    </div>
  );
}

export default App;
