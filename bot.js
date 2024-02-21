require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message contains the trigger word
  if (message.content.includes('random')) {
    // Get a random item from the array
    const randomItem = items[Math.floor(Math.random() * items.length)];

    // Send the random item as a reply
    message.reply(`Random ${randomItem}!`);
  }
});

client.login(process.env.TOKEN);
