import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import images from "../../assets/images/imagedata";

{
  /*Las importaciones possuen useState para deteccion de cambios en  navbar, icons y el logo princial */
}

const Header = () => {
  const { src, title } = images.image_logo;
  const [navbar, setNavbar] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* AQUI ESTA LA LOGO */}
        <a href="#">
          <img src={src} alt={title} className="w-[150px]" />
        </a>

        {/* AQUI ESTA EL MENU DE NAVEGACION  Y LINKS*/}
        <div className="flex-1 flex justify-center">
          <ul
            className={`absolute  gap-14 md:static text-center top-30 left-0 w-full b md:bg-transparent transition-all duration-300 ${
              navbar ? "block" : "hidden"
            } md:flex md:justify-center md:space-x-6`}
          >
            <li className="p-3 hover:bg-[#FFE70E]  hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="#" className="font-light">
                Home
              </a>
            </li>
            <li className="p-3 hover:bg-[#FFE70E] hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="#" className="font-light">
                Dialogar
              </a>
            </li>
            <li className="p-3 hover:bg-[#FFE70E] hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="#" className="font-light">
                Sobre Nosotros
              </a>
            </li>
            <li className="p-3 hover:bg-[#FFE70E] hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="#" className="font-light">
                Contactos
              </a>
            </li>
          </ul>
        </div>
        {/* BUTTON MENU  NAVEGACIÓN*/}
        <button className="md:hidden" onClick={() => setNavbar(!navbar)}>
          {navbar ? <IoMdClose size={30} /> : <FaBars size={30} />}
        </button>

        {/* BUTTON LINK LLAMADA */}
        <a
          href="tel:+5511999999999"
          className="hidden md:flex items-center gap-2 bg-[#FFE70E] !px-4.5 !py-1 rounded-2xl hover:bg-black hover:text-white transition"
        >
          <span className="">llamar</span>
          <strong className="text-white">024</strong>
          <MdOutlineAddIcCall size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
