const express = require("express");
const router = express.Router();

const Tarefa = require('../controllers/tarefa');

router.get('/', Tarefa.app);

module.exports = router
