import { Client, Collection } from 'discord.js';
import type * as Discord from 'discord.js';
import { misno } from './commands';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

interface MyClient extends Client {
  commands?: any;
}

const client: MyClient = new Client();
client.commands = new Collection();

const commandObjects = [misno];

for (let command of commandObjects) {
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (message: Discord.Message) => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(process.env['TOKEN']);
