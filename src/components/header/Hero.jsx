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
    <div className="!px-8">
      {/* acima div de estructuración external */}
      {/*abajo div parent flex */}
      <div
        style={{ background: "linear-gradient(45deg, #C8C8C8, #2B2B2B)" }}
        className=" flex h-[72vh] items-center p-5 rounded-3xl bg-gradient-to-b from-gray-400 to-gray-900 "
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
          <aside className="flex-col justify-center !pl-[30vh] items-center text-left ">
            {/*TITULO */}
            <h1 className="text-white font-medium text-[2.4rem] !pb-3">
              Llámanos o escríbenos
              <br />
              cuando quieras
            </h1>
            {/*PARAFO*/}
            <p className="text-white text-[1rem] !pb-12">
              Serás escuchado y comprendido, ya as dado el primer <br /> paso y
              has llegado hasta aquí. <strong>SigueAI</strong> es una
              inteligencia <br />
              artificial que pretende ayudarte en esta misión, el acto <br />
              de vivir es una increíble demostración de coraje.
            </p>
            {/*SECTION FLEX*/}
            <section className="flex gap-4">
              {/*LINK1 LLAMAR*/}
              <a
                href="tel:+5511999999999"
                className="flex w-[35%] items-center gap-2 bg-[#FFE70E] !px-4.5 !py-1 rounded-2xl hover:bg-black hover:text-white transition"
              >
                <span className="">llamar</span>
                <strong className="text-white">024</strong>
                <MdOutlineAddIcCall size={20} />
              </a>
              {/*LINK2 DIALOGAR*/}
              <a
                href="tel:+5511999999999"
                className="flex w-[30%] gap-2 bg-white !px-4.5 !py-1 rounded-2xl hover:bg-black hover:text-white transition"
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
