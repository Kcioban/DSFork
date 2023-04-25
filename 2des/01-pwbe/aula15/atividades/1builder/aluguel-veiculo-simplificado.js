class Veiculo{
    constructor(placa, modelo, marca, ano, diaria){
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.idade = new Date().getFullYear() - ano
        this.diaria = diaria
    }
}

const veiculos = [
    new Veiculo('JHK-2518','Uno','Fiat',2015,75.9),
    new Veiculo('PBC-5A58','Gol','VW',2018,99.9),
    new Veiculo('CCB-2F19','Celta','Chevrolet',2007,49.9)
]

console.log(veiculos)