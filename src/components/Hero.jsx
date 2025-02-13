import bgHero from "../assets/images/bgHero.jpg";

import cloud1 from "../assets/images/cloud1.svg";
import cloud2 from "../assets/images/cloud2.svg";
import cloud3 from "../assets/images/cloud3.svg";
import cloud4 from "../assets/images/cloud4.svg";

const Hero = () => {
  return (
    <div
      className="min-h-[calc(100vh+100px)]"
      style={{
        backgroundImage: `url(${bgHero})`,
        width: "calc(98vw + 14.3px)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={cloud1}
        alt="Cloud"
        className="absolute left-25 max-w-[20dvw]"
      />
      <img
        src={cloud2}
        alt="Cloud"
        className="absolute right-5 top-7 max-w-[20dvw]"
      />
      <img
        src={cloud3}
        alt="Cloud"
        className="absolute left-5 top-100 max-w-[20dvw]"
      />
      <img
        src={cloud4}
        alt="Cloud"
        className="absolute right-[30%] top-60 max-w-[17dvw]"
      />
      <div className="w-full flex items-center flex-col relative top-10">
        <h1>SD IT Al-Hikmah</h1>
        <h2>Yayasan Al-Istiqomah</h2>
      </div>
    </div>
  );
};

export default Hero;
