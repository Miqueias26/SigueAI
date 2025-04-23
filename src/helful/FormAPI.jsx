import React, { useState } from "react"; // Importa React y el hook useState
import { BiMailSend } from "react-icons/bi"; // Importa icono de envío
import { MdOutlineMarkEmailRead } from "react-icons/md"; // Importa icono de recibido

export default function FormAPI() {
  const [result, setResult] = useState(""); // Estado para el mensaje de resultado

  const onSubmit = async (event) => {
    event.preventDefault(); // Previene recarga de la página
    setResult("Enviando mensaje...."); // Muestra mensaje de envío

    const formData = new FormData(event.target); // Obtiene datos del formulario
    formData.append("access_key", "6133d891-6142-42e2-a782-141e5d07fd48"); // Agrega clave de acceso

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error en la conexión con la API"); // Manejo de error

      const data = await response.json(); // Convierte respuesta a JSON

      if (data.success) {
        setResult("Reseña recibida"); // Mensaje de éxito
        event.target.reset(); // Resetea el formulario
      } else {
        console.error("Error", data); // Muestra error en consola
        setResult(data.message); // Muestra mensaje de error
      }
    } catch (error) {
      console.error("Error en el envío:", error); // Captura error
      setResult("Hubo un problema al enviar el formulario."); // Mensaje de error
    }
  };

  return (
    <div className="w-full md:w-1/1 flex flex-col items-center">
      {/* FORMULARIO */}
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-lg">
        {[
          { label: "NOMBRE", type: "text", name: "name" },
          { label: "EMAIL", type: "email", name: "email" },
        ].map((input, index) => (
          <section key={index} className="flex flex-col mx-4">
            <label htmlFor={input.name} className="text-sm">
              {input.label}:
            </label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              required
              className="h-10 bg-gray-100 border-0 rounded-lg px-2 outline-0 focus:ring-2 focus:ring-yellow-400"
            />
          </section>
        ))}
        <section className="flex flex-col mx-4">
          <label htmlFor="message" className="text-sm">
            MENSAJE:
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-gray-100 border-0 rounded-lg p-2 outline-0 focus:ring-2 focus:ring-yellow-400"
            rows="5"
            required
          ></textarea>
        </section>
        <section className="text-center">
          {/* BOTÓN DE ENVÍO */}
          <button
            type="submit"
            className="hover:bg-gradient-to-r hover:from-[#070707] hover:to-[#6f6f6f] hover:text-white  bg-gradient-to-r from-[#FFE90E] to-[#FFB731]
                 py-2 px-6 rounded-lg cursor-pointer font-semibold text-sm flex items-center justify-center gap-2 md:ml-4 ml-20"
          >
            <BiMailSend size={20} />
            Enviar reseña
          </button>
        </section>
      </form>
      {/* MENSAJE DE RESPUESTA */}
      <span
        className="mt-4 text-sm font-medium px-4 py-2 rounded-lg text-white absolute top-2 md:top-30 md:right-20 flex gap-4"
        style={{
          backgroundColor: result.includes("Reseña recibida")
            ? "#10B981"
            : result
            ? "#EF4444"
            : "transparent",
        }}
      >
        {result}
        <MdOutlineMarkEmailRead size={20} />
      </span>
    </div>
  );
}
