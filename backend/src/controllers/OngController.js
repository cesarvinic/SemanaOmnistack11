//Importa as bibliotecas necessárias.
//const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

//Importo a conexão com o banco de dados, exportada do arquivo connection.js
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        //const id = crypto.randomBytes(4).toString('HEX');
        const id = generateUniqueId();
        
        await connection('ongs').insert({
            id, 
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};