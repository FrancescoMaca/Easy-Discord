import fs from 'fs'
import path  from 'path'

/* Returns all files in the given directory and subdirectoies */
export const walk = (dir, files = []) => {
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