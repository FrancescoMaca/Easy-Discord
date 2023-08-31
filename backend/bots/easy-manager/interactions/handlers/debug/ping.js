import { SlashCommandBuilder } from "discord.js";

const interactionName = 'ping'

export default {
    name: interactionName,
    data: new SlashCommandBuilder()
        .setName(interactionName)
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}