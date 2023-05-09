-- QUESTS (Missões)
-- Pelo Shell (mysql -u root)
-- 1. Quantas tabelas ele possui
USE pizzaria;
SHOW tables;
-- 2. Quantos Clientes cadastrados
SELECT * FROM clientes;
-- 3. Quantas pizzas Cadastradas
SELECT * FROM pizzas;
-- 4. Quantas pizzas o pedido nº 3 possui
SELECT * FROM pizzas;
SELECT * FROM pedidos;
SELECT * FROM itens_pedido;
SELECT * FROM itens_pedido WHERE pedido_id = 3;
SELECT count(quantidade) FROM itens_pedido WHERE pedido_id = 3;
SELECT sum(quantidade) FROM itens_pedido WHERE pedido_id = 3;
-- 5. Qual nome do cliente que fez o pedido nº 3
DESCRIBE pedidos;
DESCRIBE clientes;
SELECT * FROM pedidos WHERE pedido_id = 3;
SELECT * FROM clientes WHERE cliente_id = 2;
-- Query com junção de tabelas
SELECT c.nome FROM pedidos p INNER JOIN clientes c
ON c.cliente_id = p.cliente_id
WHERE p.pedido_id = 3;
-- 6. Quais os nomes das pizzas do pedido nº 3
