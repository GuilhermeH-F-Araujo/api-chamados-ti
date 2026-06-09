const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "O nome é obrigatório"],
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"],
      unique: true,
    },
    setor: {
      type: String,
      required: [true, "O setor é obrigatório"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Usuario", usuarioSchema);
