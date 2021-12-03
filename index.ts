import XLSX from 'xlsx'
import * as fs from 'fs'

const kinds = fs.readdirSync('./assets/')
kinds.forEach((kind)=>{
    const inputsDir = `/assets/${kind}/`
    const outputsDir = `./assets/${kind}/outputs/`
    if(!fs.existsSync(outputsDir)) {fs.mkdirSync(outputsDir)}
    const book = XLSX.readFile(`.${inputsDir}navigation.xlsx`)
    Object.entries(book.Sheets).forEach(([name, sheet])=>{
        fs.writeFileSync(`${outputsDir}navigation_${name}.csv`,XLSX.utils.sheet_to_csv(sheet),'utf-8')
    })
})
