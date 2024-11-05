const express = require('express');
const router = express.Router();
const vagasController = require('../controllers/vagasController');

// Definindo as rotas
router.get('/', vagasController.findAll);
router.post('/', vagasController.create);
router.put('/:id', vagasController.update);
router.delete('/:id', vagasController.remove);

module.exports = router;
