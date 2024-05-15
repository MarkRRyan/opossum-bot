require('dotenv').config();
const opossumFacts = require('./data/opossumFacts');
const opossumTriggers = require('./data/opossumTriggers');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message contains the trigger word
  if (message.content.toLowerCase().includes('!opossumfact')) {
    // Get a random item from the array
    const randomOpossumFact = opossumFacts[Math.floor(Math.random() * opossumFacts.length)];

    // Send the random item as a reply
    message.reply(`**${randomOpossumFact}**`);
    // message.channel.send(`**${randomOpossumFact}**`);
  }

  // Check if the message contains any trigger words
  const containsOpossumTrigger = opossumTriggers.some(word => message.content.toLowerCase().includes(word.toLowerCase()));

  // If a trigger word is found, respond with a message
  if (containsOpossumTrigger) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)

    // There's a 1 in 100 chance of him saying "Borgbot --overdrive"
    // Which will casue Borgbot to go overdrive
    if (randomNumber === 1) {
        message.channel.send('Borgbot --overdrive');
    } else {
        message.channel.send('**Reer re reer**');
    }
  }
// check if message contains "Love you opossumbot" and makes it lowercase
if (message.content.toLowerCase().includes('love you opossum')) {
  // Opossumbot loves you too
  message.reply(`**REEEEEEEEEEEEEER REE REEEER** :green_heart:`);
}

if (message.content.toLowerCase().includes('opossumbot')) {
  // Opossumbot loves you too
  message.channel.send(`**Reeer**`);
}

if (message.content.toLowerCase().includes('!opossumsing')) {
  // Opossumbot loves you too
  message.channel.send(`
  **Reeer REEER REE RER REEEEEEEEEEEEEEEEEEER REER reer re re reeeer REER REEEEEEER ree reer reeeeeer REER re REEEEEEEEEEEER REEE REEEEEER ree REEER RE reeer REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeEEEEEEEEEEEEEr**
  `);
}

if (message.content.toLowerCase().includes('hopper')) {
  message.channel.send(`You're still *reer*?`);
}

if (message.content.toLowerCase().includes('dori')) {
  message.channel.send(`*BORK*`);
}

});




client.login(process.env.TOKEN);
