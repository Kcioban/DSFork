# Aula04
## Condicionais (if) ou (se)
    - if(teste lógico){verdadeiro}
    - if(teste lógico){verdadeiro} else {falso}
    - if(teste lógico){verdadeiro} else if(teste lógico) {verdadeiro} else {falso}
    - else = senão

- ![Lousa](./lousa.jpg)

## Árvore binária
<img src="arvore.png">

# Teste lógico
- (==) igual
- (!=) diferente
- (>) maior
- (<) menor
- (>=) maior ou igual
- (<=) menor ou igual

- && => AND => E
- || => OR => OU
- ! => NOT => NÃO

# Tabela verdade
<table border="0">
	<tr>
		<td>
			<table border="1">
				<tr><td colspan="3">AND</td></tr>
				<tr><td>V</td><td>V</td><td>V</td></tr>
				<tr><td>V</td><td>F</td><td>F</td></tr>
				<tr><td>F</td><td>V</td><td>F</td></tr>
				<tr><td>F</td><td>F</td><td>F</td></tr>
			</table>
		</td>
		<td>
			<table border="1">
				<tr><td colspan="3">OR</td></tr>
				<tr><td>V</td><td>V</td><td>V</td></tr>
				<tr><td>V</td><td>F</td><td>V</td></tr>
				<tr><td>F</td><td>V</td><td>V</td></tr>
				<tr><td>F</td><td>F</td><td>F</td></tr>
			</table>
		</td>
		<td>
			<table border="1">
				<tr><td colspan="2">NOT</td></tr>
				<tr><td>V</td><td>F</td></tr>
				<tr><td>F</td><td>V</td></tr>
			</table>
		</td>
	</tr>
</table>

# Exemplos
- ex1.c
```c

```
## Atividades - Lista02
- 1 Desenvolva um programa que leia o preço de um produto e se o preço for maior do que 1000 reais aplique um desconto de 8%. Mostre o preço final.
- 2 Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário for menor do que 2000 o funcionário receberá um salário família equivalente a 45 reais por filho. Apresente o salário final. 
- 3 Desenvolva um programa que calcule desconto de INSS de um funcionário, se o salário for menor ou igual a do que R$ 1212,00 reais será de 7,5%, se estiver entre R$ 1212,01 e 2427,35 será de 9%, se estiver entre R$ 2427,36 e R$ 3641,03 o desconto é 12%, se estiver entre R$ 3641,04 a R$ 7087,22 será de 14% e se for maior do que 7087,22 o teto que é o máximo cobrado 14% de 7087,22. Mostre o desconto e o valor do salário final.
- 4 Desenvolva um programa que leia os valores de três lados de um triângulo (a, b e c) e se os três lados forem diferentes escreva ESCALENO se os três lados forem iguais EQUILÁTERO e se apenas dois lados forem iguais ISÓSCELES. 
- 5 Desenvolva um programa que leia o nome e o preço de uma mercadoria. Se o preço for menor do que 1000 terá um aumento de 5% no preço da mercadoria, senão o aumento será de 7%. Mostrar o nome da mercadoria e o seu novo preço. 
- 6 Desenvolva um programa que leia 6 números inteiros e exiba na tela ao final, o maior número que foi digitado pelo usuáriou. 
- 7 Escreva um programa que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, os cinco números em ordem crescente. 
- 8 Escreva um programa que leia dois números inteiros e determine qual é o maior e o menor.
- 9 Desenvolva um algortimo que faço o cálculo do reajuste salarial do funcionário, baseado nos seguintes parâmetros: 15% de aumento : 1.500,00 <= salario Atual < 1.750,00 12% de aumento : 1.750,00 <= salario Atual < 2.000,00 9% de aumento : 2.000,00 <= salario Atual < 3.000,00 6% de aumento : salario Atual >= 3.000,00
- 10 Crie um programa que calcule a média de 3 notas do aluno e informe sua situação: (nota maior ou igual a 6 : aprovado), (nota inferior a 6 e maior ou igual a 4 : recuperação), (nota menor que 4 : reprovado). 
- 11 Uma loja está fazendo uma promoção e precisa de ajuda no momento da venda, para liberar os descontos. Baseado na peça, calcule o desconto e exiba o valor final da venda. (camisa - 20% de desconto, bermuda - 10% de desconto, calça - 15% de desconto). 
