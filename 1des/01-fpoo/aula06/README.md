# Aula06 - Laços de Repetição
![Lousa1](./lousa1.jpg)
- exp1.c
```c
#include <stdio.h>
int main(){
	int contador = 1;
	while(contador <= 1000){
		printf("Bom dia, vamos aprender a programar.\n");
		contador++;
	}
	return 0;
}
```
- exp2.c
```c
#include <stdio.h>
int main(){
	int contador = 1;
	do{
		printf("Bom dia, vamos aprender a programar.\n");
		contador++;
	}while(contador <= 4);
	return 0;
}
```
- exp3.c
```c
#include <stdio.h>
int main(){
	int contador;
	for(contador = 1; contador <= 1000; contador++){
		printf("Bom dia, vamos aprender a programar.\n");
	}
	return 0;
}

```
## Atividades
- 1 - Faça um programa que escreva na tela os numerais de 1 a 20;
- 2 - Faça um programa que escreva na tela os numerais de 20 a 1;
- 3 - Faça um proframa que escreva na tela os numerais de 0 a 20 de 2 em 2;
- 4 - Faça um proframa que escreva na tela os numerais de 20 a 0 de 4 em 4;
- 5 - Faça um programa que peça para o usuário digitar um número qualquer porém só termine quando o usuário digitar o número 4;
- 6 - Faça um programa que funcione como o anterior porém mostre o quadrado do número digitado;