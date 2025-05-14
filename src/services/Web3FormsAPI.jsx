import React, { useState, useEffect } from "react";

export default function Web3FormsAPI() {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (result) {
      setShowResult(true);

      const timer = setTimeout(() => {
        setShowResult(false);
        setResult("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [result]);

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
    event.target.reset();
  };

  return (
    <div className="items-center bg-gray-100 px-4 py-10 rounded-md">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-full max-w-lg text-black font-extralight"
      >
        {[
          { label: "Nombre", type: "text", name: "name" },
          { label: "Email", type: "email", name: "email" },
        ].map((input, index) => (
          <section key={index} className="flex flex-col mx-4">
            <label htmlFor={input.name} className="text-sm font-extralight">
              {input.label}
            </label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              required
              className="h-10 rounded-lg pr-40 outline-0 focus:ring-2 focus:ring-yellow-400"
            />
          </section>
        ))}
        <section className="flex flex-col mx-4">
          <label htmlFor="message" className="text-sm font-extralight">
            Mensaje
          </label>
          <textarea
            className="outline-0 focus:ring-2 focus:ring-yellow-400 rounded-md resize-none"
            id="message"
            name="message"
            rows="6"
            required
          ></textarea>
        </section>
        <section className="text-center items-center justify-center flex flex-col">
          <button
            type="submit"
            className="hover:bg-gradient-to-r hover:from-[#070707] hover:to-[#6f6f6f] hover:text-white bg-[#FFE70E]
              py-2 px-6 rounded-lg cursor-pointer text-sm flex items-center text-center gap-2"
          >
            Enviar Mensaje
          </button>
        </section>
      </form>

      {showResult && (
        <span
          className="mt-12 ml-28 text-sm font-extralight px-4 py-2 rounded-lg absolute flex gap-4 transition-opacity duration-500  "
          style={{
            backgroundColor: result.includes("Reseña recibida")
              ? "#10B981"
              : result
              ? "#EF4444"
              : "transparent",
          }}
        >
          {result}
        </span>
      )}
    </div>
  );
}
