import Card from "./card";

import alquranImage from "../assets/images/alquran.png";
import sainsImage from "../assets/images/sains.png";
import bahasaImage from "../assets/images/bookGlobe.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState } from "react";

const KEUNGGULAN = [
  {
    id: 1,
    tittle: "Berbasis Al-Quran dan Tahfidz",
    desc: "Tidak hanya membekali siswa dengan ilmu pengetahuan dan teknologi, tetapi juga menanamkan kecintaan terhadap Al-Quran. Program Tahfidz kami dirancang untuk membantu siswa menghafal Al-Quran dengan mudah dan menyenangkan, sehingga mereka tidak hanya menjadi generasi yang cerdas, tetapi juga memiliki landasan spiritual yang kuat.",
    image: alquranImage,
  },
  {
    id: 2,
    tittle: "Berbasis Sains dan Teknologi",
    desc: "Kurikulum bahasa kami dirancang secara terstruktur dan komprehensif,mulai dari tingkat dasar hingga mahir. Kami menggunakan metode pembelajaran yang interaktif dan inovatif, sehingga siswa tidak hanya menghafal kosakata dan tata bahasa, tetapi juga mampu menggunakan bahasa secara aktif dan kreatif.",
    image: sainsImage,
  },
  {
    id: 3,
    tittle: "Pembelajaran dan Penerapan Bahasa Inggris dan Arab",
    desc: "Kurikulum kami dirancang untuk mengintegrasikan sains dan teknologi dalam setiap aspek pembelajaran. Mulai dari matematika dan IPA yang diajarkan dengan metode yang menarik dan interaktif. Kami percaya bahwa dengan memberikan pengalaman belajar yang menyenangkan dan relevan, siswa akan termotivasi untuk mengeksplorasi lebih dalam dunia sains dan teknologi.",
    image: bahasaImage,
  },
];

const Primacy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + KEUNGGULAN.length) % KEUNGGULAN.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % KEUNGGULAN.length);
  };

  return (
    <div id="keunggulan" className="gradient-achievement px-7 pt-10 pb-50">
      <div className="relative overflow-hidden rounded-3xl bg-[#dafcf4] pb-10">
        <div
          className="w-full"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {KEUNGGULAN.map(({ id, tittle, desc, image }) => (
            <div key={id} className="w-full shrink-0">
              <Card tittle={tittle} desc={desc} image={image} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 space-x-4">
          <button onClick={handlePrev} className="bg-kuning p-2 rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="bg-kuning p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Primacy;
