export default function Modal() {
    return (
        <>
            <h5 class="modal-title" id="pedidoModalLabel">Novo Pedido de Venda</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>

            <form id="pedidoForm">
                <div>
                    <label for="cliente">Cliente</label>
                    <select id="cliente" required>
                        <option value="">Selecione o cliente</option>
                        <option value="1">Maria Oliveira</option>
                        <option value="2">João da Silva</option>
                    </select>
                </div>
                
                <div>
                    <label for="produto">Produto</label>
                    <select id="produto" required>
                        <option value="">Selecione o produto</option>
                        <option value="101">Produto X</option>
                        <option value="102">Produto Y</option>
                    </select>
                </div>
                
                <div>
                    <label for="quantidade">Quantidade</label>
                    <input 
                        type="number" 
                        id="quantidade" 
                        min="1" 
                        required
                    />
                </div>

                <div>
                    <label for="pagamento">Método de Pagamento</label>
                    <select id="pagamento" required>
                        <option value="">Selecione o método</option>
                        <option value="boleto">Boleto</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="pix">Pix</option>
                    </select>
                </div>
                
                <div>
                    <label for="observacoes">Observações</label>
                    <textarea id="observacoes" rows="3"></textarea>
                </div>
            </form>

            <div class="modal-footer">
                <button type="button" data-dismiss="modal">Cancelar</button>
                <button type="button" onclick="salvarPedido()">Salvar Pedido</button>
            </div>
        </>
    )
}