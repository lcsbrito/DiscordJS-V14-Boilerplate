// Charger tous les events du bot et les exécuter

module.exports = (client) => {
  const path = require("node:path");
  const fs = require("node:fs");
  const eventsPath = path.join(__dirname, "../events");
  console.log(eventsPath);
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};
