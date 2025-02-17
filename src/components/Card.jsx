/* eslint-disable react/prop-types */

const Card = ({ tittle, desc, image }) => {
  return (
    <div className="flex flex-col pt-8 pb-4">
      <img src={image} alt={`Gambar ${image}`} />
      <div className="flex flex-col px-7 gap-1">
        <h3>{tittle}</h3>
        <div className="bg-kuning w-10 h-1 "></div>
        <h4 className="pt-3 text-[#005c66]">Sustainability</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
