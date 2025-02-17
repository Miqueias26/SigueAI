import React from "react";
import Images from "../../assets/images/imagedata";
import { PiPhonePlus } from "react-icons/pi";

const Header = () => {
  const { src, title } = Images.image_logo;
  return (
    <>
      {/*NAVBAR PARENT CON (3) CHILDENS */}
      <nav className="flex justify-evenly items-center">
        {/* NAV_LOGO */}
        <div>
          <img src={src} alt={title} className="w-[120px]" />
        </div>
        {/* NAV_LINKS */}

        <ul className="flex gap-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Dialogar</a>
          </li>
          <li>
            <a href="">Sobre nosotros</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>

        {/* NAV_BUTTON */}
        <div>
          <a href="#" className=" bg-[#FFE70E] pt-10 ">
            llamar &nbsp;
            <strong className="text-white">024</strong>&nbsp;
            <PiPhonePlus />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
