const { GoogleGenerativeAI } = require("@google/generative-ai");
const { API_KEY_GEMINI } = require('./config');
const { Client, GatewayIntentBits } = require('discord.js');
const readline = require('readline');

const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

// Configuración de Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Crear interfaz para ingresar mensajes desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para interactuar con la IA
async function classify_text(msg) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const result = await model.generateContent(msg);
  const response = await result.response;
  const text = await response.text().trim();
  console.log(text.length, text);

  return text;
}

// Configuración del bot de Discord
client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignorar mensajes del bot

  // Comando para saludar
  if (message.content.toLowerCase() === '!saludar') {
    const saludoPrompt = "Genera un mensaje de saludo para todos los miembros del servidor de Discord.";

    // Procesar el mensaje con Gemini para el saludo
    const saludoIA = await classify_text(saludoPrompt);

    // Enviar el mensaje generado a Discord
    message.channel.send(saludoIA);
  }

  // Comando para despedirse
  if (message.content.toLowerCase() === '!despedir') {
    const despedirPrompt = "Genera un mensaje despidiéndote y deseando un feliz día a todos los miembros.";

    // Procesar el mensaje con Gemini para la despedida
    const despedirIA = await classify_text(despedirPrompt);

    // Enviar el mensaje generado a Discord
    message.channel.send(despedirIA);
  }

  // Comando para preguntar
  if (message.content.toLowerCase().startsWith('!preguntar')) {
    // Obtener la pregunta del usuario, eliminando "!preguntar" al inicio
    const pregunta = message.content.slice('!preguntar'.length).trim();

    if (pregunta) {
      // Procesar la pregunta con Gemini
      const respuesta = await classify_text(pregunta);
      
      // Enviar la respuesta generada a Discord
      message.channel.send(respuesta);
    } else {
      // Si no se proporciona pregunta, dar un mensaje de error
      message.channel.send("¡Por favor, proporciona una pregunta después del comando `!preguntar`!");
    }
  }
});

// Función para que el bot responda desde la terminal
async function interactuarConTerminal() {
  rl.question('Escribe tu mensaje para la IA: ', async (input) => {
    // Enviar la entrada a la IA para generar la respuesta
    const respuestaIA = await classify_text(input);

    // Asumimos que quieres enviar la respuesta a un canal específico de Discord
    const channel = await client.channels.fetch('ID del canal');  // Cambia este ID con el de tu canal de Discord
    channel.send(respuestaIA);

    // Esperar la siguiente entrada en la terminal
    interactuarConTerminal();
  });
}

// Loguear al bot
client.login('Token de discord').then(() => {
  // Iniciar la interacción con la terminal después de que el bot se haya logueado
  interactuarConTerminal();
});