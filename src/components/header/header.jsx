import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import images from "../../assets/images/imagedata";
import UseMotion from "../../helful/UseMotion";

{
  /*Las importaciones possuen la imagen del logo del proyecto,
    icons y animaciones con Frame-motion  */
}

const Header = () => {
  const { src, title } = images.image_logo;
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="">
      <UseMotion type="fadeIn">
        <div className="max-w-7xl mx-auto flex justify-between items-center md:bg-transparent !p-4">
          {/* LOGO */}
          <a href="#">
            <img src={src} alt={title} className="w-[150px]" />
          </a>

          {/* MENU DE NAVEGACIÓN */}
          <div className="flex-1 flex justify-center md:bg-transparent">
            <ul
              className={`absolute md:static !top-0 left-0 w-full bg-black !opacity-90 text-white text-center md:bg-transparent md:text-black transition-transform duration-500 ease-in-out transform z-40
            ${
              navbar
                ? "!flex !flex-col !p-20 !gap-10 !pt-30 rounded-b-2xl translate-x-0 opacity-100"
                : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100 md:flex"
            } md:!flex md:!flex-row md:!justify-center md:!space-x-6`}
            >
              {[
                { href: "/", label: "Home" },
                { href: "#dialogar", label: "Dialogar" },
                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                { href: "/Contactos", label: "Contactos" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="!p-3 !pb-1  hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent"
                >
                  <a href={link.href} className="font-medium md:font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTON MENU SANDUICH */}
          <button
            className="md:hidden z-50 !p-2"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <IoMdClose size={30} className="text-white" />
            ) : (
              <FaBars size={30} />
            )}
          </button>

          {/* BUTTON LINK LLAMADA */}
          <a
            href="tel:+5511999999999"
            className="hidden md:!flex items-center !gap-2 bg-[#FFE70E] !px-4.5 !py-1 rounded-2xl hover:bg-black hover:text-white transition"
          >
            <span>llamar</span>
            <strong className="text-white">024</strong>
            <MdOutlineAddIcCall size={20} />
          </a>
        </div>
      </UseMotion>
    </nav>
  );
};

export default Header;
