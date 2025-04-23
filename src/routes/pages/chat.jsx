// Chat.jsx
import { useState } from "react";
import axios from "axios";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/mensagem", {
        mensagem: input, // Corrigido: nome da propriedade
      });

      const aiMessage = { sender: "ai", text: response.data.resposta }; // Corrigido: campo do backend
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage = { sender: "ai", text: "Desculpe, houve um erro." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-20">
      <div className="h-96 overflow-y-scroll p-2 border-b border-b-gray-300 bg-gray-100 rounded-t-lg">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`relative max-w-xs px-4 py-2 rounded-lg shadow break-words whitespace-pre-wrap 
            ${
              msg.sender === "user"
                ? "bg-[#fae635] text-black after:content-[''] after:absolute after:top-3 after:right-[-8px] after:border-8 after:border-transparent after:border-l-[#fae635]"
                : "bg-white text-black before:content-[''] before:absolute before:top-3 before:left-[-8px] before:border-8 before:border-transparent before:border-r-white"
            }`}
            >
              <strong>{msg.sender === "user" ? "Tú" : "SigueAI"}</strong>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2 border border-gray-200 rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="border border-gray-200 p-2 w-full focus:outline-none tracking-widest text-center"
          placeholder="Escribe tu mensaje aquí..."
        />
        <button
          onClick={sendMessage}
          className="hover:bg-gradient-to-r hover:from-[#070707] hover:to-[#6f6f6f] hover:text-white bg-gradient-to-r from-[#FFE90E] to-[#FFB731] text-white px-2 py-2"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}

export default Chat;
