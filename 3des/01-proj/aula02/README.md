# Recursos Avançados - ORM Prisma
## Projeto Exemplo
### Sistema de Gestão de pediso em um Restaurante
- [Lousa1](lousa1.jpg)
- [Lousa1](lousa2.jpg)

## Passo a passo para um novo projeto com Prisma
### Abrir o VSCode
### Abrir um terminal: CTRL + "
- Navegar até a pasta do seu projeto API.
- Instalar o risma globalmente e iniciar o projeto com MySQL
```bash
  npm i -g prisma
  prisma init --datasource-provider mysql
```
- Neste caso estamos utilizando o prisma com o SGBD mysql

### Configurar o .ENV
- Substituir usuario, senha, host(se necessario), porta(se necessario), database
- Ex:
  ```env
    DATABASE_URL="mysql://root@localhost:3306/afazer?schema=public&timezone=UTC"
    # DATABASE_URL="mysql://user:senha@servidor:3306/dbname?schema=public&timezone=UTC"
  ```
### Criar os models
./prisma/schema.prisma
```javascript
```
### Gerar a migrate para criar a base de dados
```cmd
- prisma migrate dev --name "descricao"
```
### Codificar os src/controles, src/rotas e server.js
./src/controllers/cardapio-controller.js
```javascript
```
