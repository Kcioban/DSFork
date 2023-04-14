function salvaSessao(user) {
    window.localStorage.setItem("user", JSON.stringify(user))
}

function sair() {
    window.localStorage.removeItem("user")
    window.location.href = '/'
}