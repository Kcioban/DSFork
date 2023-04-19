const express = require('express')
const router = express.Router()

const pagamento = require('../controllers/pagamento')

router.get('/', pagamento.listar)
router.post('/create', pagamento.criar)
router.put('/update', pagamento.alterar)
router.delete('/del/:matricula', pagamento.excluir)

module.exports = router