import { useState } from "react";
import axios from "axios";
import { PiChatCenteredDots } from "react-icons/pi";
import { IoSendOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Motion from "../animations/Motion";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [closeChat, setCloseChat] = useState(false);
  const navigate = useNavigate();

  const handleCloseChat = () => {
    setCloseChat(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "https://sigueai.vercel.app/api/mensaje",
        {
          mensaje: input,
        }
      );

      const aiMessage = { sender: "ai", text: response.data.respuesta };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(
        "Lo sentimos, ocurrió un error al enviar tu mensaje.",
        error
      );
      const errorMessage = {
        sender: "ai",
        text: "Ups, algo salió mal. Estamos trabajando para solucionarlo.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Motion type="fadeIn">
      <div className="flex flex-col h-[90vh] max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
        <div className="flex justify-between p-4 text-white bg-black rounded-t-lg">
          <section className="flex items-center gap-2">
            <PiChatCenteredDots
              size={38}
              className="bg-[#fae635] rounded-3xl p-2"
            />
            <section className="font-extralight text-sm">
              <p className="font-medium">CHATEAR CON</p>
              <p>SigueAI agente de apoyo emocional</p>
            </section>
          </section>
          <section className="flex items-center gap-4">
            <button onClick={handleCloseChat}>
              <IoIosCloseCircleOutline size={24} color="white" />
            </button>
          </section>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="flex flex-col space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <Motion type="fadeIn">
                  <div
                    className={`relative max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg shadow break-words whitespace-pre-wrap 
                  ${
                    msg.sender === "user"
                      ? "bg-[#fae635] text-black after:content-[''] after:absolute after:top-3 after:right-[-8px] after:border-8 after:border-transparent after:border-l-[#fae635]"
                      : "bg-white text-black before:content-[''] before:absolute before:top-3 before:left-[-8px] before:border-8 before:border-transparent before:border-r-white"
                  }`}
                  >
                    <strong className="font-semibold text-sm">
                      {msg.sender === "user" ? "Tú" : "SigueAI"}
                    </strong>
                    <p className="font-extralight">{msg.text}</p>
                  </div>
                </Motion>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 p-4 bg-white border-t border-gray-200 rounded-b-lg">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-4 py-2 border border-gray-200 focus:outline-none rounded-full font-extralight"
              placeholder="Escribe aquí..."
            />
            <button
              onClick={sendMessage}
              className="p-2 hover:text-[#fae635] transition-colors"
              disabled={!input.trim()}
            >
              <IoSendOutline size={24} />
            </button>
          </div>
        </div>

        {closeChat && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg max-w-sm mx-auto text-center animate-pulse">
              <p className="text-gray-800">¡Gracias!</p>
              <p className="text-gray-600 py-2">
                Si necesitas hablar nuevamente, estamos aquí para ti.
              </p>
              <div className="flex justify-center">
                <ImSpinner2 className="animate-spin text-gray-600" />
              </div>
            </div>
          </div>
        )}
      </div>
    </Motion>
  );
};

export default Chat;
