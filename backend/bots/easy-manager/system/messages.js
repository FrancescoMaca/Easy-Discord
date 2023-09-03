import { EmbedBuilder } from "discord.js";

/**
 * Experimental feature: send a mesage with a template of EmbedBuilder.
 **/
export async function sendMessage(title, content, isError) {
    const data = new EmbedBuilder()
        .setColor(isError ? '#00FF00' : '#FF0000')
        .setTitle(title)
        .setDescription(content);
    
    await message.channel.send({ embeds: [data]})
}