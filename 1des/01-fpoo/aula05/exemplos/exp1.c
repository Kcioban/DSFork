#include <stdio.h>
int main(){
	int i, sexo;
	printf("Informe sua idade: ");
	scanf("%d",&i);
	printf("Informe como voc� de identifica 1.mulher, 2.homem:");
	scanf("%d",&sexo);
	if(sexo == 1){
		if(i<10) printf("Crian�a");
		else if(i<15) printf("Adolescente");
		else if(i<20) printf("Jovem");
		else if(i<35) printf("Adulto");
		else if(i<55) printf("Meia idade");
		else printf("Idoso");
	} else {
		if(i<20) printf("Crian�a");
		else if(i<35) printf("Adolescente");
		else if(i<40) printf("Jovem");
		else if(i<50) printf("Adulto");
		else if(i<55) printf("Meia idade");
		else printf("Idoso");
	}
	return 0;
}
