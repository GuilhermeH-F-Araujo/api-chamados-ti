const Chamado = require("../models/chamadoModel");

exports.getAllChamados = async (req, res) => {
  try {
    const chamados = await Chamado.find().populate(
      "usuario",
      "nome email setor",
    );
    res.json(chamados);
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar chamados", erro: err.message });
  }
};

exports.getChamadoById = async (req, res) => {
  try {
    const chamado = await Chamado.findById(req.params.id).populate(
      "usuario",
      "nome email setor",
    );
    if (!chamado)
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    res.json(chamado);
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar chamado", erro: err.message });
  }
};

exports.createChamado = async (req, res) => {
  try {
    const novoChamado = new Chamado(req.body);
    await novoChamado.save();
    res.status(201).json(novoChamado);
  } catch (err) {
    res
      .status(400)
      .json({ mensagem: "Erro ao criar chamado", erro: err.message });
  }
};

exports.updateChamado = async (req, res) => {
  try {
    const chamadoAtualizado = await Chamado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!chamadoAtualizado)
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    res.json(chamadoAtualizado);
  } catch (err) {
    res
      .status(400)
      .json({ mensagem: "Erro ao atualizar chamado", erro: err.message });
  }
};

exports.deleteChamado = async (req, res) => {
  try {
    const chamadoRemovido = await Chamado.findByIdAndDelete(req.params.id);
    if (!chamadoRemovido)
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    res.status(204).end();
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao excluir chamado", erro: err.message });
  }
};

// --- Endpoints extras (diferencial) ---

exports.getChamadosAbertos = async (req, res) => {
  try {
    const chamados = await Chamado.find({ status: "Aberto" }).populate(
      "usuario",
      "nome email setor",
    );
    res.json(chamados);
  } catch (err) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar chamados abertos", erro: err.message });
  }
};

exports.getChamadosAltaPrioridade = async (req, res) => {
  try {
    const chamados = await Chamado.find({ prioridade: "Alta" }).populate(
      "usuario",
      "nome email setor",
    );
    res.json(chamados);
  } catch (err) {
    res
      .status(500)
      .json({
        mensagem: "Erro ao buscar chamados de alta prioridade",
        erro: err.message,
      });
  }
};

exports.getChamadosByUsuario = async (req, res) => {
  try {
    const chamados = await Chamado.find({ usuario: req.params.id }).populate(
      "usuario",
      "nome email setor",
    );
    if (!chamados.length)
      return res
        .status(404)
        .json({ mensagem: "Nenhum chamado encontrado para este usuário" });
    res.json(chamados);
  } catch (err) {
    res
      .status(500)
      .json({
        mensagem: "Erro ao buscar chamados do usuário",
        erro: err.message,
      });
  }
};
