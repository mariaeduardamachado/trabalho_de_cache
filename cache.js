const cache = new Map();

async function listarProdutos() {
  const cacheKey = "lista_produtos";

  if (cache.has(cacheKey)) {
    console.log("🔁 Retornando do cache");
    return cache.get(cacheKey);
  }

  console.log("📦 Buscando do 'banco'");
  const produtos = [
    { id: 1, nome: "Produto A" },
    { id: 2, nome: "Produto B" }
  ];

  cache.set(cacheKey, produtos);

  // Expira o cache em 60 segundos
  setTimeout(() => {
    cache.delete(cacheKey);
    console.log("⏳ Cache expirado");
  }, 60000);

  return produtos;
}

async function atualizarProduto(id, novosDados) {
  console.log(`✏️ Atualizando produto ${id} no 'banco'`);

  // Simulação: não temos banco real, então só limpamos cache
  cache.delete("lista_produtos");
  cache.delete(`produto_${id}`);
}

(async () => {
  console.log("\n--- Primeira chamada ---");
  console.log(await listarProdutos());

  console.log("\n--- Segunda chamada (cache) ---");
  console.log(await listarProdutos());

  console.log("\n--- Atualizando produto ---");
  await atualizarProduto(1, { nome: "Novo nome" });

  console.log("\n--- Após limpar cache ---");
  console.log(await listarProdutos());
})();