const swaggerJsdoc = require('swagger-jsdoc');

// Definição das opções do Swagger
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Vagas",
            version: "1.0.0",
            description: "API para gerenciamento de vagas de emprego",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ['./repositories/controllers/vagasController.js'], // Verifique se o caminho está correto
};

// Gerando a especificação Swagger
const specs = swaggerJsdoc(options);

module.exports = specs;
