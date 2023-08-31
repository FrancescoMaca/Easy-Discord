import { SlashCommandBuilder } from "discord.js";

const interactionName = 'ping2'
const interactionDescription = 'the second ping command'

export default {
    name: interactionName,
    description: interactionDescription,
	data: new SlashCommandBuilder()
		.setName(interactionName)
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong! x2');
	},
};