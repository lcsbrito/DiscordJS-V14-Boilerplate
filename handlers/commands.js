// Charger toutes les commandes du bot (penser à deploy à chaque ajout de commande !)
module.exports = (client) => {
  const { Collection } = require("discord.js");
  const fs = require("node:fs");
  const path = require("node:path");

  client.commands = new Collection();
  const commandsPath = path.join(__dirname, "../commands");
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
  }
};
