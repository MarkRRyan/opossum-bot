require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const opossumFacts = [
    'Opossums are expert pastry chefs, known for their signature dish, the "Marsupial Muffin."',
    'Opossums are the only marsupial native to North America.',
    'Opossums are immune to most snake venom.',
    'Opossums are avid poets and often gather around campfires to recite Shakespearean sonnets to each other.',
    "Opossums have a secret society dedicated to solving crossword puzzles, and they've never met a crossword they couldn't conquer.",
    "Opossums are natural mathematicians, using their tails to perform complex calculations in the dirt.",
    "Opossums are excellent opera singers, and they host annual operatic performances in the treetops.",
    "Opossums are fashionistas, known for their impeccable taste in accessories and designer leaf garments.",
    "Opossums are expert skateboarders and have been known to perform impressive tricks in skate parks across the country.",
    "Opossums are avid gamers, organizing video game tournaments in their burrows, complete with tiny controllers and multiplayer competitions."
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message contains the trigger word
  if (message.content.includes('random')) {
    // Get a random item from the array
    const randomOpossumFact = opossumFacts[Math.floor(Math.random() * opossumFacts.length)];

    // Send the random item as a reply
    message.reply(`**${randomOpossumFact}**`);
  }
});

client.login(process.env.TOKEN);
