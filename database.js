const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, './database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Falha ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão bem-sucedida com o banco de dados SQLite');
        createTables();
    }
});

function createTables() {
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS alunos (
            id TEXT PRIMARY KEY,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            nome_curso TEXT NOT NULL
        )
    `;

    db.run(createTableSQL, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela alunos:', err);
        } else {
            console.log('Tabela alunos criada com sucesso ou já existente');
        }
    });
    
}

module.exports = db;
