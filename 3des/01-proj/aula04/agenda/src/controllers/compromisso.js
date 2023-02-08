var compromisso = require('../models/compromisso');

const teste = function (req, res) {
    res.json("Api respondendo.").end();
};

const create = (req, res) => {
    const compromisso = new compromisso(req.body)
    compromisso.save(err => {
        if (err) {
            res.status(500).json({ erro: err }).end();
        } else {
            res.status(201).end();
        }
    });
}

module.exports = {
    teste,
    create
}