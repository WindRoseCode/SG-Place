export default function Juridica() {
    return (
        <div id="pessoaJuridicaFields" >
            <div>
                <label for="cnpj">CNPJ:</label>
                <input 
                    type="text" 
                    id="cnpj" 
                    placeholder="00.000.000/0000-00" 
                    required
                />
            </div>
            <div>
                <label for="razaoSocial">Razão Social:</label>
                <input 
                    type="text" 
                    id="razaoSocial" 
                    placeholder="Razão social da empresa" 
                    required
                />
            </div>
            <div>
                <label for="nomeFantasia">Nome Fantasia:</label>
                <input 
                    type="text" 
                    id="nomeFantasia" 
                    placeholder="Nome fantasia, se aplicável"
                />
            </div>
        </div>
    )
}