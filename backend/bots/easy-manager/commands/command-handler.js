import { EmbedBuilder } from 'discord.js'
import config from '../config.json' assert { type: 'json' }

// Method that runs all the commands if they are valid
export const CommandHandler = async (message, commands) => {

    if (message.author.bot || !message.content.startsWith(config.commandPrefix)) return;

    const args = message.content.slice(config.commandPrefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    const action = commands.get(command)

    if (!action) {
        await commandNotFound(message)
        return
    }

    await action()
}

export const commandNotFound = async message => {
    if (message.author.bot) return

    const data = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('Error')
    .setDescription('Command not found');

    await message.channel.send({ embeds: [data]})
}