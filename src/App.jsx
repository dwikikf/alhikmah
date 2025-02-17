import { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Primacy from "./components/Primacy";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      {isNavOpen && (
        <div className="overlay" onClick={() => setIsNavOpen(false)} />
      )}
      <Navbar
        isNavOpen={isNavOpen}
        onToggleNav={() => setIsNavOpen(!isNavOpen)}
      />
      <Hero />
      <About />
      <Primacy />
    </div>
  );
}

export default App;
