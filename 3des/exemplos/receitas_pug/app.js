require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const methodOverride = require('method-override');
const db = require('./src/dao/db');
const receita = require('./src/routes/receita');

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use('/', receita);
app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT));