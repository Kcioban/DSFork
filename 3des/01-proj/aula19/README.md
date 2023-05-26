# Projeto final

## Prazos
- (31/05/2023) Entrega do documento do projeto para correções (doc ou pdf)
- (12/06/2023) Entrega do prototipo em funcionamento
    - Funcionalidades **essenciais**
    - Funcionalidades importantes
    - Funcionalidades desejáveis
- (13, 14, 15 e 16/06/2023) Apresentações dos projetos aos professores, alunos, coordenação e/ou empreendedores
- (15/06/2023) Entrega do documento do projeto versão final (PDF)

## Estrutura do documento do projeto
### Formatação ABNT para Monografia ou TCC

- Capa
- Contra Capa
- Resumo
- Sumario
- Justificativa

- Objetivos
    - Geral
    - Específico

- Introdução

- Capítulo I TAP
- Capítulo II Cronograma - Atualizado
- Capítulo III EAP
    - Definições e orientações
    - RN (Regras de negócio)
    - RF (Requisitos Funcionais + CDU(Diagrama de Casos de Uso))
    - NF (Requisitos não Funcionais, Organograma)
- Capítulo IV Orçamento
- Capítulo V Documentação da estrutura da solução
    - Banco de dados
        - DER Conceitual
        - DER Lógico
    - Back-End
        - Diagrama de Classes do Schema prisma ou mongodb
    - Interface web Front-End e/ou Mobile
        - Diagrama de Atividades apenas do fluxo principal da solução
- Capítulo VI Controle
    - Dados de teste (csv, json)
    - Plano de Testes (CheckList)
    - Relatório de testes
- Capítulo VII Execução
    - Web e ou Mobile (Print das Telas)
- Conclusão ou Resultados
    - Resumo das lições aprendidas
    - Planos para o futuro
    - link do portifolio dos integrantes do grupo
    - link do github dos integrantes do grupo
- Bibliografias
    - Livros pesquisados
    - Link dos sites, foruns pesquisados durante o projeto


### Organização do Repositório github
---
- README.md 
   - Com instruções de como executar o projeto
       - O que é necessário ter intalado (NodeJS, XAMPP, Expo, MongoDB...)
       - Qual a ordem da execução ex:
           - Abrir o Xampp (Start em MySQL)
           - Abrir com VsCode
           - Abrir terminal cmd
                - cd backend
                - npm i ou yarn
                - prisma migrate dev --name "descricao"
                - nodemon ou npm start ou node server.js
                - cd ..
                - cd app
                - npm i
                - expo start
                - front index.html (Executar com live server)
- Pastas
    - ./app (Aplicativo Mobile)
    - ./docs (Documento do projeto, arquivo de testes insomnia)
    - ./back (API ou BackEnd MVC)
    - ./front (Interface Web)
---
