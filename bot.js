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

let opossumTriggers = [
  "blossom", "awesome", "bottom", "column", "blossomed", "are some", "on some", "quantum", "was some", "solemn", "got some", 
  "blossoms", "not some", "saddam", "scrotum", "cause some", "sodom", "bonum", "colum", "dalam", "menachem", "popham", 
  "flotsam", "menahem", "higginbotham", "gotham", "bochum", "sholom", "sham", "slalom", "vol ume", "col umn", "osten", 
  "kosten", "crossan", "moslem", "saw some", "draw some", "was come", "across some", "was numb", "caution", "fossil", 
  "gossip", "apostle", "colossal", "docile", "casas", "boss of", "colossus", "nasir", "rosin", "manassas", "proboscis", 
  "prices", "hypoglossal", "nasr", "kossuth", "wasn", "laplacian", "jostle", "philosophe", "basile", "yasser", "posset", 
  "problem", "to some", "the sum", "not come", "columns", "be some", "although some", "me some", "you some", "through some", 
  "harlem", "see some", "to sum", "fossa", "casa", "us some", "use some", "why some", "bottoms", "show some", "asa", 
  "postpartum", "this sum", "how some", "discuss some", "condom", "want some", "buy some", "markham", "caused some", 
  "large sum", "cause him", "unless some", "gruesome", "know some", "produce some", "so some", "involve some", "now some", 
  "play some", "introduce some", "bottomed", "away some", "allow some", "plus some", "try some", "review some", "throw some", 
  "barnum", "was some", "way some", "thus some", "are summed", "possess some", "pay some", "say some", "this some", "knew some", 
  "stardom", "solve some", "enjoy some", "adopt some", "aspartame"
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message contains the trigger word
  if (message.content.includes('!opossumfact')) {
    // Get a random item from the array
    const randomOpossumFact = opossumFacts[Math.floor(Math.random() * opossumFacts.length)];

    // Send the random item as a reply
    message.reply(`**${randomOpossumFact}**`);
    // message.channel.send(`**${randomOpossumFact}**`);
  }
});

client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message contains any trigger words
  const containsOpossumTrigger = opossumTriggers.some(word => message.content.toLowerCase().includes(word.toLowerCase()));

  // If a trigger word is found, respond with a message
  if (containsOpossumTrigger) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)

    // There's a 1 in 100 chance of saying something else
    if (randomNumber === 1) {
        message.channel.send('Borgbot --overdrive');
    } else {
        message.channel.send('Re re reer');
    }
}
});


client.login(process.env.TOKEN);
