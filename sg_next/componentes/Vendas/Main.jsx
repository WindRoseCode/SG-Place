export default function Main() {
  return (
    <main>
      <div className="ml-64 bg-gray-100 p-6">
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestão de Vendas e Pedidos</h2>

          {/*Botões*/}
          <div className="mb-6 flex gap-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
              data-toggle="modal"
              data-target="#pedidoModal"
            >
              Novo Pedido
            </button>
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
            // onclick={emitirRelatorio()}
            // (Funções comentadas para não bugar o next, não foram criadas)
            > 
              Emitir Relatório de Vendas
            </button>
          </div>

          {/*Modal para Criar Novo Pedido*/}
          <div id="pedidoModal" className="hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h5 className="text-lg font-semibold">Novo Pedido de Venda</h5>
                <button
                  className="text-gray-500 hover:text-gray-700"
                // onclick={document.getElementById('pedidoModal').classList.add('hidden')}
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <form id="pedidoForm">
                  {/*Dados do Cliente*/}
                  <div className="mb-4">
                    <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">Cliente</label>
                    <select
                      id="cliente"
                      className="mt-1 block w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Selecione o cliente</option>
                      <option value="1">Bianca Oliveira</option>
                      <option value="2">João da Silva</option>
                    </select>
                  </div>

                  {/*Dados do Produto*/}
                  <div className="mb-4">
                    <label htmlFor="produto" className="block text-sm font-medium text-gray-700">Produto</label>
                    <select
                      id="produto"
                      className="mt-1 block w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Selecione o produto</option>
                      <option value="101">Produto X</option>
                      <option value="102">Produto Y</option>
                    </select>
                  </div>

                  {/*Quantidade*/}
                  <div className="mb-4">
                    <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">Quantidade</label>
                    <input
                      type="number"
                      id="quantidade"
                      className="mt-1 block w-full p-2 border rounded-md"
                      min="1"
                      required
                    />
                  </div>

                  {/*Método de Pagamento*/}
                  <div className="mb-4">
                    <label htmlFor="pagamento" className="block text-sm font-medium text-gray-700">Método de Pagamento</label>
                    <select
                      id="pagamento"
                      className="mt-1 block w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Selecione o método</option>
                      <option value="boleto">Boleto</option>
                      <option value="cartao">Cartão de Crédito</option>
                      <option value="pix">Pix</option>
                    </select>
                  </div>

                  {/*Observações*/}
                  <div className="mb-4">
                    <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">Observações</label>
                    <textarea
                      id="observacoes"
                      rows="3"
                      className="mt-1 block w-full p-2 border rounded-md"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="flex justify-end px-6 py-4 border-t">
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2"
                // onclick={document.getElementById('pedidoModal').classList.add('hidden')}
                >
                  Cancelar
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                // onclick={salvarPedido()}
                >
                  Salvar Pedido
                </button>
              </div>
            </div>
          </div>

          {/*Tabelas de Pedidos e Vendas*/}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">Consulta de Pedidos</h3>
          <table className="w-full mt-4 border border-gray-200 shadow rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">ID do Pedido</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Cliente</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Produto</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Quantidade</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-t">
                <td className="py-2 px-4 text-gray-800">101</td>
                <td className="py-2 px-4 text-gray-800">Bianca Oliveira</td>
                <td className="py-2 px-4 text-gray-800">Produto X</td>
                <td className="py-2 px-4 text-gray-800">3</td>
                <td id="status-101" className="py-2 px-4 text-gray-800">Pendente</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-gray-600 text-white text-sm px-3 py-1 rounded hover:bg-gray-700 mr-2"
                  //   onclick={imprimirPedido(101)}
                  >
                    Imprimir
                  </button>
                  <button
                    className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700 mr-2"
                  //   onclick={processarPedido(101)}
                  >
                    Processar
                  </button>
                  <button
                    className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700"
                  //   onclick={cancelarPedido(101)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </main>
  )
}