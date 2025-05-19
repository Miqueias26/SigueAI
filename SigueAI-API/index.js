import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

dotenv.config();
console.log('OPENAI_API_KEY processed:', process.env.OPENAI_API_KEY ? 'OK' : 'CONNECTION REFUSED');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://sigueai-web.vercel.app'
  ],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('/api/mensaje', cors(corsOptions));
app.use(express.json());

const systemPrompt = `
Eres SigueAI, un asistente emocional entrenado para brindar apoyo emocional`

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
          ...(process.env.OPENAI_PROJECT_ID && { 'OpenAI-Project': process.env.OPENAI_PROJECT_ID }),
        }
      }
    );

    const respuesta = response.data.choices[0].message.content.trim();
    res.json({ respuesta });

  } catch (error) {
    console.error('Error al procesar la solicitud:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Error al procesar la solicitud.' });
  }
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
