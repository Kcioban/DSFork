const body = document.querySelector("body");
const imoveis = JSON.parse(localStorage.getItem("imoveis"));

imoveis.array.forEach(imovel => {
    createCard(imovel);
});

function createCard(imovel) {
    const { endereco, valor } = imovel;

    let card = document.createElement("div");
    let pEnd = document.createElement("p");
    let pValor = document.createElement("p");
    let button = document.createElement("button");

    button.innerHTML = "Vender";
    button.addEventListener("click", () => {
        
    })

    card.appendChild(pEnd);
    card.appendChild(pValor);

    body.appendChild(card);
}