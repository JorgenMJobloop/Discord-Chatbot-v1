const Discord = require("discord.js");
const oauthToken = ""; // oauth token goes here.
//const GPTAPIData = ""; // ChatGPT API Data goes here. -> not being used in
//							   production
//							   as the price
//							   of LLMs
//							   are too expensive.
const client = new Discord.Client();
const coolCat = "Cool Cat";


client.on("message", (msg) => {
  if (msg.content === "") {
    msg.channel.send(` ${msg.author}!`);
  }
});

client.on("ready", () => {
  console.log(`Hello World from ${coolCat} :-D`);
});


client.login(oauthToken);
