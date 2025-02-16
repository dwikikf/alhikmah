/* eslint-disable react/prop-types */
import Button from "./Button";

const MENUS = [
  {
    id: 1,
    nama: "Beranda",
    link: "",
  },
  {
    id: 2,
    nama: "Keunggulan",
    link: "keunggulan",
  },
  {
    id: 3,
    nama: "Berita",
    link: "berita",
  },
  {
    id: 4,
    nama: "Prestasi & Karya",
    link: "prestasi",
  },
  {
    id: 5,
    nama: "Kontak",
    link: "kontak",
  },
];

const Navbar = ({ isNavOpen, onToggleNav }) => {
  return (
    <div className="w-full mt-5 px-4 lg:px-10 flex justify-between items-center fixed top-0 z-1000">
      <h1 className="text-2xl text-primary cursor-pointer font-bold hover:scale-125 transition delay-150 duration-700">
        My Logo
      </h1>
      {isNavOpen && (
        <nav className="absolute -top-2 right-2 rounded-2xl px-10 py-4 shadow-lg text-md pt-12 bg-amber-100 lg:rounded-4xl lg:bg-white">
          <ul className="flex justify-center flex-col font-bold cursor-pointer gap-4 lg:gap-12 lg:items-center">
            {MENUS.map(({ id, nama, link }) => {
              return (
                <li
                  key={id}
                  className="hover:text-primary transition delay-50 duration-400"
                >
                  <a href={`#${link}`}>{nama}</a>
                </li>
              );
            })}
            <li>
              <Button />
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={onToggleNav}
        className="w-10 h-10 p-2 bg-kuning rounded-full cursor-pointer relative z-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d={!isNavOpen ? "M4 18 L20 18" : "M4 18 L20 6"}
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {!isNavOpen && (
            <path
              d="M4 12 L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
          <path
            d={!isNavOpen ? "M4 6 L20 6" : "M4 6 L20 18"}
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
