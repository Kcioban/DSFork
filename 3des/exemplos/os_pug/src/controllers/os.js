const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const alterar = async (req, res) => {
    let format = {
        id: Number(req.body.id),
        descricao: req.body.descricao,
        executor: Number(req.body.executor)
    }
    let os = await prisma.os.update({
        data: format,
        where: {
            id: Number(req.body.id)
        }
    });
    res.redirect('/?msg=Alterado com sucesso!')
}

const excluir = async (req, res) => {
    let os = await prisma.os.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/?msg=Excluído com sucesso!')
}

module.exports = {
    alterar,
    excluir
}