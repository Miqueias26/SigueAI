import React from "react";
import Images from "../../assets/images/imagedata";
import { BsChatLeftText } from "react-icons/bs";
import UseMotion from "../../helful/UseMotion";

{
  /*Las importaciones possuen la imagen3 del proyecto,
    icons y animaciones con Frame-motion  */
}

const ContainerMain = () => {
  const { src, title } = Images.image3;
  return (
    <div>
      {/*DIV ACIMA SOLO DE COMPARTIMENTO*/}
      <UseMotion type="fadeIn">
        {/*PARENT */}
        <div className="!px-8 !py-8 flex flex-col md:flex-row">
          {/*MAIN CONTENIDO PRICIPAL DE LA WEB, DONDE APORTARA EL CHAT*/}
          <main>
            {/*SECTION CON TITLE Y SUB-TITLE*/}
            <section>
              <h1 className="text-[44px] text-center !pb-4 md:text-left">
                <strong className="text-[#FFE70E]">Iniciar</strong> dialogo
              </h1>
              <p className="text-[1rem] text-center md:text-left">
                Aparte de nuestro <strong>chatAI</strong>, dejamos los <br />
                principales teléfonos disponibles para tu <br /> comodidad y
                bienestar.
              </p>
            </section>
            {/*SECTION CON BUTTON PARA EMPEZAR EL CHAT*/}

            <section className="text-center">
              <button className="md:!mt-34 md:!px-4.5 md:!py-1 md:!ml-40 d:flex !mt-10 !ml-8 !px-4 !py-2 flex gap-4 items-center font-medium bg-[#FFE70E] rounded-2xl hover:bg-black hover:text-white transition">
                Comenzar conversación
                <BsChatLeftText />
              </button>
            </section>
          </main>

          {/*ASIDE RIGHT CON IMAGENEN 3 */}
          <aside className="md:justify-center md:!pl-[50vh] md:items-center md:text-left">
            <img src={src} alt={title} width={310} />
          </aside>
        </div>

        {/*SECTION CON CARROUSEL */}
        <section className=" w-full overflow-hidden !px-4 !py-4 bg-[#FFE70E] !mb-4 ">
          <span className="font-bold inline-block whitespace-nowrap animate-move">
            Abrirse es un gran paso hacia el bienestar emocional,&nbsp;&nbsp;
            <a href="#" className="font-bold text-white">
              llama 024 &nbsp;&nbsp;
            </a>
            Abrirse es un gran paso hacia el bienestar emocional,&nbsp;&nbsp;
            <a href="#" className="font-bold text-white">
              llama 024 &nbsp; &nbsp;
            </a>
            Abrirse es un gran paso hacia el bienestar emocional, &nbsp;&nbsp;
            <a href="#" className="font-bold text-white">
              llama 024&nbsp;&nbsp;
            </a>
          </span>
        </section>
      </UseMotion>
    </div>
  );
};

export default ContainerMain;
