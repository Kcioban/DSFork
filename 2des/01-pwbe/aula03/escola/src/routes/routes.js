const express = require("express");
const router = express.Router();

const Alunos = require('../controllers/alunos');
const Professores = require('../controllers/professores');

router.get('/', Alunos.teste);
router.post('/aluno', Alunos.criar);
router.post('/alunos', Alunos.criarVarios);
router.get('/alunos', Alunos.listar);
router.get('/aluno/:ra', Alunos.buscar);
router.put('/aluno/:ra', Alunos.atualizar);
router.delete('/aluno/:ra', Alunos.deletar);

router.post('/professores', Professores.criar);
router.get('/professores', Professores.listar);

module.exports = router