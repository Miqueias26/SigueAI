import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import Images from "../../assets/images/imagedata";
import Motion from "../../animations/Motion";

const Hero = () => {
  const { image2, image3, image4, image5 } = Images;

  const handleClick = () => {
    setTimeout(() => {
      navigate("/Chat");
    }, 3000);
  };
  return (
    <div>
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

      <section className="items-center" id="dialogar">
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
              className=" text-black flex px-14 py-1 gap-2 items-center font-medium bg-[#FFE70E] rounded-3xl hover:bg-black hover:text-white "
            >
              Iniciar dialogo
              <IoChatbubbleOutline />
            </button>
          </div>
        </aside>
        <aside>
          <img src={image2.src} alt={image2.title} width={300} />
        </aside>
      </div>

      <div className="p-[1px] bg-zinc-100"></div>
      <div className="p-8 ">
        <Motion type="fadeIn">
          <div className="flex flex-col justify-center text-center gap-4 py-10 md:text-left md:justify-between md:flex-row ">
            <section className="flex flex-col justify-center text-center">
              <p className="font-light text-[1.1rem] pb-6 md:pb-14">
                Una <strong className="text-[#FFE70E]">landing page </strong>
                diseñada para <br /> ofrecer bienestar emocional.
              </p>
              <img
                src={image3.src}
                alt={image3.title}
                className="w-[327px] h-[218px] rounded-[10px] "
              />
            </section>

            <section className="flex flex-col justify-center text-center">
              <p className="font-light text-[1.1rem] pb-6 md:pb-14">
                Una <strong className="text-[#FFE70E]">AI diseñada </strong>para
                escuchar
                <br /> comprender y guiar con empatía.
              </p>
              <img
                src={image4.src}
                alt={image4.title}
                className="w-[327px] h-[218px] rounded-[10px] "
              />
            </section>

            <section className="flex flex-col justify-center text-center">
              <p className="font-light text-[1.1rem] pb-6 md:pb-14">
                Conversaciones{" "}
                <strong className="text-[#FFE70E]">guiadas</strong>
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
    </div>
  );
};

export default Hero;
