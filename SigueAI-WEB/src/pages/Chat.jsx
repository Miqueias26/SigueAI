import { useState, useEffect } from "react";
import axios from "axios";
import { PiChatCenteredDots } from "react-icons/pi";
import { IoSendOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Motion from "../animations/Motion";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const CHAT_HISTORY_KEY = "sigueAI_chat_history";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [closeChat, setCloseChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        setMessages(parsedHistory);
      } catch (error) {
        console.error("Error al parsear el historial:", error);
        localStorage.removeItem(CHAT_HISTORY_KEY);
      }
    }
  }, []);

  const handleCloseChat = () => {
    setCloseChat(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const formatHistoryForAPI = () => {
    return messages
      .filter((msg) => msg.text)
      .map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${backendURL}/api/mensaje`, {
        mensaje: input,
        historial: formatHistoryForAPI(),
      });

      const aiMessage = { sender: "ai", text: response.data.respuesta };
      const finalMessages = [...updatedMessages, aiMessage];

      setMessages(finalMessages);
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(finalMessages));
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      const errorMessage = {
        sender: "ai",
        text: "Ups, algo salió mal. Por favor intenta nuevamente.",
      };
      const finalMessages = [...updatedMessages, errorMessage];
      setMessages(finalMessages);
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(finalMessages));
    } finally {
      setIsLoading(false);
    }
  };

  const clearChatHistory = () => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres borrar el historial de conversación?"
      )
    ) {
      setMessages([]);
      localStorage.removeItem(CHAT_HISTORY_KEY);
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
            <button
              onClick={clearChatHistory}
              className="text-xs text-gray-300 hover:text-white"
              title="Borrar historial"
            >
              Limpiar
            </button>
            <button onClick={handleCloseChat}>
              <IoIosCloseCircleOutline size={24} color="white" />
            </button>
          </section>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="flex flex-col space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-10">
                <p>Envía un mensaje para comenzar la conversación</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <Motion type="fadeIn">
                  <div
                    className={`relative max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg shadow break-words whitespace-pre-wrap ${
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

            {isLoading && (
              <div className="flex justify-start">
                <div className="relative max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg shadow bg-white">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
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
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className="p-2 hover:text-[#fae635] transition-colors"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <ImSpinner2 className="animate-spin" size={20} />
              ) : (
                <IoSendOutline size={24} />
              )}
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
