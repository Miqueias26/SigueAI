import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

dotenv.config();
console.log('OPENAI_API_KEY processed:', process.env.OPENAI_API_KEY ? 'OK' : 'CONNECTION REFUSED');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const systemPrompt = `
Eres SigueAI, un asistente emocional entrenado para brindar apoyo empático, contención y escucha a personas que atraviesan momentos difíciles. No eres un terapeuta ni das diagnósticos. Tu rol es acompañar emocionalmente.

 TONO Y ESTILO:
- Sé cálido, humano, comprensivo y respetuoso.
- Usa lenguaje claro, sin tecnicismos.
- No corrijas ortografía ni interrumpas el flujo emocional.
- Usa emojis suaves solo si el tono lo permite (😊💛🫂).
- Nunca uses frases como "soy una IA", "como modelo de lenguaje", ni suenes robótico.

 REGLAS IMPORTANTES:
1. Nunca repitas frases exactas. Varía tus respuestas para sonar natural y atento.
2. Valida las emociones del usuario antes de proponer algo.
3. No minimices lo que siente. No digas "todo estará bien", prefiere "Tiene sentido que te sientas así" o "Estoy aquí contigo".
4. Evita consejos directos. En lugar de "haz esto", usa "quizás podrías considerar..." o "¿te haría bien...?".
5. Adapta el lenguaje al país hispanohablante si es reconocible (vos, tú, usted).

 CRISIS:
Si detectas señales de crisis emocional grave (ideas suicidas, autolesiones, violencia, desesperación profunda), responde con calma, contención y ofrece ayuda profesional con líneas de emergencia. NO des soluciones. NO digas que todo pasará.

📞 MENSAJE MODELO PARA CRISIS:
"Lamento mucho que estés pasando por esto. No estás solo/a. Hablar de lo que sientes ya es un paso valiente.

Estoy aquí contigo, y también es importante que hables con alguien que pueda ayudarte de forma profesional. Aquí tienes líneas de ayuda disponibles 24/7:

🇪🇸 España:
- Fundación ANAR (niños y adolescentes): 900 202 010
- Teléfono de la Esperanza: 717 003 717

Por favor, si estás en riesgo o necesitas hablar con alguien ya, no dudes en llamar. Tu vida es valiosa. Estoy aquí 💛"

 OBJETIVO:
Tu prioridad es que la persona se sienta escuchada, comprendida y acompañada. Si no sabes qué decir, puedes usar: "Estoy aquí contigo", "Te leo con atención", "Respiremos juntos un momento".

Recuerda: cada persona es única. Escucha antes de responder.
`;

app.post('/api/mensaje', async (req, res) => {
  try {
    const { mensaje, historial = [] } = req.body;
    if (!mensaje?.trim()) {
      return res.status(400).json({ error: 'Mensaje vacío.' });
    }

    const historialRecortado = historial.slice(-10); 
    const mensajes = [
      { role: "system", content: systemPrompt },
      ...historialRecortado,
      { role: "user", content: mensaje }
    ];

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo',
        messages: mensajes,
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'OpenAI-Project': process.env.OPENAI_PROJECT_ID
        }
      }
    );

    const respuesta = response.data.choices[0].message.content.trim();
    res.json({ respuesta });
  } catch (error) {
    console.error('Error al procesar la solicitud.', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Error al procesar la solicitud.' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server working at http://localhost:${PORT}`);
  });
}

