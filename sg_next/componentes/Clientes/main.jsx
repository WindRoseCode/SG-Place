import Fisica from "./Pessoa/Fisica";
import Juridica from "./Pessoa/Juridica";

export default function Main(){
    return(
        <main>
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
            </form>
        </main>
    )
}