import bgSains from "../assets/images/sains.png";
import bgQuran from "../assets/images/alquran.png";
import bgLang from "../assets/images/bookGlobe.png";

const About = () => {
  return (
    <div
      id="keunggulan"
      className="gradient-about flex flex-col items-center gap-10 pb-10"
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
      <div className="px-7">
        <img src={bgQuran} alt="Gambar Al-Quran" />
        <div className="flex flex-col gap-5">
          <h3 className="text-white px-3">Lalu apa lagi keunggulannya ?</h3>
          <div className="bg-kuning px-3 py-4 rounded-2xl border-amber-100 border-4">
            <h3 className="text-hitam-300 text-center">
              Berbasis Al-Quran dan Tahfidz
            </h3>
          </div>
          <p className=" text-white px-3">
            Tidak hanya membekali siswa dengan ilmu pengetahuan dan teknologi,
            tetapi juga menanamkan kecintaan terhadap Al-Quran. Program Tahfidz
            kami dirancang untuk membantu siswa menghafal Al-Quran dengan mudah
            dan menyenangkan, sehingga mereka tidak hanya menjadi generasi yang
            cerdas, tetapi juga memiliki landasan spiritual yang kuat.
          </p>
          <p className="text-white px-3">
            SD IT Alhikmah juga adalah tempat yang tepat bagi putra-putri Anda
            untuk mengembangkan potensi diri secara holistik. Kami akan membantu
            mereka menjadi generasi yang tidak hanya cerdas dalam sains dan
            teknologi, tetapi juga memiliki hafalan Al-Quran yang kuat. Mari
            bergabung bersama kami dan jadilah bagian dari generasi Qurani yang
            cerdas dan berkarakter!
          </p>
        </div>
      </div>
      <div className="px-7">
        <img src={bgLang} alt="Gambar Polyglot" />
        <div className="flex flex-col gap-5">
          <h3 className="text-white px-3">
            Hanya itu saja kah ? Ternyata Tidak.
          </h3>
          <div className="bg-kuning px-3 py-4 rounded-2xl border-amber-100 border-4">
            <h3 className="text-hitam-300 text-center">
              Pembelajaran dan Penerapan Bahasa Inggris dan Arab.
            </h3>
          </div>
          <p className=" text-white px-3">
            Kurikulum bahasa kami dirancang secara terstruktur dan komprehensif,
            mulai dari tingkat dasar hingga mahir. Kami menggunakan metode
            pembelajaran yang interaktif dan inovatif, sehingga siswa tidak
            hanya menghafal kosakata dan tata bahasa, tetapi juga mampu
            menggunakan bahasa secara aktif dan kreatif.
          </p>
          <p className="text-white px-3">
            Untuk ketiga kalinya SD IT Al-Hikmah adalah tempat yang tepat bagi
            putra-putri Anda untuk mengembangkan kemampuan berbahasa Inggris dan
            Arab. Kami akan membantu mereka menjadi generasi global yang mampu
            berkomunikasi dan beradaptasi di era modern. Mari bergabung bersama
            kami dan jadilah bagian dari generasi multilingual yang sukses!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
