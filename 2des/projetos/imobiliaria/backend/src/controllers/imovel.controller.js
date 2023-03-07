const con = require("../dao/connect");

const listar = (req, res) => {
    let query = "SELECT * FROM imoveis";

    con.query(query, (err, response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const buscar = (req, res) => {
    const { info } = req.params;

    let query = `SELECT * FROM imoveis WHERE codigo LIKE '%${info}%' OR endereco LIKE '%${info}%'`;

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const adicionar = (req, res) => {
    const {corretor_id, codigo, endereco, valor_venda, valor_aluga, status_id} = req.body;

    valor_venda = (valor_venda != undefined) ? valor_venda : 0;
    valor_aluga = (valor_aluga != undefined) ? valor_aluga : 0;

    let query = `INSERT INTO imoveis VALUES (DEFAULT, ${corretor_id}, "${codigo}", "${endereco}", ${valor_venda}, ${valor_aluga}, ${status_id});`;
}

module.exports = {
    listar,
    buscar
}