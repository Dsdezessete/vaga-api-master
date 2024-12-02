# 📚API REST para Gerenciamento de Alunos

Esta API RESTful, construída com Node.js, Express e SQLite, foi projetada para gerenciar informações de alunos em uma instituição de ensino.


## ⚙️Funcionalidades

**Criar Aluno**: Adiciona um novo aluno à base de dados.
**Listar Alunos**: Recupera todos os alunos cadastrados.
**Atualizar Aluno**: Modifica as informações de um aluno existente.
**Remover Aluno**: Exclui um aluno da base de dados.

## 🔨Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para desenvolvimento de aplicações web.
- **SQLite**: Sistema de gerenciamento de banco de dados leve.
- **Swagger**: Documentação da API.

## 🖐️Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [SQLite](https://www.sqlite.org/)

## 🛠️Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Dsdezessete/vaga-api-master
   cd seu-repositorio
   
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. A API estará disponível em `http://localhost:3000`.

## ♾ Rotas

### Criar Aluno

- **Endpoint**: `POST /alunos`
- **Body**:
  ```json
  {
    "nome": "Nome do Aluno",
    "email": "email@exemplo.com",
    "nome_curso": "Nome do Curso"
  }
  ```

### Listar Alunos

- **Endpoint**: `GET /alunos`

### Atualizar Aluno

- **Endpoint**: `PUT /alunos/:id`
- **Body**:
  ```json
  {
    "nome": "Novo Nome",
    "email": "novoemail@exemplo.com",
    "nome_curso": "Novo Curso"
  }
  ```

### Remover Aluno

- **Endpoint**: `DELETE /alunos/:id`

## Documentação

A documentação da API está disponível através do Swagger. Você pode acessá-la em `http://localhost:3000/docs`.

## Autores
***Larissa Gomes***

***[Daniel Silva ](https://www.linkedin.com/in/daniel-silva-840b0b242/)***

***Laine Souza***

***Carlos Crispim***

***Thales Amorim***

