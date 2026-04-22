# 📦 Sistema Simples de Cache em Node.js

Este projeto é uma simulação simples de um sistema de **cache de produtos**, demonstrando como funciona o padrão de:

* Cache com tempo de expiração (TTL)
* Invalidação de cache após atualização de dados

Ele foi desenvolvido com foco didático, sem uso de banco de dados ou Redis — tudo é simulado em memória.

---

## 🚀 Objetivo

Demonstrar na prática o fluxo:

1. Buscar dados do "banco"
2. Armazenar no cache
3. Reutilizar cache em chamadas seguintes
4. Invalidar cache ao atualizar dados

---

## 🛠️ Tecnologias utilizadas

* Node.js
* JavaScript (ES6+)
* Estrutura de dados `Map` (simulando cache)

---

## 📄 Estrutura do Projeto

```
app.js
README.md
```

---

## ▶️ Como executar o projeto

### 1. Instale o Node.js

Verifique se já possui:

```bash
node -v
```

---

### 2. Clone ou crie o projeto

```bash
git clone <seu-repositorio>
cd <seu-projeto>
```

Ou apenas crie o arquivo manualmente:

```bash
touch app.js
```

---

### 3. Execute o projeto

```bash
node app.js
```

---

## 🔁 Fluxo da aplicação

### Função `listarProdutos()`

* Verifica se existe cache
* Se existir → retorna do cache
* Se não → busca do "banco"
* Armazena no cache por 60 segundos

---

### Função `atualizarProduto(id, novosDados)`

* Simula atualização no banco
* Remove:

  * Cache da lista de produtos
  * Cache do produto específico

---

## 🧪 Exemplo de execução

Saída esperada no terminal:

```
--- Primeira chamada ---
📦 Buscando do 'banco'

--- Segunda chamada (cache) ---
🔁 Retornando do cache

--- Atualizando produto ---
✏️ Atualizando produto 1 no 'banco'

--- Após limpar cache ---
📦 Buscando do 'banco'
```

---

## 🧠 Conceitos aplicados

* Cache em memória
* TTL (Time To Live)
* Cache Invalidation
* Simulação de banco de dados
* Controle de fluxo assíncrono

---

## 📈 Possíveis melhorias

* Substituir `Map` por Redis
* Integrar com banco de dados real (PostgreSQL, MySQL)
* Criar API REST com Express
* Implementar cache por produto individual
* Adicionar logs estruturados

---

## 💡 Observação

Este projeto é apenas educacional. Em aplicações reais, o uso de ferramentas como Redis e estratégias mais robustas de cache são recomendadas.

---

## 👩‍💻 Autora

Maria Eduarda
Engenharia de Computação | Desenvolvedora

---
