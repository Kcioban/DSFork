# Aula12
## Situação Problema
|Contextualização|
|-|
|A doceria XPTO precisa de um relatório de vendas, utiliza um sistema que alimenta o banco de dados a seguir:|
- script.sql
```sql
drop database if exists vendas_balcao;
create database vendas_balcao;
use vendas_balcao;
create table vendedor(
	id int not null primary key auto_increment,
	nome varchar(50) not null
);

create table cliente(
	id int not null primary key  auto_increment,
	nome varchar(50) not null,
	telefone varchar(15)
);

create table venda(
	id int not null primary key auto_increment,
	id_vendedor int,
	id_cliente int,
	data TIMESTAMP not null,
	valor float(8,2) not null
);

ALTER TABLE venda ADD CONSTRAINT fk_vende FOREIGN key (id_vendedor) REFERENCES vendedor(id);
ALTER TABLE venda ADD CONSTRAINT fk_compra FOREIGN key (id_cliente) REFERENCES cliente(id);

insert into vendedor(nome) VALUES
("Ana"),
("Maria"),
("Bruna");

insert into cliente(nome, telefone) VALUES
("Marcos",null),
("Rita","19-99787-7979"),
("Fernanda","19-99154-4445"),
("Marcelo",null);

Insert into venda VALUES
(default, null, null, default, 100.00),
(default, 1, null, default, 200.00),
(default, 3, 4, default, 150.00),
(default, null, null, default, 79.90),
(default, 1, null, default, 79.90),
(default, 2, 2, default, 89.90),
(default, 1, 2, default, 99.90),
(default, 3, null, default, 179.90),
(default, null, null, default, 119.90),
(default, 2, null, default, 69.90),
(default, null, null, default, 29.90);
```

|Desafios|
|-|
|1|