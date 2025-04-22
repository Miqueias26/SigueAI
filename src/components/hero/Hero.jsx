import React from "react";
import Images from "../../assets/images/imagedata";
import { MdOutlineAddIcCall } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import UseMotion from "../../helful/UseMotion";

{
  /*Las importaciones possuen la imagen1 del proyecto,
    icons y animaciones con Frame-motion  */
}
{
  /*Componente portador de las informaciones iniciales de la web, su estructuración 
    se basa en un div para el adjuste de caja externa (margin), 
    un div parent flex y dos childens (aside right y aside left) con sus respectivos contenidos */
}

const Hero = () => {
  const { src, title } = Images.image1;
  return (
    <div className="md:!px-8 ">
      {/* acima div de estructuración external */}
      {/*abajo div parent flex */}
      <div
        style={{ background: "linear-gradient(45deg, #C8C8C8, #2B2B2B)" }}
        className="flex flex-col h-[119vh] md:flex-row md:h-[72vh] md:items-center md:p-5 rounded-3xl md:bg-gradient-to-b from-gray-400 to-gray-900"
      >
        {/*FrameMotion: Animacion FadeIn aplicada en el childen right  */}
        <UseMotion type="fadeIn">
          {/*Childen right con el imagen1 */}
          <aside className="">
            <img src={src} alt={title} width={500} />
          </aside>
        </UseMotion>
        {/*FrameMotion: Animacion FadeIn aplicada en el childen left  */}
        <UseMotion>
          {/*Childen left con titulo h1, parafo p y section flex con dos buttons  */}
          <aside className="!px-4 md:justify-center md:!pl-[30vh] md:items-center md:text-left">
            {/*TITULO */}
            <h1 className="text-white max-w-sm text-[2rem] font-medium text-center !py-3 md:items-left md:text-left md:text-[2.4rem]">
              llámanos o escríbenos cuando quieras
            </h1>
            {/*PARAFO*/}
            <p className="text-white max-w-sm text-[1rem] flex-col !pb-12 font-light text-center md:text-left md:items-left">
              Serás escuchado y comprendido, ya as dado el primer paso y has
              llegado hasta aquí. <strong>SigueAI</strong> es una inteligencia
              artificial que pretende ayudarte en esta misión, el acto de vivir
              es una increíble demostración de coraje.
            </p>
            {/*SECTION FLEX*/}
            <section className="flex flex-col md:flex-row text-center items-center gap-4">
              {/*LINK1 LLAMAR*/}
              <a
                href="tel:+5511999999999"
                className="flex  items-center gap-2 bg-[#FFE70E] !px-4.5 !py-1 rounded-2xl hover:bg-black hover:text-white transition"
              >
                <span className="">llamar</span>
                <strong className="text-white hover:text-[#FFE70E]">024</strong>
                <MdOutlineAddIcCall size={20} />
              </a>
              {/*LINK2 DIALOGAR*/}
              <a
                href="#dialogar"
                className="flex  gap-2 bg-white !px-4.5 !py-1 rounded-2xl hover:bg-black hover:text-white transition"
              >
                <span className="">Dialogar</span>
                <BsChatLeftText size={16} />
              </a>
            </section>
          </aside>
        </UseMotion>
      </div>
    </div>
  );
};

export default Hero;
