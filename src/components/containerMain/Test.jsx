import React from "react";
import Images from "../../assets/images/imagedata";
import { IoChatbubbleOutline } from "react-icons/io5";
const Test = () => {
  const { src, title } = Images.image2;

  const handleClick = () => {
    setTimeout(() => {
      navigate("/Chat");
    }, 3000);
  };
  return (
    <div>
      {/*SECTION CON CARROUSEL */}
      <section className="w-full overflow-hidden px-4 py-4 bg-[#FFE70E] mb-8">
        <span className="inline-block whitespace-nowrap animate-move font-medium">
          Abrirse es un gran paso hacia el bienestar emocional,&nbsp;&nbsp;
          <a href="#" className="font-bold text-white">
            llama 024&nbsp;&nbsp;
          </a>
          Tu voz importa. Compartir es empezar a sanar,&nbsp;&nbsp;
          <a href="#" className="font-bold text-white">
            llama 717 003 717 &nbsp;&nbsp;
          </a>
          No guardes lo que pesa en tu corazón. Hablar ayuda,&nbsp;&nbsp;
          <a href="#" className="font-bold text-white">
            llama 911 385 385&nbsp;&nbsp;
          </a>
        </span>
      </section>

      <section className="items-center">
        <section className=" flex gap-2 justify-center ">
          <span className="text-[#FFE70E] md:text-5xl sm:text-2xl text-center ">
            Bienestar
          </span>
          <span className="md:text-5xl sm:text-2xl">siempre</span>
        </section>
      </section>

      <div className="flex flex-col md:flex-row justify-center items-center text-center md:gap-48">
        <aside>
          <p>
            Además de nuestro chatAI, ponemos a tu disposición los principales
          </p>
          <p>teléfonos de ayuda emocional y prevención del suicidio.</p>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleClick}
              className="  text-black flex px-14 py-1 gap-2 items-center font-medium bg-[#FFE70E] rounded-3xl hover:bg-black hover:text-white "
            >
              Iniciar dialogo
              <IoChatbubbleOutline />
            </button>
          </div>
        </aside>
        <aside>
          <img src={src} alt={title} width={300} />
        </aside>
      </div>
      <div className="p-[1px] bg-zinc-100"></div>
    </div>
  );
};

export default Test;
