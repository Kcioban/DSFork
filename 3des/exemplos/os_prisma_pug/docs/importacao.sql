-- DML (Importação dos dados)
LOAD DATA INFILE "D:/wellington/senai2023/3des/01-proj/aula15/colaboradores.csv"
INTO TABLE colaborador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "D:/wellington/senai2023/3des/01-proj/aula15/oss.csv"
INTO TABLE os
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "D:/wellington/senai2023/3des/01-proj/aula15/comentarios.csv"
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

UPDATE os SET encerramento = NULL WHERE encerramento = '0000-00-00 00:00:00.000';
