const mongoose = require("mongoose");

const chamadoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "O título é obrigatório"],
    },
    descricao: {
      type: String,
      required: [true, "A descrição é obrigatória"],
    },
    prioridade: {
      type: String,
      enum: ["Baixa", "Media", "Alta"],
      required: [true, "A prioridade é obrigatória"],
    },
    status: {
      type: String,
      enum: ["Aberto", "Em andamento", "Resolvido", "Fechado"],
      default: "Aberto",
    },
    dataAbertura: {
      type: Date,
      default: Date.now,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: [true, "O usuário é obrigatório"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Chamado", chamadoSchema);
