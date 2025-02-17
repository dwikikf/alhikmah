import bgHero from "../assets/images/bgHero.png";

import cloud1 from "../assets/images/cloud1.svg";
import cloud2 from "../assets/images/cloud2.svg";
import cloud3 from "../assets/images/cloud3.svg";
import cloud4 from "../assets/images/cloud4.svg";

const Hero = () => {
  return (
    <div className="mt-20 h-[calc(100vh-80px)] landscape:h-[calc(80vw-80px)] relative">
      <div className="w-full flex items-center flex-col relative top-20 landscape:top-0 z-10">
        <h1>SD IT Al-Hikmah</h1>
        <h2>Yayasan Al-Istiqomah</h2>
        <p className="text-center text-sm py-5 px-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          incidunt recusandae ipsa magnam totam consequatur est asperiores sed
          unde eum. recusandae ipsa magnam totam consequatur est asperiores sed
          unde eum.
        </p>
      </div>
      <img src={cloud1} className="w-1/4 absolute left-3 top-30 " />
      <img src={cloud3} className="w-1/4 absolute right-10 top-4 " />
      <img src={cloud2} className="w-1/5 absolute left-18 bottom-20 " />
      <img src={cloud4} className="w-1/5 absolute right-10 bottom-28 " />
      <img src={bgHero} alt="Hero Image" className="absolute bottom-0" />
    </div>
  );
};

export default Hero;
