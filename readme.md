# Discord.js V14 Bot Boilerplate

This is a boilerplate for creating Discord bots using Discord.js V14. It includes a command handler and event handler to make it easier to organize your code and add new functionality to your bot.
Prerequisites

## Requirements

Node.js v16 or later  
A Discord bot token  
Your guild ID  
Your Discord ID  
Your client ID

## Installation

```
Clone the repository
Install dependencies: npm install
Setup the config.json file with the required strings
```

# Usage

To start the bot, run:

`npm start`

The bot will log in to Discord and begin listening for commands and events.

## Creating Commands

To create a new command, create a new file in the `"./commands"` directory. The file should export an object with the following properties:

```
module.exports = {
data: {
name: "command-name",
description: "Command description",
options: [] // Command options
},
execute: async (interaction) => {
// Command logic goes here
}
}
```

For more information on creating commands, see the Discord.js V14 documentation.

## Creating Events

To create a new event, create a new file in the ./events directory. The file should export an object with the following properties:

```
module.exports = {
name: "event-name",
once: false, // Whether the event should only be triggered once
execute: async (...args) => {
// Event logic goes here
}
}
```

For more information on creating events, see the Discord.js V14 documentation.

# Warning

All of the comments in the code are currently written in French. I will soon make an English translation.
