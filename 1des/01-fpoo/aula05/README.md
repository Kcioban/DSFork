# Aula05 - Exempos Condicionais
## Linguagem C
![Lousa1](./lousa1.jpg)
## Exemplos
- exp1.c
```c
#include <stdio.h>
int main(){
	int i;
	printf("Informe sua idade: ");
	scanf("%d",&i);
	if(i<10) printf("Criança");
	else if(i<15) printf("Adolescente");
	else if(i<20) printf("Jovem");
	else if(i<35) printf("Adulto");
	else if(i<55) printf("Meia idade");
	else printf("Idoso");
	return 0;
}
```
- "Descontraindo, sabemos que as fases da vida passam diferente para homens e mulheres, segundo a teoria da relatividade moral de Alberto Ainstem."
- Desta forma faça com que o programa pergunte se o usuário é homem ou mulher e classifique de forma diferente
- exp2.c
```c
#include <stdio.h>
int main(){
	int i, sexo;
	printf("Informe sua idade: ");
	scanf("%d",&i);
	printf("Informe como você de identifica 1.mulher, 2.homem:");
	scanf("%d",&sexo);
	if(sexo == 1){
		if(i<10) printf("Criança");
		else if(i<15) printf("Adolescente");
		else if(i<20) printf("Jovem");
		else if(i<35) printf("Adulta");
		else if(i<55) printf("Meia idade");
		else printf("Idosa");
	} else {
		if(i<20) printf("Criança");
		else if(i<35) printf("Adolescente");
		else if(i<40) printf("Jovem");
		else if(i<50) printf("Adulto");
		else if(i<55) printf("Meia idade");
		else printf("Idoso");
	}
	return 0;
}
```
- Caso o usuário se identifique com um gênero diferente crie uma terceira classificação.
- exp3.c
```c
#include <stdio.h>
int main(){
	int i, sexo;
	printf("Informe sua idade: ");
	scanf("%d",&i);
	printf("Informe como você de identifica 1.mulher, 2.homem, 3.outro:");
	scanf("%d",&sexo);
	if(sexo == 1){
		if(i<10) printf("Criança");
		else if(i<15) printf("Adolescente");
		else if(i<20) printf("Jovem");
		else if(i<35) printf("Adulta");
		else if(i<55) printf("Meia idade");
		else printf("Idosa");
	} else if(sexo == 2){
		if(i<20) printf("Criança");
		else if(i<35) printf("Adolescente");
		else if(i<40) printf("Jovem");
		else if(i<50) printf("Adulto");
		else if(i<55) printf("Meia idade");
		else printf("Idoso");
	}else if(sexo == 3){
		if(i<=10) printf("Criança");
		else if(i<=15) printf("Adolescente");
		else if(i<=20) printf("Jovem");
		else if(i<=35) printf("Adulte");
		else if(i<=55) printf("Meia idade");
		else printf("Idose");		
	}else{
		printf("Opção inválida");
	}
	return 0;
}
```
- O mesmo programa anterior escrito com **switch case break**
exp4.c
```c
#include <stdio.h>
int main(){
	int i, sexo;
	printf("Informe sua idade: ");
	scanf("%d",&i);
	printf("Informe como você de identifica 1.mulher, 2.homem, 3.outro:");
	scanf("%d",&sexo);
	switch(sexo){
		case 1:
			if(i<10) printf("Criança");
			else if(i<15) printf("Adolescente");
			else if(i<20) printf("Jovem");
			else if(i<35) printf("Adulta");
			else if(i<55) printf("Meia idade");
			else printf("Idosa");
			break;
		case 2:
			if(i<20) printf("Criança");
			else if(i<35) printf("Adolescente");
			else if(i<40) printf("Jovem");
			else if(i<50) printf("Adulto");
			else if(i<55) printf("Meia idade");
			else printf("Idoso");
			break;
		case 3:
			if(i<=10) printf("Criança");
			else if(i<=15) printf("Adolescente");
			else if(i<=20) printf("Jovem");
			else if(i<=35) printf("Adulta(o)");
			else if(i<=55) printf("Meia idade");
			else printf("Idosa(o)");
			break;
		default:
			printf("Opção inválida");
	}
	return 0;
}
```
