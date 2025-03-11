import React from "react";
import { AiFillRead } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { GiReceiveMoney, GiWorld } from "react-icons/gi";
import UseMotion from "../../helful/UseMotion";

{
  /*Las importaciones possuen  icons y useMotion para animacion de la pagina*/
}

const SobreNosotros = () => {
  return (
    <div className="parent !px-8 !pb-12">
      {/*Acima div parent // abajo animacion principal*/}
      <UseMotion type="fadeIn">
        {/* Abajo div responsable por las sections-lines y sectiion-title*/}
        <div className="!px-8 flex items-center gap-4 justify-center !py-10">
          <section className="h-[0.2rem] w-full bg-[#D9D9D9]"></section>
          <section className="font-bold text-[2.4rem] w-full text-center ">
            <h1>Sobre Nosotros</h1>
          </section>
          <section className="h-[0.2rem] w-full bg-[#D9D9D9]"></section>
        </div>
        {/* Abajo div parent responsable por aside left y right*/}
        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          {/* abajo aside left*/}
          <aside className="left">
            {/* abajo section1-left responsable por el icon y span*/}
            <section className="flex flex-col md:flex-row items-center gap-4 !pb-6">
              <i>
                <AiFillRead size={40} />
              </i>
              <span className="text-2xl font-bold text-[#FFE70E]">
                Nuestro Objetivo
              </span>
            </section>
            {/* Abajo section responsable por el text1*/}
            <section className="!pb-6">
              <p className="md:w-145 break-all text-center md:text-left">
                Nuestro objetivo: Ofrecer acompañamiento empático, basado en la
                escucha activa y recursos que ayuden a mejorar el bienestar.
              </p>
            </section>
            {/* abajo section2-left responsable por el icon y span*/}
            <section className="flex flex-col md:flex-row items-center gap-4 !pb-6">
              <i>
                <FaHandshake size={40} />
              </i>
              <span className="text-2xl font-bold text-[#FFE70E]">
                Nuestro Compromiso
              </span>
            </section>
            {/* Abajo section responsable por el text2*/}
            <section className="">
              <p className="md:w-140 break-all text-center md:text-left">
                Nuestro compromiso: Crear una herramienta confiable que brinde
                apoyo emocional a quienes necesiten un espacio seguro y
                accesible.
              </p>
            </section>
          </aside>
          {/* abajo aside right*/}
          <aside className="right ">
            {/* abajo section1-right responsable por el icon y span*/}
            <section className="flex flex-col md:flex-row items-center gap-4 !pb-6">
              <i>
                <GiWorld size={40} />
              </i>
              <span className="text-2xl font-bold text-[#FFE70E]">
                Nuestra Visión
              </span>
            </section>
            {/* Abajo section responsable por el text3*/}
            <section className="!pb-6">
              <p className="md:w-140 break-all text-center md:text-left">
                Nuestra visión: Usar inteligencia artificial para acercar el
                bienestar emocional a más personas, ofreciendo orientación y
                escucha activa.
              </p>
            </section>
            {/* abajo section2-right responsable por el icon y span*/}
            <section className="flex flex-col md:flex-row items-center gap-4 !pb-6">
              <i>
                <GiReceiveMoney size={40} />
              </i>
              <span className="text-2xl font-bold text-[#FFE70E]">
                Nuestros Valores
              </span>
            </section>
            {/* Abajo section responsable por el text4*/}
            <section className="!pb-6">
              <p className="md:w-140 break-all text-center md:text-left">
                Nuestros valores: Empatía, accesibilidad, confidencialidad y
                mejora continua para proporcionar un entorno de apoyo respetuoso
                y humano.
              </p>
            </section>
          </aside>
        </div>
      </UseMotion>
    </div>
  );
};

export default SobreNosotros;
