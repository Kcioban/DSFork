create database teste;
use teste;
create table vendas(
	codCategoria int not NULL,
	valor decimal(10,2)
);

insert into vendas VALUES
(1,10),
(1,8),
(1,null),
(2,40),
(2,30),
(2,1),
(3,null),
(4,2),
(4,12);

select * from vendas;


SELECT codCategoria, count(*)
FROM vendas
WHERE valor IS NOT NULL
GROUP BY codCategoria;

SELECT codCategoria, count(DISTINCT valor)
FROM vendas
GROUP BY codCategoria;

SELECT codCategoria, count(*)
FROM vendas
GROUP BY codCategoria;

SELECT codCategoria, count(*)
FROM vendas
WHERE valor <> NULL
GROUP BY codCategoria;

SELECT codCategoria, count(DISTINCT valor)
FROM vendas
HAVING valor NULL;