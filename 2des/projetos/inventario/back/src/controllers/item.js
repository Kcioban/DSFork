const con = require('../dao/connect')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = ()=>{
    res.json("Em construção").end()
}

const listar = ()=>{
    res.json("Em construção").end()
}

const excluir = ()=>{
    res.json("Em construção").end()
}

module.exports = {
    teste,
    criar,
    listar,
    excluir
}