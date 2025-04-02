// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { API_KEY_GEMINI } = require('./config');
// const { Client, GatewayIntentBits } = require('discord.js');

// const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

// // Configuración de Discord
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// async function classify_text(msg) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent(msg);
//   const response = await result.response;
//   const text = await response.text().trim();
//   console.log(text.length, text);

//   return text;
// }

// client.on('messageCreate', async (message) => {
//   if (message.author.bot) return; // Ignorar mensajes del bot

//   if (message.content.toLowerCase() === '!saludar') {
//     // El comando que el usuario usará en Discord
//     const saludoPrompt = "Genera un mensaje de saludo para todos los miembros del servidor de Discord.";

//     // Procesar el mensaje con Gemini
//     const saludoIA = await classify_text(saludoPrompt);
    
//     // Enviar el mensaje generado a Discord
//     message.channel.send(saludoIA);
//   }
// });

// // Loguear al bot
// client.login('MTM1NzA1MjYzMTgwMTEzOTI0Mw.G_5ISt.9VdohLMpsSDzTwUCUgPTUPsH7ktT-6PVpm6udo');


// Con despedida




// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { API_KEY_GEMINI } = require('./config');
// const { Client, GatewayIntentBits } = require('discord.js');

// const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

// // Configuración de Discord
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// async function classify_text(msg) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent(msg);
//   const response = await result.response;
//   const text = await response.text().trim();
//   console.log(text.length, text);

//   return text;
// }

// client.on('messageCreate', async (message) => {
//   if (message.author.bot) return; // Ignorar mensajes del bot

//   // Comando para saludar
//   if (message.content.toLowerCase() === '!saludar') {
//     const saludoPrompt = "Genera un mensaje de saludo para todos los miembros del servidor de Discord.";

//     // Procesar el mensaje con Gemini para el saludo
//     const saludoIA = await classify_text(saludoPrompt);
    
//     // Enviar el mensaje generado a Discord
//     message.channel.send(saludoIA);
//   }

//   // Comando para despedirse
//   if (message.content.toLowerCase() === '!despedir') {
//     const despedirPrompt = "Genera un mensaje despidiéndote y deseando un feliz día a todos los miembros.";

//     // Procesar el mensaje con Gemini para la despedida
//     const despedirIA = await classify_text(despedirPrompt);

//     // Enviar el mensaje generado a Discord
//     message.channel.send(despedirIA);
//   }
// });

// // Loguear al bot
// client.login('MTM1NzA1MjYzMTgwMTEzOTI0Mw.G_5ISt.9VdohLMpsSDzTwUCUgPTUPsH7ktT-6PVpm6udo');


// Con prompt



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

// Crear interfaz para ingresar mensajes desde el visual
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

// Comando para saludar
async function saludarIA() {
  const saludoPrompt = "Genera un mensaje de saludo para todos los miembros del servidor de Discord.";
  const saludoIA = await classify_text(saludoPrompt);

  // Asumiendo que el bot ya está logueado, le envías el mensaje a tu canal específico
  const channel = await client.channels.fetch('834091210355245106');
  channel.send(saludoIA);
}

// Comando para despedirse
async function despedirIA() {
  const despedirPrompt = "Genera un mensaje despidiéndote y deseando un feliz día a todos los miembros.";
  const despedirIA = await classify_text(despedirPrompt);

  // Asumiendo que el bot ya está logueado, le envías el mensaje a tu canal específico
  const channel = await client.channels.fetch('834091210355245106');
  channel.send(despedirIA);
}

// Permitir que el usuario ingrese comandos desde la consola
rl.question('Envía un mensaje saludando a los miembros del canal\n', async (input) => {
  if (input.toLowerCase() === 'saludar') {
    await saludarIA();
  } else if (input.toLowerCase() === 'despedir') {
    await despedirIA();
  } else {
    console.log('Comando no reconocido. Escribe "saludar" o "despedir".');
  }
  rl.close(); // Cierra la interfaz después de procesar la entrada
});

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
});

// Loguear al bot
client.login('MTM1NzA1MjYzMTgwMTEzOTI0Mw.G_5ISt.9VdohLMpsSDzTwUCUgPTUPsH7ktT-6PVpm6udo');