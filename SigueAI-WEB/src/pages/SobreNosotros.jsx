import React from "react";
import { AiFillRead } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { GiReceiveMoney, GiWorld } from "react-icons/gi";
import Motion from "../animations/Motion";

const SobreNosotros = () => {
  return (
    <div className="parent px-8 pb-12">
      <Motion type="scrollReveal" scroll>
        <div className="px-8 flex items-center gap-4 justify-center py-10">
          <section className="h-[0.2rem] w-full bg-[#D9D9D9]"></section>
          <section className="font-bold text-[2.4rem] w-full text-center ">
            <h1>Sobre nosotros</h1>
          </section>
          <section className="h-[0.2rem] w-full bg-[#D9D9D9]"></section>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          <aside className="left">
            <section className="flex flex-col md:flex-row items-center gap-4 pb-6">
              <i>
                <AiFillRead size={40} />
              </i>
              <span className="text-2xl font-medium text-[#FFE70E]">
                Nuestro objetivo
              </span>
            </section>

            <section className="pb-6">
              <p className="md:w-145 break-all text-center md:text-left font-extralight">
                Nuestro objetivo: Ofrecer acompañamiento empático, basado en la
                escucha activa y recursos que ayuden a mejorar el bienestar.
              </p>
            </section>

            <section className="flex flex-col md:flex-row items-center gap-4 pb-6">
              <i>
                <FaHandshake size={40} />
              </i>
              <span className="text-2xl font-medium text-[#FFE70E]">
                Nuestro compromiso
              </span>
            </section>

            <section className="">
              <p className="md:w-140 break-all text-center md:text-left font-extralight">
                Nuestro compromiso: Crear una herramienta confiable que brinde
                apoyo emocional a quienes necesiten un espacio seguro y
                accesible.
              </p>
            </section>
          </aside>

          <aside className="right ">
            <section className="flex flex-col md:flex-row items-center gap-4 pb-6">
              <i>
                <GiWorld size={40} />
              </i>
              <span className="text-2xl font-medium text-[#FFE70E]">
                Nuestra visión
              </span>
            </section>

            <section className="pb-6">
              <p className="md:w-140 break-all text-center md:text-left font-extralight">
                Nuestra visión: Usar inteligencia artificial para acercar el
                bienestar emocional a más personas, ofreciendo orientación y
                escucha activa.
              </p>
            </section>

            <section className="flex flex-col md:flex-row items-center gap-4 pb-6">
              <i>
                <GiReceiveMoney size={40} />
              </i>
              <span className="text-2xl font-medium text-[#FFE70E]">
                Nuestros valores
              </span>
            </section>

            <section className="pb-6">
              <p className="md:w-140 break-all text-center md:text-left font-extralight">
                Nuestros valores: Empatía, accesibilidad, confidencialidad y
                mejora continua para proporcionar un entorno de apoyo respetuoso
                y humano.
              </p>
            </section>
          </aside>
        </div>
      </Motion>
    </div>
  );
};

export default SobreNosotros;
