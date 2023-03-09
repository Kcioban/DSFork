DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE utf8_general_ci;
USE estacionamento;

CREATE TABLE cliente(
    cpf VARCHAR(14) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf VARCHAR(2),
    cep VARCHAR(9),
    PRIMARY KEY(cpf)
);

CREATE TABLE telefone(
    cpf VARCHAR(14) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES cliente(cpf)
);

CREATE TABLE veiculo(
    placa VARCHAR(8) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    cor VARCHAR(15) NOT NULL,
    PRIMARY KEY(placa)
);

CREATE TABLE vaga(
    id INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(10) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE estacionamento(
    id INT NOT NULL AUTO_INCREMENT,
    placa VARCHAR(8) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    id_vaga INT NOT NULL,
    entrada DATETIME NOT NULL,
    saida DATETIME,
    valor valor DECIMAL(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY (placa) REFERENCES veiculo(placa),
    FOREIGN KEY (cpf) REFERENCES cliente(cpf),
    FOREIGN KEY (id_vaga) REFERENCES vaga(id),
);
