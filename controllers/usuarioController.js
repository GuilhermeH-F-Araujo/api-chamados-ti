const Usuario = require("../models/usuarioModel");

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar usuários", erro: err.message });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario)
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    res.json(usuario);
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar usuário", erro: err.message });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (err) {
    res
      .status(400)
      .json({ mensagem: "Erro ao criar usuário", erro: err.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!usuarioAtualizado)
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    res.json(usuarioAtualizado);
  } catch (err) {
    res
      .status(400)
      .json({ mensagem: "Erro ao atualizar usuário", erro: err.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const usuarioRemovido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioRemovido)
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    res.status(204).end();
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao excluir usuário", erro: err.message });
  }
};
