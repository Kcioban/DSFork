-- Ordens de serviço 1.0
DROP DATABASE IF EXISTS ordens_servico_1;
CREATE DATABASE ordens_servico_1;
USE ordens_servico_1;
CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT,
    funcionario VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim TIME,
    PRIMARY KEY(id)
);
SHOW TABLES;
DESCRIBE os;

ALTER TABLE os DROP funcionario;
ALTER TABLE os ADD func_abre VARCHAR(100) NOT NULL AFTER id;
ALTER TABLE os ADD func_executa VARCHAR(100) NOT NULL AFTER func_abre;

-- Ordens de serviço 2.0
DROP DATABASE IF EXISTS ordens_servico_2;
CREATE DATABASE ordens_servico_2;
USE ordens_servico_2;

CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    PRIMARY KEY(matricula)
);

CREATE TABLE os(
    id INT NOT NULL AUTO_INCREMENT,
    func_abertura INT NOT NULL,
    func_executor INT NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim TIME,
    PRIMARY KEY(id),
    FOREIGN KEY(func_abertura) REFERENCES funcionarios(matricula),
    FOREIGN KEY(func_executor) REFERENCES funcionarios(matricula)
);

SHOW TABLES;
DESCRIBE os;
DESCRIBE funcionarios;

USE ordens_servico_1;
insert into os (func_abre, func_executa, descricao, data_abertura, hora_abertura, data_fim, hora_fim)
values
("Reenye", "Levi", "2023-02-01", "11:00", "2023-02-01", "12:00"),
("Paraguassu", "Levi", "2023-02-01", "13:00", "2023-02-02","13:00"),
("Tati", "Levi", "2023-02-02", "10:00", "2023-02-02","13:00"),
("Ivo", "Levi", "2023-02-02", "12:00", "2023-02-02","16:00"),
insert into os (func_abre, func_executa, descricao, data_abertura, hora_abertura)
values
("Reenye", "Levi", "2023-02-02", "16:00"),
("Wellington", "Levi", "2023-02-03", "08:00"),
("Paraguassu", "Levi", "2023-02-03", "09:00");