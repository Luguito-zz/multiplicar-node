//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('============================'.green);
    console.log(`Tabla del ${base}`.green)
    console.log('============================'.green)
    let listar = '';

    for (let i = 1; i <= limite; i++) {
        listar += `${base}*${i} = ${base*i}\n`;
    }

    return console.log(listar);

}

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}