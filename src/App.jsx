import About from "./components/About";
import Achievement from "./components/Achievement";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <About />
      <Achievement />
    </div>
  );
}

export default App;
