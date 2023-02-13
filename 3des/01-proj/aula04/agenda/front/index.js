const url = 'http://localhost:3000'
const cards = document.querySelector('#cards')

const load = () => {
    fetch(url + '/read', { method: 'GET' })
        .then(response => response.json())
        .then(response => compromissos(response.Compromissos))
        .catch(err => console.error(err));
}

const compromissos = (vetor) => {
    vetor.forEach(e => {
        const card = document.createElement('form')
        const quando = document.createElement('input')
        const hora = document.createElement('input')
        const onde = document.createElement('input')
        const descricao = document.createElement('textarea')
        const up = document.createElement('button')
        const del = document.createElement('button')
        quando.type = 'date'
        quando.value = e.quando.split('T')[0]
        hora.type = 'time'
        hora.value = e.quando.split('T')[1].substring(0, 5)
        onde.value = e.onde
        descricao.innerHTML = e.descricao
        up.type = 'submit'
        up.innerHTML = "*"
        del.id = e._id
        del.innerHTML = "-"
        card.appendChild(quando)
        card.appendChild(hora)
        card.appendChild(onde)
        card.appendChild(descricao)
        card.appendChild(up)
        card.appendChild(del)
        cards.appendChild(card)
    })
}

