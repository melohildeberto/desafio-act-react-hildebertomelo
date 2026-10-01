# AI_USAGE.md

## 📌 Ferramentas e Modelos de IA Utilizados
Durante o desenvolvimento deste **APP React** foram utilizadas ferramentas de Inteligência Artificial para acelerar e estruturar o trabalho:

- **Microsoft Copilot** – assistente de IA utilizado em todo o processo de desenvolvimento do frontend.
- **ChatGPT / Claude Code / Cursor** – referências de agentes de IA que poderiam ser usados em cenários semelhantes, mas neste projeto o foco foi no Copilot.
- **React Query + Axios** – não são IA, mas foram usados em conjunto com sugestões da IA para estruturar chamadas assíncronas e tratamento de erros.

---

## 🛠️ Estruturação do Trabalho com IA
O trabalho foi conduzido em etapas incrementais:

1. **Spec-Driven Development**  
   - Definição inicial dos componentes (`SecretariaForm`, `SecretariaList`, `SecretariaEditForm`) e integração com a API REST.  
   - A IA foi usada para gerar implementações a partir dessa especificação.

2. **Iterações com prompts**  
   - Cada etapa foi guiada por prompts específicos, como:  
     - *"Criar formulário de cadastro de secretaria com validação"*  
     - *"Ajustar chamadas da API para não disparar URL com barra extra"*  
     - *"Adicionar snackbar global para feedback visual"*  
     - *"Tratar erros de validação e exibir mensagens amigáveis"*  
     - *"Criar componente de edição com validação de ID"*  

3. **Correções e ajustes manuais**  
   - As sugestões da IA foram revisadas e adaptadas para garantir consistência com o backend.  
   - Foram eliminados problemas como **barra extra na URL** (`/api/secretarias/?page=...`) e **tratamento inconsistente de erros**.

---

## ⚖️ Decisão de Correção/Discordância
Houve momentos em que foi necessário **corrigir ou rejeitar sugestões da IA**:

- **Exemplo 1**:  
  A IA sugeriu usar `api.get("?page=...")`, o que gerava uma URL incorreta com barra extra.  
  **Decisão**: corrigir para `api.get("page=...")`, garantindo que a URL fosse `http://localhost:8080/api/secretarias?page=...`.

- **Exemplo 2**:  
  A IA sugeriu validação manual de e-mail no frontend.  
  **Decisão**: remover validação redundante e confiar no retorno padronizado do backend, exibindo mensagens amigáveis via snackbar/modal.

---

## 📖 Prompt Representativo
Um trecho de prompt que representa bem o processo de trabalho com IA foi:

> *"Ajuste o `SecretariaForm.jsx` para tratar erros de validação vindos do backend e exibir mensagens amigáveis em snackbar e modal."*

Esse prompt mostra como a especificação foi usada para guiar a IA na geração de código React com feedback visual consistente.

---

## 🎯 Conclusão
O uso de IA neste projeto foi **estratégico e incremental**:
- Auxiliou na geração inicial de componentes React e integração com a API.
- Foi ajustado manualmente para garantir consistência nas URLs e tratamento de erros.
- Seguiu uma abordagem **spec-driven**, onde primeiro se definia o plano e depois se pedia a implementação.
- A documentação e os componentes refletem esse processo colaborativo entre desenvolvedor e IA.
