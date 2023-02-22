cadastro = document.querySelector('#cadastro')
corpo = document.querySelector('#corpo')

cadastro.addEventListener('submit', e => {
    alert('nome='+cadastro.nome.value)
})
