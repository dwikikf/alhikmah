import bgAchievement from "../assets/images/acivement-sample.png";

const Achievement = () => {
  return (
    <div className="gradient-achievement px-7 pt-10 pb-50">
      <div className="bg-[#dafcf4] rounded-3xl flex flex-col py-8">
        <img src={bgAchievement} alt="gambar achievement" />
        <div className="flex flex-col px-7 gap-1">
          <h3>The Impact of Working On Alternative Protein</h3>
          <div className="bg-kuning w-10 h-1 "></div>
          <h4 className="pt-3 text-[#005c66]">Sustainability</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            distinctio voluptatibus ducimus accusantium velit tempore. Sunt
            cupiditate, autem veritatis, voluptatem iusto sequi rem nemo
            praesentium fuga, asperiores aspernatur repellat cum. Totam
            repellendus facere officia! Vitae quo, et alias ducimus corrupti,
            nostrum facilis minima repellat debitis, aperiam perferendis
            distinctio consectetur deleniti tempore voluptatem harum cumque
            dignissimos officiis fuga excepturi similique eveniet!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
