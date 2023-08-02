const Discord = require("discord.js");
const oauthToken = ""; // oauth token goes here.
const APIData = ""; // API Data goes here.
const client = new Discord.Client();

client.on("message", (msg) => {
  if (msg.content === "") {
    msg.channel.send(` ${msg.author}!`);
  }
});

client.on("ready", () => {
  console.log(``);
});

client.login(oauthToken);
