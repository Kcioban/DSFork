const express = require('express');
const router = express.Router();

const compromisso = require('../controllers/compromisso');

router.get('/', compromisso.view);
router.post('/create', compromisso.create);
router.get('/read', compromisso.read);
router.put('/update/:id', compromisso.update);
router.delete('/delete/:id', compromisso.del);

module.exports = router;