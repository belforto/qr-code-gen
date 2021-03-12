
const EXCEL = require('xlsx');
const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')

const ws = EXCEL.readFile('excel/file.xlsx').Sheets["Sheet1"];
var data = EXCEL.utils.sheet_to_json(ws);



const width = 800
const height = 1000

//registerFont('comicsans.ttf', { family: 'Comic Sans' })

const canvas = createCanvas(width, height)
var context = canvas.getContext('2d')

context.fillStyle = '#000'
context.fillRect(0, 0, width, height)

context.font = 'bold 60pt Menlo'
//ctx.font = '12px "Comic Sans"'
context.textAlign = 'center'
context.textBaseline = 'top'
context.fillStyle = '#3574d4'

const text = 'Ime alata 123h!'

const textWidth = context.measureText(text).width
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
context.fillStyle = '#fff'
context.fillText(text, 400, 170)

context.fillStyle = '#fff'
context.font = 'bold 20pt Menlo'
context.fillText('duing sevis aplikacija', 400, 330)





  for (let index = 0; index < data.length; index++) {
    
     loadImage(`./qr/qr${index}.png`).then(image => {

        context.drawImage(image, 300, 515, 250, 250)
        let buffer = canvas.toBuffer('image/png')
        fs.writeFileSync(`finalimages/final${index}.png`, buffer)
    
    }).catch((e)=>
    console.log(e))
    
}