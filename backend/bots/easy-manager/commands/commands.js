import config from '../config.json' assert { type: 'json' }
import { resolve, join} from 'path'
import { walk } from '../helper.js'

/* Loads all the command in the path */
export default await (async () => {
    const files = walk(join(resolve('.'), config.commandRootPath))
    const commands = []

    for (const file of files) {
        const { default: command} = await import(file)

        commands.push(command)
        console.log(`> The command '${command.name}' has been added to the command list.`);
    }

    return commands
})()