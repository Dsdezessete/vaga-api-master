const express = require('express');
const swaggerUi = require('swagger-ui-express');
const vagasRoutes = require('./repositories/routes/vagasRoutes');
const specs = require('./repositories/docs/swagger');

const app = express();

app.use(express.json());


app.use('/vagas', vagasRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
