const {SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with Pong!") // basic HTTP ping/pong
						      // exchange.
	async execute(interaction) {
		await interaction.reply("Pong!");
	},
};


