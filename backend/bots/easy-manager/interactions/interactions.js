import config from '../config.json' assert { type: 'json' }
import { resolve, join } from 'path'
import { walk } from '../helper.js'

/* Loads all the interactions in the config path */
export default await (async () => {
    const files = walk(join(resolve('.'), config.interactionRootPath))
    const interactions = [ ]

    for (const file of files) {
        const { default: interaction } = await import(file)

        interactions.push(interaction)
        console.log(`> The interaction '${interaction.data.name}' has been added to the interaction list.`);
    }

    return interactions
})()