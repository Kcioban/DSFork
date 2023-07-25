#include <stdio.h>
/*
	Este é um exemplo da diferença
	entre atribuição e comparação
*/
int main(){
	int x  = 10; //Declaração e atribuição
	int y = 15;
	int z = x == y; //Comparação igualdade
	printf("O valor de z = %d\n",z);
	int z = x != y; //Comparação diferença
	printf("O valor de z = %d\n",z);
	int z = x > y; //Comparação Maior
	printf("O valor de z = %d\n",z);
	int z = x < y; //Comparação Maior
	printf("O valor de z = %d\n",z);
	int z = x <= y; //Comparação Menor ou igual
	printf("O valor de z = %d\n",z);
	int z = x >= y; //Comparação Maior ou igual
}
