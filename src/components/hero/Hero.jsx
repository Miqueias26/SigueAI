import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import Images from "../../assets/images/imagedata";
import Motion from "../../animations/Motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

const Hero = () => {
  const { image2, image3, image4, image5 } = Images;
  const [LoadChat, setLoadChat] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setLoadChat(true);
    setTimeout(() => {
      navigate("/Chat");
    }, 3000);
  };
  return (
    <div>
      <Motion type="scrollReveal" scroll>
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
        <Motion type="scrollReveal" scroll>
          <section className="items-center" id="dialogar">
            <section className="flex gap-2 justify-center text-3xl md:text-5xl p-2 ">
              <p className="text-[#FFE70E]">Bienestar</p>
              <p className="">siempre</p>
            </section>
          </section>
        </Motion>
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:gap-48 font-extralight">
          <aside>
            <Motion type="scrollReveal" scroll>
              <section className="flex flex-col justify-center text-center font-extralight">
                <p className=" md:max-w-lg">
                  Además de nuestro chatAI, ponemos a tu disposición los
                  principales teléfonos de ayuda emocional y prevención del
                  suicidio.
                </p>
              </section>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClick}
                  className=" text-black flex px-10 py-1 gap-2 items-center font-normal bg-[#FFE70E] rounded-3xl hover:bg-black hover:text-white "
                >
                  Iniciar dialogo
                  <IoChatbubbleOutline />
                </button>
              </div>
            </Motion>
          </aside>
          <aside>
            <Motion type="scrollReveal" scroll>
              <img src={image2.src} alt={image2.title} width={300} />
            </Motion>
          </aside>
        </div>
        <Motion type="scrollReveal" scroll>
          <div className="p-[1px] bg-zinc-100"></div>
        </Motion>
        <div className="p-8 ">
          <Motion type="scrollReveal" scroll>
            <div className="flex flex-col justify-center text-center gap-4 py-10 md:text-left md:justify-between md:flex-row  ">
              <section className="flex flex-col justify-center text-center font-extralight ">
                <p className=" text-[1.1rem] pb-6 md:pb-14">
                  Una <strong className="text-[#FFE70E]">landing page </strong>
                  diseñada para <br /> ofrecer bienestar emocional.
                </p>
                <img
                  src={image3.src}
                  alt={image3.title}
                  className="w-[327px] h-[218px] rounded-[10px]"
                />
              </section>

              <section className="flex flex-col justify-center text-center font-extralight">
                <p className=" text-[1.1rem] pb-6 md:pb-14">
                  Una <strong className="text-[#FFE70E]">AI diseñada </strong>
                  para escuchar
                  <br /> comprender y guiar con empatía.
                </p>
                <img
                  src={image4.src}
                  alt={image4.title}
                  className="w-[327px] h-[218px] rounded-[10px] "
                />
              </section>

              <section className="flex flex-col justify-center text-center font-extralight">
                <p className=" text-[1.1rem] pb-6 md:pb-14">
                  Conversaciones
                  <strong className="text-[#FFE70E]"> guiadas </strong>
                  por <br /> inteligencia artificial.
                </p>
                <img
                  src={image5.src}
                  alt={image5.title}
                  className="w-[327px] h-[218px] rounded-[10px] "
                />
              </section>
            </div>
          </Motion>
        </div>
        {LoadChat && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg max-w-sm mx-auto text-center animate-pulse">
              <p className="text-gray-600 py-2">
                Cargando tu espacio de conversación...
              </p>
              <div className="flex justify-center">
                <ImSpinner2 className="animate-spin text-gray-600" />
              </div>
            </div>
          </div>
        )}
      </Motion>
    </div>
  );
};

export default Hero;
