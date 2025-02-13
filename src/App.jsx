import bgHero from "./assets/images/bgHero.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgHero})`,
        width: "calc(98vw + 14.3px)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
