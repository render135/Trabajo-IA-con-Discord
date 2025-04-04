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



// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { API_KEY_GEMINI } = require('./config');
// const { Client, GatewayIntentBits } = require('discord.js');
// const readline = require('readline');

// const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

// // Configuración de Discord
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// // Crear interfaz para ingresar mensajes desde el visual
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Función para interactuar con la IA
// async function classify_text(msg) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent(msg);
//   const response = await result.response;
//   const text = await response.text().trim();
//   console.log(text.length, text);

//   return text;
// }

// // Comando para saludar
// async function saludarIA() {
//   const saludoPrompt = "Genera un mensaje de saludo para todos los miembros del servidor de Discord.";
//   const saludoIA = await classify_text(saludoPrompt);

//   // Asumiendo que el bot ya está logueado, le envías el mensaje a tu canal específico
//   const channel = await client.channels.fetch('834091210355245106');
//   channel.send(saludoIA);
// }

// // Comando para despedirse
// async function despedirIA() {
//   const despedirPrompt = "Genera un mensaje despidiéndote y deseando un feliz día a todos los miembros.";
//   const despedirIA = await classify_text(despedirPrompt);

//   // Asumiendo que el bot ya está logueado, le envías el mensaje a tu canal específico
//   const channel = await client.channels.fetch('834091210355245106');
//   channel.send(despedirIA);
// }

// // Permitir que el usuario ingrese comandos desde la consola
// rl.question('¿Cuando comenzó la segunda guerra mundial?\n', async (input) => {
//   if (input.toLowerCase() === 'saludar') {
//     await saludarIA();
//   } else if (input.toLowerCase() === 'despedir') {
//     await despedirIA();
//   } else {
//     console.log('Comando no reconocido. Escribe "saludar" o "despedir".');
//   }
//   rl.close(); // Cierra la interfaz después de procesar la entrada
// });

// // Configuración del bot de Discord
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
// client.login('Token');





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

// // Función para interactuar con la IA
// async function classify_text(msg) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent(msg);
//   const response = await result.response;
//   const text = await response.text().trim();
//   console.log(text.length, text);

//   return text;
// }

// // Configuración del bot de Discord
// client.on('messageCreate', async (message) => {
//   if (message.author.bot) return; // Ignorar mensajes del bot

//   // Si la pregunta es "¿Cuándo comenzó la segunda guerra mundial?"
//   if (message.content.toLowerCase() === '¿cuando comenzó la segunda guerra mundial?') {
//     // Procesar la pregunta con Gemini
//     const respuesta = await classify_text("¿Cuándo comenzó la segunda guerra mundial?");
    
//     // Enviar la respuesta generada a Discord
//     message.channel.send(respuesta);
//   }

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
// client.login('Token');



//con !preguntar


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

// // Función para interactuar con la IA
// async function classify_text(msg) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent(msg);
//   const response = await result.response;
//   const text = await response.text().trim();
//   console.log(text.length, text);

//   return text;
// }

// // Configuración del bot de Discord
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

//   // Comando para preguntar
//   if (message.content.toLowerCase().startsWith('!preguntar')) {
//     // Obtener la pregunta del usuario, eliminando "!preguntar" al inicio
//     const pregunta = message.content.slice('!preguntar'.length).trim();

//     if (pregunta) {
//       // Procesar la pregunta con Gemini
//       const respuesta = await classify_text(pregunta);
      
//       // Enviar la respuesta generada a Discord
//       message.channel.send(respuesta);
//     } else {
//       // Si no se proporciona pregunta, dar un mensaje de error
//       message.channel.send("¡Por favor, proporciona una pregunta después del comando `!preguntar`!");
//     }
//   }
// });

// // Loguear al bot
// client.login('Token');




// Con funcionalidad de terminal



// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { API_KEY_GEMINI } = require('./config');
// const { Client, GatewayIntentBits } = require('discord.js');
// const readline = require('readline');

// const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

// // Configuración de Discord
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// // Crear interfaz para ingresar mensajes desde la terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Función para interactuar con la IA
// async function classify_text(msg) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent(msg);
//   const response = await result.response;
//   const text = await response.text().trim();
//   console.log(text.length, text);

//   return text;
// }

// // Configuración del bot de Discord
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

//   // Comando para preguntar
//   if (message.content.toLowerCase().startsWith('!preguntar')) {
//     // Obtener la pregunta del usuario, eliminando "!preguntar" al inicio
//     const pregunta = message.content.slice('!preguntar'.length).trim();

//     if (pregunta) {
//       // Procesar la pregunta con Gemini
//       const respuesta = await classify_text(pregunta);
      
//       // Enviar la respuesta generada a Discord
//       message.channel.send(respuesta);
//     } else {
//       // Si no se proporciona pregunta, dar un mensaje de error
//       message.channel.send("¡Por favor, proporciona una pregunta después del comando `!preguntar`!");
//     }
//   }
// });

// // Función para que el bot responda desde la terminal
// async function interactuarConTerminal() {
//   rl.question('Escribe tu mensaje para la IA: ', async (input) => {
//     // Enviar la entrada a la IA para generar la respuesta
//     const respuestaIA = await classify_text(input);

//     // Asumimos que quieres enviar la respuesta a un canal específico de Discord
//     const channel = await client.channels.fetch('1357777627884163103');  // Cambia este ID con el de tu canal de Discord
//     channel.send(respuestaIA);

//     // Esperar la siguiente entrada en la terminal
//     interactuarConTerminal();
//   });
// }

// // Loguear al bot
// client.login('Token').then(() => {
//   // Iniciar la interacción con la terminal después de que el bot se haya logueado
//   interactuarConTerminal();
// });