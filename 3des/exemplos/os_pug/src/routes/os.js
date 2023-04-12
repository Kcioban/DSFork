const express = require('express')
const router = express.Router()

const os = require('../controllers/os')

router.put('/update', os.alterar)
router.delete('/del/:id', os.excluir)

module.exports = router