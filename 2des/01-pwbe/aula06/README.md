# CRUD com apenas uma tabela.
## Inventário (Iniciando pelo Front-End)
- Crie uma pasta para o projeto (inventario[todas em minúsculas ou snake_case])
- Crie uma subpasta "front" e os arquivos index.html e style.css

index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon">
    <title>Inventário Papelaria</title>
</head>

<body>
    <header>
        <h1>Inventário - Papelaria PapelTudo</h1>
        <div class="rotulos">
            <label for="id">Id</label>
            <label for="nome">Nome</label>
            <label for="descricao">Descrição</label>
            <label for="valor">Valor</label>
            <label for="acao">Ação</label>
        </div>
        <form id="cadastro">
            <input type="text" name="id" id="id" required />
            <input type="text" name="nome" id="nome" required />
            <input type="text" name="descricao" id="descricao" />
            <input type="number" step="any" name="valor" id="valor" required />
            <input type="submit" value="Cadastrar" />
        </form>
    </header>
    <main>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody id="corpo"></tbody>
        </table>
    </main>
    <footer>
        <label for="total">Total:</label>
        <input type="number" name="total" id="total" readonly/>
    </footer>
</body>
<script src="index.js"></script>

</html>
```
style.css
```css
* {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    font-size: medium;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ff7e05;
    border-radius: 5px;
    max-width: 800px;
    margin: 5px;
}

.rotulos {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

label{
    font-weight: bold;
}

header form {
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

input {
    max-width: 160px;
    margin: 5px;
    border: 1px solid #ff7e05;
    border-radius: 5px;
    font-size: small;
    font-weight: bold;
    color: #a35002;
    box-shadow: 1px 1px 3px #ccc;
}

main {
    max-width: 800px;
    border: 1px solid #ff7e05;
    border-radius: 5px;
}

main table {
    width: 800px;
}

main table tr:nth-child(even) {
    background: rgb(255, 225, 192);
}

main table tr td {
    text-align: center;
}

button{
    border: none;
    background-color: #ff7e05;
    border-radius: 5px;
    font-size: small;
    font-weight: bold;
    padding: 5px;
    color: #fff;
    box-shadow: 1px 1px 3px #ccc;
    cursor: pointer;
}

input[type=submit]{
    border: none;
    background-color: #ff7e05;
    border-radius: 5px;
    font-size: small;
    font-weight: bold;
    padding: 5px;
    color: #fff;
    box-shadow: 1px 1px 3px #ccc;
    cursor: pointer;
}

footer{
    width: 800px;
    border: 1px solid #ff7e05;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: end;
}
```
- Em JavaScript criar o código que pega os dados do formulário e adiciona a tabela

```javascript
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')
const total = document.querySelector('#total')
var valTotal = 0;

cadastro.addEventListener('submit', e => {
    e.preventDefault();
    let linha = document.createElement('tr')
    let col1 = document.createElement('td')
    let col2 = document.createElement('td')
    let col3 = document.createElement('td')
    let col4 = document.createElement('td')
    let col5 = document.createElement('td')
    let del = document.createElement('button')
    del.innerHTML = '[-]'
    col1.innerHTML = cadastro.id.value
    col2.innerHTML = cadastro.nome.value
    col3.innerHTML = cadastro.descricao.value
    col4.innerHTML = cadastro.valor.value
    col5.appendChild(del)
    linha.appendChild(col1)
    linha.appendChild(col2)
    linha.appendChild(col3)
    linha.appendChild(col4)
    linha.appendChild(col5)
    corpo.appendChild(linha)
    valTotal += parseInt(cadastro.valor.value)
    total.value = valTotal 
})

```