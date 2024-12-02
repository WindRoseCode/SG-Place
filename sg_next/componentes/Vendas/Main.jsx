export default function Main() {
    return (
        <main>
            <h2>Gestão de Vendas e Pedidos</h2>
            <div>
                <button data-toggle="modal" data-target="#pedidoModal">Novo Pedido</button>
                <button onclick="emitirRelatorio()">Emitir Relatório de Vendas</button>
            </div>

            <h3>Consulta de Pedidos</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID do Pedido</th>
                        <th>Cliente</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>Maria Oliveira</td>
                        <td>Produto X</td>
                        <td>3</td>
                        <td id="status-101">Pendente</td>
                        <td>
                            <button onclick="imprimirPedido(101)">Imprimir</button>
                            <button onclick="processarPedido(101)">Processar</button>
                            <button onclick="cancelarPedido(101)">Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}