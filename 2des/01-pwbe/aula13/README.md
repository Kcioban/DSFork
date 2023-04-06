# Atividades Formativas

## 1 - Avaliação Física

|Contextualização:|
|-|
|A Sra. Carla Prestes é nutricionista e precisa de um sistema para cadastrar seus pacientes e que faça um rápido pré-diagnóstico|

- O Analista de sistemas já realizou a **análise de requisitos** e documentou conforme diagramas a seguir:

|Documento|Diagrama|
|-|-|
|DER Modelo Conceitual|![DER Modelo Conceitual](./imgs/der_imc.png)|
|UML - DC|![UML DC (Diagrama de Classes)](./imgs/uml_dc_imc.png)|
|UML - DCU|![UML DCU (Diagrama de Casos de Uso)](./imgs/uml_dcu_imc.png)|

|Desafio:|
|-|
|Você foi contratado como Programador Back-End, por isso deve desenvolver a API com as funcionalidades documentadas, utilize os dados a seguir para testar sua aplicação através da ferramenta **Insomnia**|

|Nome|Nascimento|peso|Altura|
|-|-|-|-|
|Jair Rodrigues|1981-01-03|85.5|1.75|
|Marieta Severo|1995-03-04|44.3|1.55|
|Karina Silva|2002-05-13|88|1,73|
|Solange Nascimento|2005-12-01|95|1.58|
|Marcos Pontes|2001-12-03|60|1.98|

|Observações:|
|-|
|Dados calculados nem sempre precisam ser armazenados em bancos de dados:<br>
- Podem ser calculados através de **visões**(Views) no SGBD e apenas exibidos os resultados,<br>
- Podem ser calculados na API back-end através de métodos/funções:<br>
    - Podem ser calculados quando os dados são listados um a um<br>
    - Podem ser calculados quando os dados são todos de uma vez<br>
    - Podem ser calculados quando os dados são cadastrados e armazenados no banco de dados<br>
- Para cada problema devemos avaliar qual a melhor alternativa quanto a processamento e armazenamento|