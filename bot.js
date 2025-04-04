// const { Client, GatewayIntentBits } = require('discord.js');
// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// const TOKEN = 'MTM1NzA1MjYzMTgwMTEzOTI0Mw.G_5ISt.9VdohLMpsSDzTwUCUgPTUPsH7ktT-6PVpm6udo';  // Sustituye con tu token de bot

// client.once('ready', () => {
//     console.log('Bot está listo!');
// });

// client.login(TOKEN);

// client.on('ready', () => {
//     // Obtén el canal por su ID y manda un mensaje
//     const channelId = '834091210355245106';  // Sustituye con el ID del canal al que quieres enviar el mensaje
//     const channel = client.channels.cache.get(channelId);
    
//     if (channel) {
//         channel.send('No se ría, no es gracioso feo');
//     }
// });

// Con geminis


// const { Client, GatewayIntentBits } = require('discord.js');
// const { google } = require('googleapis');
// const path = require('path');

// // Configura el cliente de Discord
// const client = new Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent
//     ]
// });

// // Configura Google API (Gemini o PaLM)
// const API_KEY = 'Llave de la API';  // Sustituye con tu clave API
// const projectId = 'id del proyecto'; // ID del proyecto en Google Cloud

// const gemini = google.palm({
//     version: 'v1',
//     auth: API_KEY
// });

// // Cuando el bot se conecta a Discord
// client.once('ready', () => {
//     console.log('¡Bot conectado y listo!');
// });

// // Escuchar mensajes
// client.on('messageCreate', async (message) => {
//     if (message.author.bot) return;  // Ignorar los mensajes del bot

//     // Si el mensaje comienza con el comando "!preguntar"
//     if (message.content.toLowerCase().startsWith('!preguntar')) {
//         const question = message.content.slice(10).trim();  // Obtener la pregunta del usuario

//         if (!question) {
//             message.reply("Por favor, escribe una pregunta después de '!preguntar'.");
//             return;
//         }

//         try {
//             // Llamada a la API de Gemini (PaLM) para obtener una respuesta
//             const res = await gemini.projects.text.process({
//                 parent: `projects/${projectId}`,
//                 requestBody: {
//                     model: 'gemini-1',  // Asegúrate de usar el modelo correcto
//                     prompt: question
//                 }
//             });

//             // Respuesta generada por Gemini
//             const answer = res.data.result;

//             // Enviar la respuesta al canal de Discord
//             message.reply(answer);
//         } catch (error) {
//             console.error('Error en la solicitud a Gemini:', error);
//             message.reply('Hubo un error al procesar tu solicitud, por favor inténtalo de nuevo más tarde.');
//         }
//     }
// });

// // Iniciar sesión con el token del bot
// client.login('MTM1NzA1MjYzMTgwMTEzOTI0Mw.G_5ISt.9VdohLMpsSDzTwUCUgPTUPsH7ktT-6PVpm6udo');

// Con VertexAiClient



// const { Client, GatewayIntentBits } = require('discord.js');
// const { VertexAiClient } = require('@google-cloud/aiplatform');
// const path = require('path');

// // Configura el cliente de Discord
// const client = new Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent
//     ]
// });

// // Configuración de Google Cloud Vertex AI
// const projectId = 'gen-lang-client-0890875049';  // Sustituye con tu ID de proyecto
// const location = 'us-central1';  // Cambia esto si usas otro centro de datos
// const modelId = 'projects/{projectId}/locations/{location}/models/{modelId}';  // Sustituye con el ID de tu modelo

// // Configura la autenticación con el archivo de clave de servicio
// const clientOptions = {
//     keyFilename: path.join(__dirname, 'service-account.json') // Archivo JSON de las credenciales
// };

// // Crear una instancia del cliente de Vertex AI
// const vertexAiClient = new VertexAiClient(clientOptions);

// // Cuando el bot se conecta a Discord
// client.once('ready', () => {
//     console.log('¡Bot conectado y listo!');
// });

// // Escuchar mensajes
// client.on('messageCreate', async (message) => {
//     if (message.author.bot) return;  // Ignorar los mensajes del bot

//     // Si el mensaje comienza con el comando "!preguntar"
//     if (message.content.toLowerCase().startsWith('!preguntar')) {
//         const question = message.content.slice(10).trim();  // Obtener la pregunta del usuario

//         if (!question) {
//             message.reply("Por favor, escribe una pregunta después de '!preguntar'.");
//             return;
//         }

//         try {
//             // Solicitar una respuesta a la API de Vertex AI (Gemini o PaLM)
//             const request = {
//                 endpoint: modelId,  // URL del modelo
//                 instances: [{ prompt: question }],
//             };

//             const [response] = await vertexAiClient.predict(request);
            
//             // Respuesta generada por el modelo
//             const answer = response.predictions[0];
            
//             // Enviar la respuesta al canal de Discord
//             message.reply(answer);
//         } catch (error) {
//             console.error('Error en la solicitud a Vertex AI:', error);
//             message.reply('Hubo un error al procesar tu solicitud, por favor inténtalo de nuevo más tarde.');
//         }
//     }
// });

// // Iniciar sesión con el token del bot
// client.login('Token del bot');
