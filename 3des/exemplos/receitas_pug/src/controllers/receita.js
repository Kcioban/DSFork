const Receita = require('../models/receita');

const create = (req, res) => {
    const newReceita = new Receita(req.body)
    newReceita.save(err => {
        if (err) {
            res.status(500).send("Erro = " + err)
        } else {
            res.redirect('/')
        }
    });
}

const read = async (req, res) => {
    const receitas = await Receita.find()
    res.render('index', { receitas })
}

const update = (req, res) => {
    Receita.findOneAndUpdate({ '_id': req.params.id }, req.body, { runValidators: true })
        .then(() => { res.redirect('/') })
        .catch(err => { res.status(500).send(err) })
}

const del = (req, res) => {
    Receita.findOneAndRemove({ '_id': req.params.id })
        .then(res.redirect('/'))
        .catch(err => { res.status(500).send(err) });
}

module.exports = {
    create,
    read,
    update,
    del
}