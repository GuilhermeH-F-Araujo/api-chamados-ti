# API de Chamados de TI

API REST para gerenciamento de chamados de suporte técnico.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose

## Como executar

**1. Instalar dependências**
```bash
npm install
```

**2. Criar o arquivo `.env` na raiz do projeto**
```
PORT=3000
MONGO_URI=sua_uri_do_mongodb_aqui
```

**3. Iniciar o servidor**
```bash
npm start
```

## Endpoints

### Usuários

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/usuarios | Lista todos os usuários |
| GET | /api/usuarios/:id | Busca usuário por ID |
| POST | /api/usuarios | Cria novo usuário |
| PUT | /api/usuarios/:id | Atualiza usuário |
| DELETE | /api/usuarios/:id | Remove usuário |
| GET | /api/usuarios/:id/chamados | Lista chamados de um usuário |

### Chamados

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/chamados | Lista todos os chamados |
| GET | /api/chamados/:id | Busca chamado por ID |
| POST | /api/chamados | Abre novo chamado |
| PUT | /api/chamados/:id | Atualiza chamado |
| DELETE | /api/chamados/:id | Remove chamado |
| GET | /api/chamados/abertos | Lista chamados em aberto |
| GET | /api/chamados/alta-prioridade | Lista chamados de alta prioridade |

## Exemplos de uso

### Criar usuário
```http
POST /api/usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "setor": "Financeiro"
}
```

### Abrir chamado
```http
POST /api/chamados
Content-Type: application/json

{
  "titulo": "Computador não liga",
  "descricao": "Ao apertar o botão nada acontece",
  "prioridade": "Alta",
  "usuario": "id_do_usuario_aqui"
}
```

### Atualizar status
```http
PUT /api/chamados/:id
Content-Type: application/json

{
  "status": "Em andamento"
}
```

## Valores aceitos

**prioridade:** "`Baixa`" "`Media`" "`Alta`"

**status:** "`Aberto`" "`Em andamento`"  "`Resolvido`" "`Fechado`"
