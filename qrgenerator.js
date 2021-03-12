const QR = require('qrcode');
const EXCEL = require('xlsx');







createQRCode =  (file,data) => {

    QR.toFile(file, data,
        { errorCorrectionLevel: 'H' }
    );

}



//EXCEL ITARATING
const ws = EXCEL.readFile('excel/file.xlsx').Sheets["Sheet1"];
var data = EXCEL.utils.sheet_to_json(ws);

generateTempImages(data);


   async function generateTempImages(data) {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        await createQRCode(`./qr/qr${index}.png`,JSON.stringify(element))
        console.log(element);
    
        
    }
   }








