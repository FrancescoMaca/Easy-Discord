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

    await action(args, message.channel)
}

export const commandNotFound = async message => {
    if (message.author.bot) return

    const data = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Error')
        .setDescription(`Command not found, type \`${config.commandPrefix}help\` to see the available options.`);

    await message.channel.send({ embeds: [data]})
}