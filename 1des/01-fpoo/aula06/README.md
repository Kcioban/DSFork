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
- atv1.c
```c
#include<stdio.h>
int main(){
	int i;
	for(i = 1; i <= 20; i++)
		printf("%d\n",i);
	return 0;
}
```
- atv2.c
```c
#include<stdio.h>
int main(){
	int i;
	for(i = 20; i >= 1; i--)
		printf("%d\n",i);
	return 0;
}
```
- atv3.c
```c
#include<stdio.h>
int main(){
	int i;
	for(i = 0; i <= 20; i+=2)
		printf("%d\n",i);
	return 0;
}
```
- atv4.c
```c
#include<stdio.h>
int main(){
	int i;
	for(i = 20; i >= 0; i-=2)
		printf("%d\n",i);
	return 0;
}
```
- atv5.c
```c
#include<stdio.h>
int main(){
	int i;
	do{
		printf("Digite um número inteiro: ");
		scanf("%d",&i);
	}while(i != 4);
	return 0;
}
```
- atv6.c
```c
#include<stdio.h>
int main(){
	int i = 0;
	while(i != 4){
		printf("Digite um número inteiro: ");
		scanf("%d",&i);
	}
	return 0;
}
```
