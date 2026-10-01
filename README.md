# 📌 Projeto React + API REST - Gestão de Secretarias

Este projeto é um **frontend em React** integrado com uma **API REST em Spring Boot**.  
O objetivo é gerenciar entidades de **Secretaria**, permitindo operações de CRUD (criar, listar, atualizar e excluir) com validações consistentes entre frontend e backend.

---

## 🚀 Tecnologias Utilizadas

### Frontend (React)
- **React 18+**
- **React Router DOM** – navegação entre páginas
- **Axios** – consumo da API REST
- **React Query** – gerenciamento de estado assíncrono
- **Material UI (MUI)** – componentes visuais
- **Snackbar Context** – feedback global de mensagens
- **FeedbackDialog / ConfirmDialog** – modais de confirmação e feedback

### Backend (Spring Boot)
- **Spring Boot 3+**
- **Spring Data JPA** – persistência
- **Hibernate Validator (Jakarta Validation)** – validações de entidades
- **PostgreSQL / H2** – banco de dados
- **JUnit + Mockito** – testes automatizados

---

## 📂 Estrutura do Projeto

- **/src**
  - **/api**
    - `secretariaApi.js` → Integração com API REST
  - **/components**
    - `SecretariaForm.jsx` → Formulário de criação
    - `SecretariaEditForm.jsx` → Formulário de edição
    - `SecretariaList.jsx` → Lista de secretarias
    - `FeedbackDialog.jsx` → Modal de feedback
    - `ConfirmDialog.jsx` → Modal de confirmação
  - **/context**
    - `SnackbarContext.jsx` → Contexto global para mensagens

---

## ⚙️ Instalação das Dependências

Execute os comandos abaixo para instalar todas as bibliotecas necessárias no projeto React:

```bash
# Inicializar projeto React (caso ainda não tenha criado)
npx create-react-app projeto-secretarias
cd projeto-secretarias

# Instalar React Router DOM para navegação
npm install react-router-dom

# Instalar Axios para consumo da API REST
npm install axios

# Instalar React Query para gerenciamento de estado assíncrono
npm install @tanstack/react-query

# Instalar Material UI (MUI) para componentes visuais
npm install @mui/material @emotion/react @emotion/styled

# Instalar ícones do Material UI
npm install @mui/icons-material

# Instalar React Testing Library para testes
npm install @testing-library/react @testing-library/jest-dom

# Instalar dependências opcionais de desenvolvimento
npm install --save-dev eslint prettier

```
---

## 🔗 Integração com a API REST

A API está disponível em: http://localhost:8080/api/secretarias    


### Endpoints principais:
- `GET /api/secretarias?page=0&size=10&sort=nome` → listar secretarias
- `GET /api/secretarias/{id}` → buscar secretaria por ID
- `GET /api/secretarias/email/{email}` → buscar secretaria por e-mail
- `POST /api/secretarias` → criar secretaria
- `PUT /api/secretarias/{id}` → atualizar secretaria
- `DELETE /api/secretarias/{id}` → excluir secretaria

---

## ⚙️ Configuração e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-repositorio/projeto-secretarias.git
cd projeto-secretarias

