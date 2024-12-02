export default function Consulta() {
    return (
        <>
            <h3>Consulta de Clientes</h3>
            <div>
                <label for="cpfConsulta">CPF/CNPJ:</label>
                <input 
                    type="text" 
                    id="cpfConsulta" 
                    placeholder="Insira o CPF ou CNPJ"
                />
            </div>
            <button>Pesquisar</button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>CPF/CNPJ</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="resultadoConsulta"></tbody>
                </table>
            </div>
        </>
    )
}