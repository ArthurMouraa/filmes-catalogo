# 🎬 Aplicação Fullstack de Gerenciamento de Filmes

Este é um projeto fullstack para gerenciamento de filmes, onde os vídeos são armazenados em nuvem via **Cloudinary** e a aplicação é composta por um frontend moderno em **Next.js** e um backend robusto em **NestJS**, seguindo arquitetura limpa.

---

## 🔥 Funcionalidades

### Frontend (Next.js)
- ✅ Interface moderna e responsiva com **Material UI (MUI)**
- ✅ Formulário de cadastro com **React Hook Form**
- ✅ Upload de vídeos via **Cloudinary Widget**
- ✅ Consumo de API com **Fetch API**
- ✅ Exibição em lista dos filmes cadastrados

### Backend (NestJS)
- ✅ Estrutura com **Arquitetura Limpa**
- ✅ Serviço para gerenciar vídeos e imagens no **Cloudinary**
- ✅ API RESTful com rotas para:
  - `POST` - Cadastrar um novo filme
  - `GET` - Listar todos os filmes
  - `PUT` - Atualizar informações de um filme
  - `DELETE` - Remover um filme
- ✅ Persistência de dados com **Prisma ORM**

---

## ☁️ Armazenamento na Nuvem

Os arquivos de vídeo são enviados e armazenados em nuvem usando recursos do **Cloudinary**, com integração no front e no back.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget)
- Fetch API

### Backend
- [NestJS](https://nestjs.com/)
- [Cloudinary SDK](https://cloudinary.com/documentation/node_integration)
- [Prisma ORM](https://www.prisma.io/)
- Arquitetura Limpa

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js (versão LTS)
- Docker (opcional, para banco de dados)
- Conta no Cloudinary (obter `cloud_name`, `api_key`, `api_secret`)

---

### 🔧 Backend

```bash
# Clone o repositório
git clone https://github.com/seuusuario/backend-filmes.git
cd backend-nest
cd devtub

# Instale as dependências
npm install

# Crie uma conta no Cloudinary e obtenha as credenciais:
# - CLOUD_NAME
# - CLOUDINARY_API_KEY
# - CLOUDINARY_API_SECRET

# Crie um arquivo .env na raiz do projeto com as variáveis de ambiente,
# conforme referenciado em infra/cloud/cloudinary/cloudinary.config.ts

# Rode as migrations do Prisma
npx prisma migrate dev

# Inicie o servidor em modo de desenvolvimento
npm run start:dev
