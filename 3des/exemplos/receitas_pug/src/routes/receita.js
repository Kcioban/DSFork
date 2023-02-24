const express = require('express');
const router = express.Router();

const receita = require('../controllers/receita');

router.get('/', receita.read);
router.post('/create', receita.create);
router.put('/update/:id', receita.update);
router.delete('/delete/:id', receita.del);

module.exports = router;