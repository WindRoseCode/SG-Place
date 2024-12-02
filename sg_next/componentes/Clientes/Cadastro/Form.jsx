import Fisica from "./Pessoa/Fisica";
import Juridica from "./Pessoa/Juridica";

export default function Form() {
    return (
        <form>
                <p>Tipo de Pessoa:</p>
                <div>
                    <input 
                        type="radio" 
                        name="tipoPessoa" 
                        id="pessoaFisica" 
                        value="fisica" 
                        onclick="togglePessoa('fisica')" 
                        checked
                    />
                    <label for="pessoaFisica">
                        Pessoa Física
                    </label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        name="tipoPessoa" 
                        id="pessoaJuridica" 
                        value="juridica" 
                        onclick="togglePessoa('juridica')"
                    />
                    <label for="pessoaJuridica">
                        Pessoa Jurídica
                    </label>
                </div>
                <Juridica/>

                <div>
                    <label for="cep">CEP:</label>
                    <input 
                        type="text" 
                        id="cep" 
                        class="form-control" 
                        placeholder="00000-000" 
                        required
                    />
                </div>
                <div>
                    <div>
                        <label for="logradouro">Logradouro:</label>
                        <input 
                            type="text" 
                            id="logradouro" 
                            class="form-control" 
                            placeholder="Rua, Av, etc." 
                            required
                        />
                    </div>
                    <div>
                        <label for="numero">Número:</label>
                        <input 
                            type="text" 
                            id="numero" 
                            required
                        />
                    </div>
                    <div>
                        <label for="bairro">Bairro:</label>
                        <input 
                            type="text" 
                            id="bairro" 
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label for="cidade">Cidade:</label>
                        <input 
                            type="text" 
                            id="cidade" 
                            required
                        />
                    </div>
                    <div>
                        <label for="estado">Estado:</label>
                        <select id="estado" required>
                            <option value="">Escolha...</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="BA">Bahia</option>
                            <option value="PE">Pernambuco</option>
                        </select>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
    )
}