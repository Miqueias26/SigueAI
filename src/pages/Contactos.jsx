import React from "react";

import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiPhoneLine,
  RiMailLine,
} from "react-icons/ri";
import Web3FormsAPI from "../services/Web3FormsAPI";
import Motion from "../animations/Motion";

const Contactos = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-40 ">
      <aside className="p-8">
        <Motion type="scrollReveal" scroll>
          <div className="flex-col pb-10 justify-center md:text-left text-center items-center">
            <section className="flex-col gap-2 text-3xl md:text-3xl pb-2 ">
              <p className="text-[#FFE70E] flex gap-2">
                Contactos<p className="text-black">disponibles</p>
              </p>

              <p className="font-extralight text-gray-500 text-sm ">
                Estos son los principales contactos disponibles para ayuda
                inmediata.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-3 pb-20 font-extralight text-black">
            <div className="flex gap-4 items-center hover:border border-[#FFE70E] rounded-lg p-2">
              <RiPhoneLine className="text-[#FFE70E]" />
              <a href="tel:024"> +024 - Atención a la conducta suicida</a>
            </div>
            <div className="flex gap-4 items-center hover:border border-[#FFE70E] rounded-lg p-2">
              <RiPhoneLine className="text-[#FFE70E]" />
              <a href="tel:900 107 917"> +900 107 917 - Cruz Roja</a>
            </div>
            <div className="flex gap-4 items-center hover:border border-[#FFE70E] rounded-lg p-2">
              <RiPhoneLine className="text-[#FFE70E]" />
              <a href="tel:717 003 717"> +717 003 717 - Asites</a>
            </div>
            <div className="flex gap-4 items-center hover:border border-[#FFE70E] rounded-lg p-2">
              <RiMailLine className="text-[#FFE70E]" />
              <a href="mailto:sigueaicontact@gmail.com">
                Sigueaicontact@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-10 items-center text-center justify-center">
            <RiFacebookLine
              size={30}
              className="hover:bg-gradient-to-r from-[#FFE90E] to-[#FFB731] hover:rounded-full hover:p-2 hover:transition-all hover:duration-300 hover:expand-110"
            />
            <RiTwitterLine
              size={30}
              className="hover:bg-gradient-to-r from-[#FFE90E] to-[#FFB731] hover:rounded-full hover:p-2 hover:transition-all hover:duration-300 hover:expand-110"
            />
            <RiInstagramLine
              size={30}
              className="hover:bg-gradient-to-r from-[#FFE90E] to-[#FFB731] hover:rounded-full hover:p-2 hover:transition-all hover:duration-300 hover:expand-110"
            />
          </div>
        </Motion>
      </aside>
      <Motion type="scrollReveal" scroll>
        <aside className="p-8">
          <Web3FormsAPI />
        </aside>
      </Motion>
    </div>
  );
};

export default Contactos;
