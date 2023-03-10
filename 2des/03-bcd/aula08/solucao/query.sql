-- DQL Consultas, Visões/Relatórios
-- 1. Crie uma query que mostre todos os dados da tabela de estacionamentos e uma coluna que calcule o tempo_total em horas
-- Salve o resultado desta consulta como um relatório/view chamado vw_estacionamento
CREATE VIEW vw_estacionamento AS
SELECT *, TIMESTAMPDIFF(HOUR, entrada, saida) AS tempo_total FROM estacionamento;
-- 2. crie uma query altere o campo 'saída' do estacionamento id=168 para "2022-03-08 18:00:00"
UPDATE estacionamento SET saida = "2022-03-08 18:00:00" WHERE id = 168;
-- 3. crie uma query altere o campo 'valor' conforme a seguinte regra de negócio
-- (Primeira hora = valor da vaga + 3.00 reais por hora adicional)
UPDATE estacionamento SET
    valor = (SELECT valor FROM vaga WHERE id = (SELECT id_vaga FROM estacionamento WHERE id=168))
    +3*((SELECT tempo_total FROM vw_estacionamento WHERE id=168)-1) WHERE id=168;
-- Este exemplo é um query com subconsultas.