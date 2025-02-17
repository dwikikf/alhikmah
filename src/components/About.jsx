import bgSains from "../assets/images/sains.png";

const About = () => {
  return (
    <div
      id="tentang"
      className="gradient-about flex flex-col items-center gap-10 pt-20 pb-10"
    >
      <div className="px-7 ">
        <img src={bgSains} alt="Gambar Sains" />
        <div className="flex flex-col gap-3">
          <h3 className="text-white px-3">Apa Keunggulannya ?</h3>
          <div className="bg-kuning px-3 py-4 rounded-2xl border-amber-100 border-4">
            <h3 className="text-hitam-300 text-center">
              Berbasis Sains dan Teknologi
            </h3>
          </div>
          <p className=" text-white px-3">
            Kurikulum kami dirancang untuk mengintegrasikan sains dan teknologi
            dalam setiap aspek pembelajaran. Mulai dari matematika dan IPA yang
            diajarkan dengan metode yang menarik dan interaktif. Kami percaya
            bahwa dengan memberikan pengalaman belajar yang menyenangkan dan
            relevan, siswa akan termotivasi untuk mengeksplorasi lebih dalam
            dunia sains dan teknologi.
          </p>
          <p className="text-white px-3">
            SD IT Alhikmah adalah tempat yang tepat bagi putra-putri Anda untuk
            memulai minat dan bakat di bidang sains dan teknologi. Kami akan
            membantu mereka menjadi generasi yang tidak hanya memahami
            teknologi, tetapi juga mampu menciptakan dan mengembangkannya. Mari
            bergabung bersama kami dan jadilah bagian dari generasi emas sains
            dan teknologi Indonesia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
