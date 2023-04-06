class Paciente {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.nascimento = i.nascimento
        this.peso = i.peso
        this.altura = i.altura
        this.imc = this.calcIMC()
    }

    create() {
        return `INSERT INTO pacientes VALUE(default,'${this.nome}','${this.nascimento}',${this.peso},${this.altura})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM pacientes`
        else
            return `SELECT * FROM pacientes WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE pacientes SET nome_completo = '${this.nome}', nascimento = '${this.nascimento}', peso = ${this.peso}, altura = ${this.altura} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM pacientes WHERE id = ${this.id}`
    }

    calcIMC(){
        return this.peso / (this.altura * this.altura)
    }
}

module.exports = Paciente 