const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const chamadoController = require('../controllers/chamadoController');
router.get("/", usuarioController.getAllUsuarios);
router.get("/:id", usuarioController.getUsuarioById);
router.post("/", usuarioController.createUsuario);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

module.exports = router;
router.get('/:id/chamados', chamadoController.getChamadosByUsuario);