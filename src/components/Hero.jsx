import bgHero from "../assets/images/bgHero.jpg";

import cloud1 from "../assets/images/cloud1.svg";
import cloud2 from "../assets/images/cloud2.svg";
import cloud3 from "../assets/images/cloud3.svg";
import cloud4 from "../assets/images/cloud4.svg";

const Hero = () => {
  return (
    <div
      className="relative min-h-[90vh] bg-[right_29%_top_10px]"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={cloud1}
        alt="Cloud"
        className="absolute left-7 top-[5vh] w-[25dvw]"
      />
      <img
        src={cloud2}
        alt="Cloud"
        className="absolute right-7 top-[16vh] w-[20dvw]"
      />
      <img
        src={cloud3}
        alt="Cloud"
        className="absolute left-20 top-[28vh] max-w-[25dvw]"
      />
      <img
        src={cloud4}
        alt="Cloud"
        className="absolute right-20 top-[35vh] w-[15dvw]"
      />
      <div className="w-full flex items-center flex-col relative top-[10vh]">
        <h1>SD IT Al-Hikmah</h1>
        <h2>Yayasan Al-Istiqomah</h2>
      </div>
    </div>
  );
};

export default Hero;
