# Aula02 - Arquitetura de sistemas Operacionais

## Little-endian e Big-endian

- Little-endian significa armazenar bytes na ordem do menor para o mais significativo (onde o byte menos significativo ocupa o primeiro, ou menor, endereço), comparável a maneira comum de escrever datas na Europa (por exemplo, 31 Dezembro de 2050)

- Big-endian significa armazenar bytes na ordem do mais significativo para o menos significativo (onde o byte mais significativo ocupa o primeiro, ou menor, endereço), comparável à maneira comum de escrever datas em banco de dados (por exemplo, 2050-12-31).

- endian.c
```c
/* 
   Write a C program to find out if the underlying 
   architecture is little endian or big endian. 
 */
 
#include <stdio.h>
int main ()
{
  unsigned int x = 0x76543210;
  char *c = (char*) &x;
 
  printf ("*c is: 0x%x\n", *c);
  if (*c == 0x10)
  {
    printf ("A arquitetura do Computador � little endian. \n");
  }
  else
  {
     printf ("A arquitetura do Computador � big endian. \n");
  }
 
  return 0;
}

```