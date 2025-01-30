# GGLog API 🚚

API para gerenciamento de entregas e logística, com sistema de rastreamento, logs de status e autenticação de usuários.

## ✨ Funcionalidades

- **Gerenciamento de entregas**: Criação e acompanhamento de deliveries
- **Rastreamento em tempo real**: Logs detalhados do status de cada entrega
- **Sistema de status**: Acompanhamento do ciclo de vida das entregas
- **Autenticação segura**: Sistema JWT para proteção dos endpoints
- **Histórico completo**: Registro de todas as atualizações de status
- **Validação de dados**: Garantia de integridade das informações

## 🛠 Tecnologias

- **Core**: Node.js, Express, TypeScript
- **ORM**: Prisma
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT
- **Deploy**: Render

## 🔑 Endpoints Principais

### Autenticação
| Método | Caminho       | Descrição          |
|--------|---------------|--------------------|
| POST   | `/sessions`   | Login de usuário   |

### Usuários
| Método | Caminho       | Descrição          |
|--------|---------------|--------------------|
| POST   | `/users`      | Criar novo usuário |

### Entregas
| Método | Caminho                    | Descrição                |
|--------|---------------------------|--------------------------|
| POST   | `/deliveries`             | Criar nova entrega       |
| GET    | `/deliveries`             | Listar todas entregas    |
| PATCH  | `/deliveries/:id/status`  | Atualizar status        |

### Logs de Entrega
| Método | Caminho          | Descrição                        |
|--------|------------------|----------------------------------|
| POST   | `/logs`          | Criar log de atualização         |
| GET    | `/logs/:id`      | Buscar logs de uma entrega       |

## 📝 Detalhes das Requisições

### Criar Usuário
```json
POST /users
Body: {
  "name": "Nome Completo",
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### Login
```json
POST /sessions
Body: {
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### Criar Entrega
```json
POST /deliveries
Headers: { Authorization: Bearer {token} }
Body: {
  "user_id": "user-uuid",
  "description": "Descrição da entrega"
}
```

### Atualizar Status da Entrega
```json
PATCH /deliveries/:id/status
Headers: { Authorization: Bearer {token} }
Body: {
  "status": "delivered"
}
```

### Registrar Log
```json
POST /logs
Headers: { Authorization: Bearer {token} }
Body: {
  "description": "Atualização do status da entrega",
  "delivery_id": "delivery-uuid"
}
```

## 🚀 Começando

### Pré-requisitos
- Node.js
- PostgreSQL
- NPM/Yarn

### Instalação
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/gglog-api.git

# Instalar dependências
cd gglog-api
npm install

# Configurar variáveis de ambiente
cp .env.example .env
```

### Variáveis de Ambiente (.env)
```ini
DATABASE_URL="postgresql://user:password@localhost:5432/gglog?schema=public"
JWT_SECRET="seu_jwt_secret"
port="3000"
```

### Executando
```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start
```

## 🔒 Autenticação

Todos endpoints (exceto /users e /sessions) requerem autenticação:
```http
Authorization: Bearer {token_jwt}
```

## 🤝 Contribuição

1. Fork o repositório
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
