import React from "react";
import Images from "../../assets/images/imagedata";

{
  /*Las importaciones possuen la imagen logo del proyecto,
    icons y animaciones con Frame-motion  */
}

const Footer = () => {
  const { src, title } = Images.image_logo;
  return (
    <footer className="px-8">
      <div className="flex flex-col justify-between text-center font-light text-[0.8rem] md:text-[0.9rem] items-center md:flex-row">
        <section>
          {/* LOGO */}
          <img src={src} alt={title} className=" w-[110px] md:w-[100px]" />
        </section>
        {/* MENU DE NAVEGACIÓN */}
        <section className="">
          <ul className="flex  md:flex-row gap-4 md:gap-14">
            <li className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="/">Home</a>
            </li>
            <li className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="#dialogar">Dialogar</a>
            </li>
            <li className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="/sobre-nosotros">Sobre Nosotros</a>
            </li>
            <li className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="/Contactos">Contactos</a>
            </li>
          </ul>
        </section>
        {/* MENU SOCIALES*/}
        <section className="py-4">
          <ul className="flex  gap-2 md:gap-6 md:flex-row">
            <li className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent">
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </section>
      </div>
      <section className="w-full h-[1px] bg-gray-200"></section>
      <div className="flex flex-col md:flex-row justify-between text-center text-[0.8rem] py-4 text-gray-500">
        <section>
          <p>Copyright &copy; 2025 SigueAI </p>
        </section>
        <section>
          {/* POLITICA DE PRIVACIDAD */}
          <a
            href="/politica-de-privacidad"
            className=" hover:underline decoration-2 decoration-[#FFE70E] md:hover:bg-transparent"
          >
            Política de Privacidad
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
