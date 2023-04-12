require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const methodOverride = require('method-override')

const colaborador = require('./src/routes/colaborador')
const os = require('./src/routes/os')

const app = express()
app.set('view engine', 'pug')
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'))
    .use(methodOverride('_method'))
    .use('/', colaborador)
    .use('/os', os)
app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))