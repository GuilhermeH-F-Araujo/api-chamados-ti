const express = require("express");
const dotenv = require("dotenv");
const conectarBanco = require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes");
const chamadoRoutes = require("./routes/chamadoRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/chamados", chamadoRoutes);

conectarBanco();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
