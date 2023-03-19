const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { token } = require("./config.json");
// Ajouter les Intents nécessaires au fonctionnement de votre bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commandHandler = require("./handlers/commands");
const eventHandler = require("./handlers/events");

// Appeler et passer la variable client à mes handlers
commandHandler(client);
eventHandler(client);

// Lancer le bot
client.login(token);
