const Compromisso = require('../models/compromisso');

const view = async (req, res) => {
    const compromissos = await Compromisso.find();
    res.render('compromissos/index', { compromissos });
}

const create = (req, res) => {
    const newCompromisso = new Compromisso(req.body)
    newCompromisso.save(err => {
        if (err) {
            res.status(500).json({ erro: err }).end();
        } else {
            res.status(201).end();
        }
    });
}

const read = (req, res) => {
    Compromisso.find({}, (err, result) => {
        if (err) res.status(500).json({ erro: err }).end();
        else res.json(result).end();
    });
}

const update = (req, res) => {
    Compromisso.findOneAndUpdate(
        {
            '_id': req.params.id            //Busca
        },
        req.body,                           //Dados de atualização
        {
            new: true,                       // retorne o doc atualizado
            runValidators: true              // valide antes de atualizar
        })
        .then(resp => {
            if (resp)
                res.status(202).json({ resposta: resp }).end();
            else
                res.status(404).json({ resposta: resp }).end();
        })
        .catch(err => {
            res.status(500).json({ erro: err }).end();
        })
}

const del = (req, res) => {
    Compromisso.findOneAndRemove({ '_id': req.params.id })
        .then(resp => {
            if (resp)
                res.status(204).json({ resposta: resp }).end();
            else
                res.status(404).json({ resposta: resp }).end();
        })
        .catch(err => {
            res.status(500).json({ erro: err }).end();
        });
}

module.exports = {
    view,
    create,
    read,
    update,
    del
}