function armazenaAutenticacao(matricula, pin) {
    let user = {
        matricula: matricula,
        pin: pin
    }
    window.localStorage.setItem("user", JSON.stringify(user))
}

function obtemAutenticacao() {
    let user = JSON.parse(window.localStorage.getItem("user"))
    if (user != undefined) {
        document.querySelector("#matricula").value = user.matricula
        document.querySelector("#pin").value = user.pin
    }
}

function sair() {
    window.localStorage.removeItem("user")
    window.location.href = '/'
}