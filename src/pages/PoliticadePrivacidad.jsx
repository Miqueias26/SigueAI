import React from "react";
import Motion from "../animations/Motion";

const PoliticadePrivacidad = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <Motion type="fadeIn">
        <div className="bg-[#D1D1D1] w-screen">
          <h1 className=" text-center py-4 text-2xl md:text-3xl font-bold">
            Política de Privacidad
          </h1>
        </div>
        <div className="max-w-3xl w-full bg-white p-4 space-y-8 ">
          <p>
            Última actualización:
            <span className="font-semibold"> [Marzo de 2025]</span>
          </p>
          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              1. Información que Recopilamos
            </h2>
            <p className="leading-relaxed">
              SigueAI puede recopilar los siguientes datos cuando interactúas
              con nuestro servicio:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                <strong>Datos proporcionados por el usuario:</strong> mensajes
                enviados al chatbot.
              </li>
              <li>
                <strong>Datos de uso:</strong> información sobre cómo
                interactúas con la plataforma.
              </li>
              <li>
                <strong>Datos técnicos:</strong> dirección IP, tipo de
                dispositivo, navegador, etc.
              </li>
            </ul>
          </div>
          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              2. Uso de la Información
            </h2>
            <p className="leading-relaxed">
              Usamos la información recopilada para mejorar la experiencia del
              usuario, garantizar la seguridad del servicio y realizar análisis
              anónimos.
            </p>
          </div>

          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              3. Protección de tu Información
            </h2>
            <p className="leading-relaxed">
              Implementamos medidas de seguridad para proteger tus datos contra
              accesos no autorizados.
            </p>
          </div>

          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              4. Confidencialidad y Anonimato
            </h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                No compartimos tus conversaciones con terceros con fines
                comerciales.
              </li>
              <li>No almacenamos información personal identificable.</li>
              <li>
                Tus interacciones son procesadas de forma anónima y segura.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              5. Limitaciones del Servicio
            </h2>
            <p className="leading-relaxed">
              SigueAI es un chatbot de apoyo emocional y no sustituye la ayuda
              profesional.
            </p>
          </div>

          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              6. Cambios en la Política de Privacidad
            </h2>
            <p className="leading-relaxed">
              Podemos actualizar esta política ocasionalmente. Te notificaremos
              sobre cambios importantes.
            </p>
          </div>
          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">
              7. Aceptación de la Política
            </h2>
            <p className="leading-relaxed">
              Al utilizar SigueAI, aceptas esta Política de Privacidad. Si no
              estás de acuerdo, por favor no utilices el servicio.
            </p>
          </div>
          <div className="space-y-6 text-left">
            <h2 className="md:text-2xl font-semibold ">7. Contacto</h2>
            <p className="leading-relaxed">
              Si tienes dudas sobre esta Política de Privacidad, puedes
              contactarnos en: <strong>[SigueAIcontact@gmail.com]</strong>
            </p>
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default PoliticadePrivacidad;
