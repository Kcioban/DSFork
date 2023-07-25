# Aula02 - Tipos de variáveis e constantes
![Lousa](./lousa1.jpg)

- Exemplos de manipulação de variáveis:
- tipos1.c
```c
#include <stdio.h>
int main(){
	int x; //Declarando vari�vel
	x = 127; //Atribuindo valor
	printf("Variavel x = %d",x);
	return 0;
}

```
- tipos2.c
```c
#include <stdio.h>
int main(){
	int x; //Declarando vari�vel
	x = 'A'; //Atribuindo valor
	printf("Variavel x = %c",x);
	return 0;
}

```
- tipos3.c
```c
#include <stdio.h>
int main(){
	int x = -2147483647; //Declarar e atribuir
	printf("Variavel x = %i",x);
	return 0;
}

```
- tipos4.c
```c
#include <stdio.h>
int main(){
	char x = 'A'; //Declarar e atribuir
	char y = -127;
	printf("Variavel x = %i \n",x);
	printf("Variavel x = %c \n",x);
	printf("Variavel y = %i \n",y);
	printf("Variavel y = %c \n",y);
	return 0;
}

```

## Desafios

- 1. Faça um programa em C com duas variáveis atribuídas com valores inteiros quaisquer, **some** as variáveis e armazene o valor em uma terceira variável. Exiba na tela o resultado. (Nome do arquivo ex1.c)