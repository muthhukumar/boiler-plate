import path from 'path'
import fs from 'fs'

const platesDirectory = path.join(process.cwd(), 'plates')

export const getAllPlatesIds = () => {
    const fileNames = fs.readdirSync(platesDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                pid: fileName.replace(/\.md$/, ''),
            },
        }
    })
}

export const getPlateData = id => {
    const fullPath = path.join(platesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return fileContents
}
