import React from "react";
import Images from "../../assets/images/imagedata";
import UseMotion from "../../helful/UseMotion";

{
  /*Las importaciones possuen la imagen3, image4, image5 del proyecto,
    icons y animaciones con Frame-motion */
}

const ContainerInfo = () => {
  const { image3, image4, image5 } = Images;
  return (
    <div className="p-8 ">
      <UseMotion type="fadeIn">
        {/*DIV ACIMA SOLO DE COMPARTIMENTO*/}
        {/*SECTION AABAJO RESPONSABLE POR EL TITLE */}

        {/*DIV PARENT AABAJO RESPONSABLE POR LAS 3 SECTIONS CON PARAFO Y IMAGENES */}
        <div className="flex flex-col justify-center text-center gap-4 py-10 md:text-left md:justify-between md:flex-row ">
          {/*SECTION 1 CON PARAFO Y IMAGENEN 3  */}
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
          {/*SECTION 1 CON PARAFO Y IMAGENEN 4  */}
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
          {/*SECTION 1 CON PARAFO Y IMAGENEN 5 */}
          <section className="flex flex-col justify-center text-center">
            <p className="font-light text-[1.1rem] pb-6 md:pb-14">
              Conversaciones <strong className="text-[#FFE70E]">guiadas</strong>
              por <br /> inteligencia artificial.
            </p>
            <img
              src={image5.src}
              alt={image5.title}
              className="w-[327px] h-[218px] rounded-[10px] "
            />
          </section>
        </div>
      </UseMotion>
    </div>
  );
};

export default ContainerInfo;
