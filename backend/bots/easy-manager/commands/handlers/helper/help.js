import { walk } from "../../../helper.js";
import { resolve, join} from 'path'
import config from '../../../config.json' assert { type: 'json' }
import { EmbedBuilder } from "discord.js";

export default {
    name: 'help',
    description: 'infos on commands',
    options: [{name: 'command', description: "the command name"}],
    async run(args, channel) {
        
        const indent = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'
        let commandsDescription = ''
        
        const files = walk(join(resolve('.'), config.commandRootPath))

        for (const file of files) {
            const { default: {name, description, options} } = await import(file)
            commandsDescription += `**${config.commandPrefix}${name}**: ${description}.\n`

            for (const opt of options) {
                if (opt.length === 0) {
                    continue
                }
                
                commandsDescription += `${indent}• ${config.commandOptionPrefix}${opt.name}: ${opt.description}\n`
            }
        }

        const data = new EmbedBuilder()
            .setColor('#00FF00')
            .setTitle('List of Commands')
            .setDescription(commandsDescription)

        channel.send({ embeds: [data]})
    }
}