Para criar um projeto utilizando Express.js para desenvolver uma API RESTful para a entidade Aluno, siga os passos abaixo. Este guia inclui a configuração do projeto, a criação do servidor Express, a implementação das rotas e a manipulação dos dados.

1. Configurando o Ambiente

Passo 1: Instale o Node.js
Certifique-se de que você tem o Node.js instalado em sua máquina. Você pode verificar isso executando node -v e npm -v no terminal.

Passo 2: Crie a Pasta do Projeto
Abra o terminal e crie uma nova pasta para o seu projeto. Navegue até essa pasta:

mkdir api-alunos
cd api-alunos

Passo 3: Inicialize o Projeto Node.js
Inicie um novo projeto Node.js com o seguinte comando:

npm init -y

2. Instalando Dependências

Passo 4: Instale o Express
Instale o Express.js e o body-parser (para lidar com os dados do corpo da requisição):

npm install express body-parser

3. Estrutura do Projeto

Passo 5: Crie a Estrutura de Pastas
Dentro da pasta do seu projeto, crie as seguintes pastas e arquivos:

mkdir src
touch src/index.js

4. Implementando a API

Passo 6: Código do Servidor

Abra o arquivo src/index.js e insira o seguinte código:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Dados fictícios para simular um banco de dados
let alunos = [];
let idCounter = 1;

// Criar um novo aluno (POST)
app.post('/alunos', (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const novoAluno = { id: idCounter++, nome, email, nome_curso };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

// Listar todos os alunos (GET)
app.get('/alunos', (req, res) => {
    res.json(alunos);
});

// Buscar um aluno específico (GET)
app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(a => a.id === parseInt(req.params.id));
    if (!aluno) return res.status(404).send('Aluno não encontrado.');
    res.json(aluno);
});

// Atualizar um aluno existente (PUT)
app.put('/alunos/:id', (req, res) => {
    const aluno = alunos.find(a => a.id === parseInt(req.params.id));
    if (!aluno) return res.status(404).send('Aluno não encontrado.');

    const { nome, email, nome_curso } = req.body;
    aluno.nome = nome;
    aluno.email = email;
    aluno.nome_curso = nome_curso;

    res.json(aluno);
});

// Excluir um aluno (DELETE)
app.delete('/alunos/:id', (req, res) => {
    const alunoIndex = alunos.findIndex(a => a.id === parseInt(req.params.id));
    if (alunoIndex === -1) return res.status(404).send('Aluno não encontrado.');

    alunos.splice(alunoIndex, 1);
    res.status(204).send(); // No Content
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(Servidor rodando em http://localhost:${port});
});

5. Executando a API

Passo 7: Inicie o Servidor
No terminal, execute o seguinte comando para iniciar o servidor:

node app

6. Testando a API

Você pode usar ferramentas como Postman ou cURL para testar as rotas da sua API. Aqui estão alguns exemplos de como interagir com a API:

Criar um novo aluno (POST):


POST http://localhost:3000/alunos
Content-Type: application/json

{
    "nome": "Daniel Silva",
    "email": "daniel@example.com",
    "nome_curso": "Análise e Desenvolvimento de Sistemas"
}

Listar todos os alunos (GET):


GET http://localhost:3000/alunos

Buscar um aluno específico (GET):


GET http://localhost:3000/alunos/1

Atualizar um aluno existente (PUT):


PUT http://localhost:3000/alunos/1
Content-Type: application/json

{
    "nome": "João da Silva",
    "email": "joaosilva@example.com",
    "nome_curso": "Engenharia de Computação"
}

Excluir um aluno (DELETE):


DELETE http://localhost:3000/alunos/1

Considerações Finais

Esse é um exemplo básico de uma API RESTful usando Express.js. Para produção, você deve considerar implementar uma base de dados real (como MongoDB, PostgreSQL, etc.), autenticação e tratamento de erros mais robusto

