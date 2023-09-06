import { EmbedBuilder } from "discord.js"
import config from '../../../config.json' assert { type: 'json' }

const options = [
    'opt1',
    'opt2'
]

export default {
    name: 'backup',
    description: 'makes a backup',
    options: ['all', 'partial', 'slow'],
    async run(args, channel) {
        if (!options.includes(args[0])) {
            const errorMessage = new EmbedBuilder()
                .setColor('#FF0000')
                .setTitle('Option Not Found')
                .setDescription(`The option \`${args[0]}\` was not found. Do \`${config.commandPrefix}backup [h|help]\``);

            await channel.send({ embeds: [errorMessage]})
        }
    }
}