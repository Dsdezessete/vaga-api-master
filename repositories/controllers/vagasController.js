const { v4: uuidv4 } = require('uuid');

let vagas = [];

/**
 * @swagger
 * tags:
 *   name: Vagas
 *   description: API para gerenciar vagas de emprego
 */

/**
 * @swagger
 * /vagas:
 *   get:
 *     summary: Lista todas as vagas
 *     tags: [Vagas]
 *     responses:
 *       200:
 *         description: Lista de vagas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   descricao:
 *                     type: string
 *                   titulo:
 *                     type: string
 *                   dataCadastro:
 *                     type: string
 *                   telefone:
 *                     type: string
 *                   empresa:
 *                     type: string
 */
function findAll(req, res) {
    res.json(vagas);
}

/**
 * @swagger
 * /vagas:
 *   post:
 *     summary: Cria uma nova vaga
 *     tags: [Vagas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descricao
 *               - titulo
 *               - dataCadastro
 *               - telefone
 *               - empresa
 *             properties:
 *               descricao:
 *                 type: string
 *               titulo:
 *                 type: string
 *               dataCadastro:
 *                 type: string
 *               telefone:
 *                 type: string
 *               empresa:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vaga criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 descricao:
 *                   type: string
 *                 titulo:
 *                   type: string
 *                 dataCadastro:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 empresa:
 *                   type: string
 */
function create(req, res) {
    const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
    const vaga = {
        id: uuidv4(),
        descricao,
        titulo,
        dataCadastro,
        telefone,
        empresa
    };
    vagas.push(vaga);
    res.status(200).json(vaga);
}

/**
 * @swagger
 * /vagas/{id}:
 *   put:
 *     summary: Atualiza uma vaga existente
 *     tags: [Vagas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vaga a ser atualizada
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descricao
 *               - titulo
 *               - dataCadastro
 *               - telefone
 *               - empresa
 *             properties:
 *               descricao:
 *                 type: string
 *               titulo:
 *                 type: string
 *               dataCadastro:
 *                 type: string
 *               telefone:
 *                 type: string
 *               empresa:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vaga atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 descricao:
 *                   type: string
 *                 titulo:
 *                   type: string
 *                 dataCadastro:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 empresa:
 *                   type: string
 */
function update(req, res) {
    const { id } = req.params;
    const { descricao, titulo, dataCadastro, telefone, empresa } = req.body;
    
    const index = vagas.findIndex(vaga => vaga.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Vaga não encontrada' });
    }
    vagas[index] = {
        id,
        descricao,
        titulo,
        dataCadastro,
        telefone,
        empresa
    };
    res.json(vagas[index]);
}

/**
 * @swagger
 * /vagas/{id}:
 *   delete:
 *     summary: Remove uma vaga
 *     tags: [Vagas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da vaga a ser removida
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vaga removida com sucesso
 *       404:
 *         description: Vaga não encontrada
 */
function remove(req, res) {
    const { id } = req.params;
    
    const index = vagas.findIndex(vaga => vaga.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Vaga não encontrada' });
    }
    vagas.splice(index, 1);
    res.status(200).json({ message: 'Vaga removida com sucesso' });
}

module.exports = {
    findAll,
    create,
    update,
    remove
};
