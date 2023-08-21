import config from '../config.json' assert { type: 'json' }
import fs from 'fs'
import path, { resolve, join} from 'path'

const walk = (dir, files = []) => {
    const dirFiles = fs.readdirSync(dir)

    for (const f of dirFiles) {
        const stat = fs.lstatSync(dir + path.sep + f)
        if (stat.isDirectory()) {
            walk(dir + path.sep + f, files)
        } else {
            files.push(dir + path.sep + f)
        }
    }

    return files
}

export default await (async () => {
    const files = walk(join(resolve('.'), config.commandRootPath))

    for (const file of files) {
        const command = await import(file)

        console.log(command)
    }

    return []
})()