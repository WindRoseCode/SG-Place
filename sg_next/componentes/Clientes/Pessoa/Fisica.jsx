export default function Fisica() {
    return (
        <div id="pessoaFisicaFields">
            <div class="form-group">
                <label for="cpf">CPF:</label>
                <input 
                    type="text" 
                    id="cpf" 
                    class="form-control" 
                    placeholder="000.000.000-00" 
                    required
                />
            </div>
            <div class="form-group">
                <label for="nomeCompleto">Nome Completo:</label>
                <input 
                    type="text" 
                    id="nomeCompleto" 
                    class="form-control" 
                    placeholder="Nome completo do cliente" 
                    required
                />
            </div>
            <div class="form-group">
                <label for="dataNascimento">Data de Nascimento:</label>
                <input 
                    type="date" 
                    id="dataNascimento" 
                    class="form-control" 
                    required
                />
            </div>
        </div>
    )
}