import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
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
