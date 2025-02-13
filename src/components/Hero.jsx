import bgHero from "../assets/images/bgHeroNoClouds.jpg";
const Hero = () => {
  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover">
      <div className="gradient-hero min-h-[calc(100vh/5)]"></div>
      <img src={bgHero} alt="Background Image" />
    </div>
  );
};

export default Hero;
