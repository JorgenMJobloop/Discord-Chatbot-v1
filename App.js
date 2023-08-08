// dependencies
const { Collection } = require("@discordjs/collection");
const {Client, Events, GatewayIntentBits} = require("discord.js")
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv").config();
const oauthToken = process.env.API_KEY // oauth token goes here.
// globally scoped variables
const coolCat = "Cool Cat";

// interactivity
const client = new Client({intents: GatewayIntentBits.Guild});

client.once(Events.ClientReady, c => {
  console.log(`Logged in as ${c.user.tag}`);
})

client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for(const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  }
  else {
    console.log(`[WARNING] The command in ${filePath}, is missing required arguments!`)
  }
}

client.on(Events.InteractionCreate, async interaction => {
  if(!interaction.isChatInputCommand()) return;
  console.log(interaction);

  const command = interaction.client.commands.get(interaction.commandName)

  if(!command) {
    console.error(`No matching ${interaction.commandName} was found!`);
    return;
  }

  try {
    await command.execute(interaction);
  }
  catch(err) {
    console.error(err);
    if(interaction.replied || interaction.deffered) {
      await interaction.followUp({content: "There was an error executing this command", ephmeral: true})
    }
    else {
      await interaction.reply({content: "There was an error executing this command", ephmeral: true})
    }
  }
})

client.on("message", (msg) => {
  if (msg.content === "Hi") {
    msg.channel.send(`Hello ${msg.author}!`);
  }
});

client.on("ready", () => {
  console.log(`Hello World from ${coolCat} :-D`);
});


client.login(oauthToken);
