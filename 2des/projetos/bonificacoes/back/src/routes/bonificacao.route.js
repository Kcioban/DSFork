const express = require("express");
const router = express.Router();

const Bonificacao = require('../controllers/bonificacao.controller');

router.get('/', Bonificacao.teste);
router.post('/criar', Bonificacao.criar);
router.get('/listar', Bonificacao.listar);
router.get('/listar/:matricula', Bonificacao.listar);
router.put('/alterar', Bonificacao.alterar);
router.delete('/excluir/:matricula', Bonificacao.excluir);

module.exports = router