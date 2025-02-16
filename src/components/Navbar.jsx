import Button from "./Button";

const MENUS = [
  {
    id: 1,
    nama: "Beranda",
  },
  {
    id: 2,
    nama: "Pendidikan",
  },
  {
    id: 3,
    nama: "Berita",
  },
  {
    id: 4,
    nama: "Prestasi & Karya",
  },
  {
    id: 5,
    nama: "Tentang",
  },
];

const Navbar = () => {
  return (
    <div className="w-full mt-5 px-10 flex justify-between items-center fixed top-0 z-1000">
      <h1 className="text-2xl text-primary cursor-pointer font-bold hover:scale-125 transition delay-150 duration-700">
        My Logo
      </h1>
      <div className="w-10 h-10 p-2 bg-kuning rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <nav className="px-12 py-3 shadow-lg text-sm rounded-4xl bg-white hidden">
        <ul className="flex justify-center items-center gap-12 font-bold cursor-pointer">
          {MENUS.map(({ id, nama }) => {
            return (
              <li
                key={id}
                className="hover:text-primary transition delay-50 duration-400"
              >
                {nama}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="my-6 hidden">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
