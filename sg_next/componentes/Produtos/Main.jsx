"use client";
import { useState } from "react";

export default function Index() {
  const [activeTab, ativaTab] = useState("consulta");

  return (
    <>
      <div className="ml-64 p-6">

        <div className="p-6 bg-white-100 min-h-screen">
          <h2 className="text-2xl font-semibold mb-6">Gestão de Produtos</h2>
          {/* Tabs */}
          <div>
            <ul className="flex border-b mb-4">
              <li
                className={`px-4 py-2 cursor-pointer ${activeTab === "consulta"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                  }`}
                onClick={() => ativaTab("consulta")}
              >
                Consulta de Produtos
              </li>
              <li
                className={`px-4 py-2 cursor-pointer ${activeTab === "cadastro"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                  }`}
                onClick={() => ativaTab("cadastro")}
              >
                Cadastro de Produto
              </li>
            </ul>
          </div>

          {/* Tab Conteudo */}
          <div>
            {activeTab === "consulta" && (
              <div>
                {/* Consulta Produtos */}
                <input
                  type="text"
                  placeholder="Buscar por nome ou SKU..."
                  className="w-full p-2 border rounded mb-4"
                />
                <table className="w-full bg-white border border-gray-200 rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4">SKU</th>
                      <th className="py-2 px-4">Descrição</th>
                      <th className="py-2 px-4">Preço Venda</th>
                      <th className="py-2 px-4">Estoque</th>
                      <th className="py-2 px-4">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Dados dinâmicos*/}
                    <tr>
                      <td className="py-2 px-4">12345</td>
                      <td className="py-2 px-4">Produto Exemplo</td>
                      <td className="py-2 px-4">R$ 50,00</td>
                      <td className="py-2 px-4">20</td>
                      <td className="py-2 px-4">
                        <button className="px-3 py-1 text-white bg-blue-600 rounded">
                          Editar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "cadastro" && (
              <div>
                {/* Cadastro de Produto */}
                <form className="bg-white p-6 rounded shadow">
                  {/* Informações Básicas */}
                  <div className="mb-4">
                    <label htmlFor="descricaoProduto" className="block font-medium mb-1">
                      Descrição do Produto *
                    </label>
                    <input
                      type="text"
                      id="descricaoProduto"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="skuProduto" className="block font-medium mb-1">
                      SKU (Código)
                    </label>
                    <input
                      type="text"
                      id="skuProduto"
                      value="AUTOMATICO"
                      readOnly
                      className="w-full p-2 border rounded bg-gray-100"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="codigoBarras" className="block font-medium mb-1">
                      Código de Barras
                    </label>
                    <input
                      type="text"
                      id="codigoBarras"
                      placeholder="Insira o código de barras"
                      className="w-full p-2 border rounded"
                    />
                  </div>

                  {/* Preços e Estoque */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="precoCusto" className="block font-medium mb-1">
                        Preço de Custo *
                      </label>
                      <input
                        type="number"
                        id="precoCusto"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="precoVenda" className="block font-medium mb-1">
                        Preço de Venda *
                      </label>
                      <input
                        type="number"
                        id="precoVenda"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="estoqueProduto" className="block font-medium mb-1">
                        Estoque *
                      </label>
                      <input
                        type="number"
                        id="estoqueProduto"
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="categoriaProduto" className="block font-medium mb-1">
                        Categoria
                      </label>
                      <select
                        id="categoriaProduto"
                        className="w-full p-2 border rounded bg-white"
                      >
                        <option value="Roupas">Roupas</option>
                        <option value="Calçados">Calçados</option>
                        <option value="Acessórios">Acessórios</option>
                      </select>
                    </div>
                  </div>

                  {/* Informações de Impostos */}
                  <h5 className="text-lg font-semibold mt-6 mb-4">
                    Informações de Impostos
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="icms" className="block font-medium mb-1">
                        ICMS (%)
                      </label>
                      <input
                        type="number"
                        id="icms"
                        className="w-full p-2 border rounded"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <label htmlFor="ipi" className="block font-medium mb-1">
                        IPI (%)
                      </label>
                      <input
                        type="number"
                        id="ipi"
                        className="w-full p-2 border rounded"
                        step="0.01"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Cadastrar Produto
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
