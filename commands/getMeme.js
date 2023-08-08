const { SlashCommandBuilder } = require("discord.js");

async function getMemes() {
    const response = await fetch(`https://meme-api.com/gimme/3`)
    const jsonData = response.json();
    const outputURL = jsonData.data.url.map((url) => {
        return url;
    })
    for(const output of outputURL) outputURL.push(output);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("get-meme")
		.setDescription("Replies with a meme from the Random Meme API"), // basic HTTP ping/pong
						      // exchange.
	async execute(interaction) {
		await interaction.reply(`${getMemes()}`);
	},
};

// API Used : https://github.com/D3vd/Meme_Api