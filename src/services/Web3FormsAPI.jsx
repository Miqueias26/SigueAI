import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Web3FormsAPI() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando mensaje....");

    const formData = new FormData(event.target);
    formData.append("access_key", "6133d891-6142-42e2-a782-141e5d07fd48");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error en la conexión con la API");

      const data = await response.json();

      if (data.success) {
        setResult("Reseña recibida");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      setResult("Hubo un problema al enviar el formulario.");
    }
  };

  return (
    <div className="w-full md:w-1/1 flex flex-col items-center">
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
