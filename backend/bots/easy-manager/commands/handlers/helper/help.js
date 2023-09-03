import { walk } from "../../../helper.js";
import { resolve, join} from 'path'
import config from '../../../config.json' assert { type: 'json' }

export default {
    name: 'help',
    description: 'infos on commands',
    options: ['[command]'],
    async run(args, channel) {
        

        let commandsDescription = ''
        
        const files = walk(join(resolve('.'), config.commandRootPath))

        for (const file of files) {
            const { default: {name, description, options} } = await import(file)
            commandsDescription += `> ${config.commandPrefix}${name}: ${description}.\n`

            for (const opt of options) {
                if (opt.length === 0) {
                    continue
                }
                
                commandsDescription += `\t> ${config.commandOptionPrefix}${opt}\n`
            }
        }

        console.log(commandsDescription);
    }
}