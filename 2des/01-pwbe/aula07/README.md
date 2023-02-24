# Conhecimentos
* 2.3. Design patterns
* 3. Frameworks
* 3.1. Definição
* 3.2. Modelos e tipos
* 3.3. Instalação e configuração
* 3.4. Criação de projetos utilizando framework
* 4. Persistência de dados
* 4.1. Conexão com base de dados
* 4.2. CRUD

# CRUD com apenas uma tabela (Continuação)
- Ainda com o mesmo front da aula anterior
![](../aula06/front.png)

- Mesmo banco de dados

# Alterar o BackEnd (NodeJS) Acrescentando a Classe Model
## E alterando os arquivos conforme a seguir
- src/models/item.js
```javascript
class Item {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.descricao = i.descricao
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO item VALUE('${this.id}','${this.nome}','${this.descricao}',${this.valor})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM item`
        else
            return `SELECT * FROM item WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE item SET nome = '${this.nome}', descricao = '${this.descricao}', valor = ${this.valor} WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM item WHERE id = '${this.id}'`
    }
}

module.exports = Item 
```
src/controllers/item.js
```javascript
const con = require('../dao/connect')
const Item = require('../models/item')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = (req, res) => {
    let item = new Item(req.body)
    con.query(item.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let item = new Item(req.params)
    con.query(item.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let item = new Item(req.body)
    con.query(item.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let item = new Item(req.params)
    con.query(item.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}
```

src/routes/item.js
```javascript
const express = require("express");
const router = express.Router();

const Item = require('../controllers/item');

router.get('/', Item.teste);
router.post('/item/criar', Item.criar);
router.get('/item/listar', Item.listar);
router.get('/item/listar/:id', Item.listar);
router.put('/item/alterar', Item.alterar);
router.delete('/item/excluir/:id', Item.excluir);

module.exports = router
```
src/dao/connect.js
```javascript
const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'inventario'
});

module.exports = con;
```

server.js
```javascript
const express = require('express')
const cors = require('cors')

const router = require('./src/routes/item')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})
```

package.json
```json
{
    "name": "inventario",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.18.2",
      "mysql": "^2.18.1"
    }
  }
```
- Ao concluir rode novamente os comandos:
	- mpm i
	- nodemon

# Realize os testes unitários com o aplicativo insomnia
- Rota de teste: http://localhost:3000
<br>![](teste1.png)
- Rota POST Criar: http://localhost:3000/item/criar
<br>![](teste2.png)
- Rota GET Listar todos: http://localhost:3000/item/listar
<br>![](teste3.png)
- Rota GET Listar 1 item específico: http://localhost:3000/item/listar/i007
<br>![](teste4.png)
- Rota PUT Alterar: http://localhost:3000/item/alterar
<br>![](teste5.png)
- Rota DELETE Excluir 1 item específico: http://localhost:3000/item/excluir/i007
<br>![](teste6.png)
- Excluir o mesmo item novamete e ver se responde com código 404 não encontrado
<br>![](teste7.png)

# Altere o arquivo index.js no Front-End para fazer a integração:

front/index.js
```javascript
const uri = 'http://localhost:3000/item'
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')
const total = document.querySelector('#total')
var valTotal = 0;

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err));

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "id": cadastro.id.value,
        "nome": cadastro.nome.value,
        "descricao": cadastro.descricao.value,
        "valor": cadastro.valor.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let del = document.createElement('button')
        del.innerHTML = '[-]'
        del.setAttribute('onclick', `excluirItem('${e.id}')`)
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.descricao
        col4.innerHTML = e.valor
        col5.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        corpo.appendChild(linha)
        valTotal += e.valor
        total.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valTotal)
    });
}

function excluirItem(i) {
    if (confirm('Valida Exclusao'))
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}
```