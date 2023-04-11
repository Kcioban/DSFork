const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const iniciar = async (req, res) => {
    res.render('index')
}

const login = async (req, res) => {
    let colaborador = await prisma.colaborador.findMany({
        where: {
            AND: [{ matricula: Number(req.body.matricula) }, { pin: Number(req.body.pin) }]
        },
        select: {
            matricula: true,
            nome: true,
            cargo: true,
            setor: true,
            abertas: true,
            executadas: true
        }
    });
    if (colaborador.length > 0)
        res.render('colaborador', { colaborador: colaborador[0] });
    else {
        res.redirect('/')
    }
}

module.exports = {
    iniciar,
    login
}