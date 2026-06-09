const express = require('express');
const router = express.Router();
const chamadoController = require('../controllers/chamadoController');

// Endpoints extras (antes do /:id para não conflitar)
router.get('/abertos', chamadoController.getChamadosAbertos);
router.get('/alta-prioridade', chamadoController.getChamadosAltaPrioridade);

// CRUD padrão
router.get('/', chamadoController.getAllChamados);
router.get('/:id', chamadoController.getChamadoById);
router.post('/', chamadoController.createChamado);
router.put('/:id', chamadoController.updateChamado);
router.delete('/:id', chamadoController.deleteChamado);

module.exports = router;