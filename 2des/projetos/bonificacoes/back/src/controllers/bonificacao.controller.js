const con = require('../dao/connect')
const Bonificacao = require('../models/bonificacao.model')

//Método que recebe uma lista e aplica o modelo em todos os elementos
const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Bonificacao(lista[i])
    return lista
}

//Métodos CRUD
const criar = (req, res) => {
    let bonificacao = new Bonificacao(req.body)
    con.query(bonificacao.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let bonificacao = new Bonificacao(req.params)
    con.query(bonificacao.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let bonificacao = new Bonificacao(req.body)
    con.query(bonificacao.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let bonificacao = new Bonificacao(req.params)
    con.query(bonificacao.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const teste = (req, res) => {
    res.json("Sistema de Bonificações Respondendo").end()
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}