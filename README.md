🖥️ API de Chamados de TI
Sistema de gerenciamento de chamados de suporte técnico desenvolvido com Node.js, Express e MongoDB.

📋 Sobre o Projeto
Esta API permite que usuários de uma empresa abram chamados de suporte de TI, acompanhem o status e a prioridade de cada chamado, e que a equipe técnica gerencie todo o fluxo de atendimento.
Fluxo do sistema
Usuário abre chamado
        ↓
Chamado recebe prioridade (Baixa / Media / Alta)
        ↓
Equipe acompanha pelo status (Aberto → Em andamento → Resolvido)
        ↓
Chamado é encerrado (Fechado)

🚀 Tecnologias Utilizadas
TecnologiaVersãoFinalidadeNode.js≥ 20Ambiente de execuçãoExpress5.2.1Framework webMongoose9.6.2ODM para MongoDBdotenv17.4.2Variáveis de ambienteMongoDB Atlas—Banco de dados na nuvem

📁 Estrutura do Projeto
├── config/
│   └── db.js                 # Conexão com o MongoDB
├── controllers/
│   ├── usuarioController.js  # Lógica dos usuários
│   └── chamadoController.js  # Lógica dos chamados
├── models/
│   ├── usuarioModel.js       # Schema do usuário
│   └── chamadoModel.js       # Schema do chamado
├── routes/
│   ├── usuarioRoutes.js      # Rotas de usuários
│   └── chamadoRoutes.js      # Rotas de chamados
├── .env                      # Variáveis de ambiente (não versionar)
├── app.js                    # Arquivo principal
└── package.json

⚙️ Como Executar
Pré-requisitos

Node.js instalado (versão 20 ou superior)
Conta no MongoDB Atlas

Passo a passo
1. Clone o repositório
bashgit clone https://github.com/seu-usuario/api-chamados-ti.git
cd api-chamados-ti
2. Instale as dependências
bashnpm install
3. Configure o arquivo .env
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
PORT=3000
MONGO_URI=mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/chamados_db?appName=Cluster0
4. Inicie o servidor
bashnpm start
Servidor rodando em: http://localhost:3000

🗂️ Entidades
Usuário
Representa um funcionário da empresa que pode abrir chamados.
CampoTipoObrigatórioDescriçãonomeString✅Nome completo do usuárioemailString✅E-mail único do usuáriosetorString✅Setor da empresacreatedAtDate—Data de criação (automático)
Chamado
Representa um chamado de suporte técnico aberto por um usuário.
CampoTipoObrigatórioDescriçãotituloString✅Título do chamadodescricaoString✅Descrição detalhada do problemaprioridadeString✅Baixa, Media ou AltastatusString—Aberto, Em andamento, Resolvido ou FechadodataAberturaDate—Preenchido automaticamenteusuarioObjectId✅Referência ao usuário (relacionamento)

🔗 Relacionamento entre Entidades
Usuario (1) ─────────── (N) Chamado
Um usuário pode abrir vários chamados. O campo usuario no chamado armazena o _id do usuário, criando um relacionamento por referência no MongoDB.
Exemplo de chamado retornado pela API (com populate):
json{
  "_id": "6845f2abc123...",
  "titulo": "Computador não liga",
  "descricao": "Ao apertar o botão nada acontece",
  "prioridade": "Alta",
  "status": "Aberto",
  "dataAbertura": "2026-05-08T14:00:00.000Z",
  "usuario": {
    "_id": "665fa1234...",
    "nome": "João Silva",
    "email": "joao@empresa.com",
    "setor": "Financeiro"
  }
}

📡 Endpoints
Usuários — /api/usuarios
MétodoRotaDescriçãoGET/api/usuariosLista todos os usuáriosGET/api/usuarios/:idBusca usuário por IDPOST/api/usuariosCria novo usuárioPUT/api/usuarios/:idAtualiza usuárioDELETE/api/usuarios/:idRemove usuárioGET/api/usuarios/:id/chamadosLista chamados de um usuário
Chamados — /api/chamados
MétodoRotaDescriçãoGET/api/chamadosLista todos os chamadosGET/api/chamados/:idBusca chamado por IDPOST/api/chamadosAbre novo chamadoPUT/api/chamados/:idAtualiza chamadoDELETE/api/chamados/:idRemove chamadoGET/api/chamados/abertosLista chamados com status AbertoGET/api/chamados/alta-prioridadeLista chamados de Alta prioridade

📬 Exemplos de Requisição
Criar usuário
httpPOST /api/usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "setor": "Financeiro"
}
Abrir chamado
httpPOST /api/chamados
Content-Type: application/json

{
  "titulo": "Computador não liga",
  "descricao": "Ao apertar o botão power nada acontece",
  "prioridade": "Alta",
  "usuario": "665fa1234abc..."
}
Atualizar status do chamado
httpPUT /api/chamados/:id
Content-Type: application/json

{
  "status": "Em andamento"
}

✅ Validações
A API rejeita dados inválidos e retorna mensagens de erro claras.
Prioridade inválida:
json// Requisição
{ "prioridade": "Super Alta" }

// Resposta 400
{ "mensagem": "Erro ao criar chamado", "erro": "..." }
Valores aceitos:

prioridade: Baixa, Media, Alta
status: Aberto, Em andamento, Resolvido, Fechado


👨‍💻 Autor Guilherme Henrique Fernandes de Araujo - Com base no Projeto - ApiContatos-TAPWM-08-05
