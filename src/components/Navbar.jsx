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
    <div className="w-full px-10 flex justify-between items-center sticky top-0">
      <h1 className="text-2xl text-primary cursor-pointer font-bold hover:scale-125 transition delay-150 duration-700">
        My Logo
      </h1>
      <nav className="px-12 py-3 shadow-lg text-sm bg-white rounded-4xl">
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
      <div className="my-6">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
