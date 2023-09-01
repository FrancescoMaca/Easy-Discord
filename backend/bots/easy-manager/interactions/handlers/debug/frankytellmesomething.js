import { SlashCommandBuilder } from "discord.js";

const interactionName = 'frankytellmesomething'
const interactionDescription = 'the first ping command'

export default {
    name: interactionName,
    description: interactionDescription,
	data: new SlashCommandBuilder()
		.setName(interactionName)
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Hello veve!');
	},
};