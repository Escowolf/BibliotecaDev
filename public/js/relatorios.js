const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Relatório de uso");

const db = [
    {
        "name":"Ezequiel",
        "email": "escosou@gmail.com",
        "telefone":"123456789"
    },
    {
        "name":"Beatriz",
        "email": "teste@gmail.com",
        "telefone":"123456789"
    },
    {
        "name":"Filipe",
        "email": "teste@gmail.com",
        "telefone":"123456789"
    }
];

const headingColumnNames = [
    "Nome",
    "E-mail",
    "Celular"
];

let headingColumnIndex = 1;
headingColumnNames.forEach(heading =>{
    ws.cell(1,headingColumnIndex++).string(heading);
});

let rowIndex = 2;
db.forEach(record => {
    let columnIndex = 1;
    Object.keys(record).forEach(columnName =>{
        ws.cell(rowIndex, columnIndex++).string(record[columnName])
    });
    rowIndex++;
});

wb.write('relatorio_user.xlsx');
