import { useState } from "react";
import About from "./components/About";
import Achievement from "./components/Achievement";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
      <Achievement />
    </div>
  );
}

export default App;
