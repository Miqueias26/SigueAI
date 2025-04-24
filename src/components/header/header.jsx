import { useState, useEffect, use } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import images from "../../assets/images/imagedata";
import backgroundVideo from "../../assets/video/emotional.webm";

const Header = ({ renderVideo = false }) => {
  const { image_lg_light, image_lg_dark } = images;
  const [navbar, setNavbar] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const onCall = () => {
    setTimeout(() => {
      window.location.href = "tel:024";
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header>
      {renderVideo ? (
        <>
          <nav className="relative w-full h-screen overflow-hidden max-h-[93vh]">
            <video
              autoPlay
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src={backgroundVideo} type="video/webm" />
              Seu navegador não suporta vídeo em background.
            </video>

            <div className="max-w-8xl mx-auto flex justify-between items-center md:bg-transparent md:px-6 px-4 py-4">
              {/* LOGO */}
              <a href="/" className="relative z- flex text-center items-center">
                <img
                  src={image_lg_light.src}
                  alt={image_lg_light.alt}
                  className="md:w-[150px] w-[100px]"
                />
              </a>

              <div className="flex-1 flex justify-center md:bg-transparent">
                <ul
                  className={`absolute md:static top-0 left-0 w-full bg-black opacity-90 text-white text-center md:bg-transparent transition-transform duration-500 ease-in-out transform z-40
            ${
              navbar
                ? "flex flex-col p-20 gap-10 pt-30 rounded-b-2xl translate-x-0 opacity-100"
                : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100 md:flex"
            } md:flex md:flex-row md:justify-center md:space-x-6`}
                >
                  {[
                    { href: "/", label: "Home" },
                    { href: "/chat", label: "Dialogar" },
                    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                    { href: "/Contactos", label: "Contactos" },
                  ].map((link, index) => (
                    <li
                      key={index}
                      className="p-3 pb-1 hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent"
                    >
                      <a href={link.href} className="font-medium md:font-light">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="md:hidden z-50 flex text-white"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoMdClose size={30} className="text-white" />
                ) : (
                  <FaBars size={30} />
                )}
              </button>

              <button
                onClick={onCall}
                className="hidden relative z-10 md:flex px-4 py-1 gap-2 items-center text-white font-medium bg-black rounded-3xl hover:bg-white hover:text-black transition"
              >
                llamar 024
                <MdOutlineAddIcCall size={20} />
              </button>
            </div>

            <div
              className={`relative z-10 flex-col text-center text-white pt-64 transition-opacity duration-1000 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="md:text-2xl sm:text-sm font-semibold pb-1">
                Comunícate o llámanos, estamos contigo.
              </p>
              <p className="md:text-lg sm:text-medium ">
                Serás escuchado y comprendido, ya as dado el primer paso y has
                llegado hasta aquí.
              </p>
              <div className="flex md:flex-row justify-center items-center pt-6">
                <button
                  onClick={onCall}
                  className=" z-10 text-black flex px-4 py-1 gap-2 items-center font-medium bg-[#FFE70E] rounded-3xl hover:bg-black hover:text-white transition"
                >
                  Conversar
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <div className="max-w-8xl mx-auto flex justify-between items-center md:bg-transparent md:px-6 px-4 py-4">
          <a href="#" className="relative z- flex text-center items-center">
            <img
              src={image_lg_dark.src}
              alt={image_lg_dark.alt}
              className="md:w-[150px] w-[100px]"
            />
          </a>
          <div className="flex-1 flex justify-center md:bg-transparent">
            <ul
              className={`absolute md:static top-0 left-0 w-full bg-black opacity-90  text-center md:bg-transparent transition-transform duration-500 ease-in-out transform z-40
            ${
              navbar
                ? "flex flex-col p-20 gap-10 pt-30 rounded-b-2xl translate-x-0 opacity-100 text-white"
                : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100 md:flex"
            } md:flex md:flex-row md:justify-center md:space-x-6`}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/chat", label: "Dialogar" },
                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                { href: "/Contactos", label: "Contactos" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="p-3 pb-1 hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent"
                >
                  <a href={link.href} className="font-medium md:font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="md:hidden z-50 flex text-white"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <IoMdClose size={30} className="text-white" />
            ) : (
              <FaBars size={30} className="text-black" />
            )}
          </button>

          <button
            onClick={onCall}
            className="hidden relative md:flex px-4 py-1 gap-2 items-center text-white font-medium bg-black rounded-3xl hover:bg-white hover:text-black transition"
          >
            llamar 024
            <MdOutlineAddIcCall size={20} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
