import React from "react";
import UseMotion from "../../helful/UseMotion";
import FormAPI from "../../helful/FormAPI";

{
  /* las importaciones incluen icon para button y motion para animacion en pantalla */
}
const Contactos = () => {
  return (
    <div className="md:!px-4 !py-4 md:!py-0">
      {/* ACIMA DIV PADRE RESPONSABLE POR LA CAJA PRINCIPAL, ABAJO ANIMACION */}
      <UseMotion type="fadeIn">
        {/* TITLE */}
        <h1 className="text-center  text-3xl md:text-4xl font-bold  items-center !mb-6">
          Canales de Apoyo
        </h1>
        {/* DIV CHILDEN LEFT RESPONSABLE POR LA CAJA EZQUIERDA */}
        <div className="md:flex w-full md:!px-4 justify-between gap-6">
          {/* DIV SUB-CHILDEN LEFT RESPONSABLE POR LOS CONTACTOS */}
          <aside className="md:w-1/2 flex flex-col text-center md:text-left gap-2 rounded-2xl !px-2 bg-gray-100 md:bg-transparent w-screen">
            <section>
              {/* SUBTITLE */}
              <h2 className="font-bold text-2xl !py-6">
                Teléfonos principales
              </h2>
              {/* PÁRAFO PRINCIPAL */}
              <p className="font-light">
                Estos son los principales contactos disponibles para ayuda
                inmediata. No dudes en contactar en caso de necesidad. Además,
                te dejamos un formulario para que nos
                <strong className="text-[#FFE70E]"> dejes una reseña.</strong>
              </p>
            </section>
            {/* DIV RESPONSABLE EN MAPEAR LOS LINKS DE CONTACTOS APARTADOS EN 2 SECTIONS */}
            <div className="!py-4 flex flex-col gap-4 ">
              {/* SECTION1 3 PRIMEROS CONTACTOS */}
              <section className="md:flex justify-between text-center">
                {[
                  { nombre: "Cruz Roja", telefono: "#900 107 917" },
                  { nombre: "Barandilla", telefono: "#911 385 385" },
                  { nombre: "Fundación ANAR", telefono: "#900 202 010" },
                ].map((item, index) => (
                  <div key={index} className="!pb-2">
                    <p className="font-bold">{item.nombre}</p>
                    <a
                      href={`tel:${item.telefono}`}
                      className="text-[#FFE70E] font-bold transition-all duration-300 ease-in-out 
             transform hover:scale-110 focus:scale-110"
                      aria-label={`Llamar a ${item.nombre}`}
                    >
                      {item.telefono}
                    </a>
                  </div>
                ))}
              </section>
              {/* SECTION1 2 ULTIMOS CONTACTOS */}
              <section className="md:flex justify-between text-center">
                {[
                  { nombre: "Generales", telefono: "#024" },
                  { nombre: "Samaritans", telefono: "#900 525 100" },
                  { nombre: "La Esperanza", telefono: "#717 003 717" },
                ].map((item, index) => (
                  <div key={index} className="pb-2">
                    <p className="font-bold">{item.nombre}</p>
                    <a
                      href={`tel:${item.telefono}`}
                      className="text-[#FFE70E] font-bold transition-all duration-300 ease-in-out 
             transform hover:scale-110 focus:scale-110"
                      aria-label={`Llamar a ${item.nombre}`}
                    >
                      {item.telefono}
                    </a>
                  </div>
                ))}
              </section>
            </div>
          </aside>

          {/* DIV CHILDEN RIGHT RESPONSABLE POR LA CAJA DERECHA */}
          <aside className="w-full md:w-1/2 flex flex-col items-center md:mt-0 !mt-14 !px-4 ">
            <FormAPI />
          </aside>
        </div>
      </UseMotion>
    </div>
  );
};

export default Contactos;
