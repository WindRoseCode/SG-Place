"use client";
import { useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import {GridClientes} from "@/componentes/Cliente/gridConsulta"
import axios from "axios";
import { useEffect } from "react";

 export const ClientesTabs = () => {
  const [cliente, setClient] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [activeTab, setActiveTab] = useState("cadastro");

  const getClient = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setClient(res.data.sort((a,b)=>(a.nome > b.nome ? 1 : -1)));
    }
    catch (error){
      toast.error(error);
    }
  };

  useEffect(() =>{
    getClient();
  }, [setClient]);

  return (

  <>
    <div className="container bg-white-100 mx-auto ml-64 p-6">
      <h2 className="text-center text-2xl font-bold mb-6">Cadastro de Clientes</h2>

      {/* Abas */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${activeTab === "cadastro"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"}`}
            onClick={() => setActiveTab("cadastro")}
          >
            Cadastro
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "consulta"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"}`}
            onClick={() => setActiveTab("consulta")}
          >
            Consulta
          </button>


        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="mt-4">
        {activeTab === "cadastro" && <Cadastro getClient={getClient} setOnEdit={setOnEdit} />}
        {activeTab === "consulta" && <Consulta cliente={cliente} setClient={setClient} setOnEdit={setOnEdit} onEdit={onEdit} getClient={getClient} />}
        {/* {activeTab === "crediario" && <Crediario />} */}
      </div>
    </div>
    <ToastContainer autoClose={3000} position="bottom_left"/>
  </>
  );
};

// Componente de Cadastro
const Cadastro = () => {
  const [tipoPessoa, setTipoPessoa] = useState("fisica");
  const [formData, setFormData] = useState({
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
  });

  const mudaPessoa = (tipo) => setTipoPessoa(tipo);

  const mudaIdentificador = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const mudaSubmit  = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="space-y-4" onSubmit={mudaSubmit} >
      {/* Tipo de Pessoa */}
      <div>
        <label className="text-lg font-bold mb-4">
          Tipo de Pessoa:
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input 
              type="radio"
              name="tipoPessoa"
              value="fisica"
              checked={tipoPessoa === "fisica"}
              onChange={() => mudaPessoa("fisica")}
              className="form-radio"
            />
            <span>Pessoa Física</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="tipoPessoa"
              value="juridica"
              onChange={() => mudaPessoa("juridica")}
              className="form-radio"
            />
            <span>Pessoa Jurídica</span>
          </label>
        </div>
      </div>

      {/* Campos para Pessoa Física */}
      {tipoPessoa === "fisica" && (
        <div className="w-full max-w-md">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">CPF:</label>
          <input
            type="text"
            placeholder="000.000.000-00"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
            minLength={11}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Nome Completo:
          </label>
          <input
            type="text"
            placeholder="Nome completo do cliente"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Data de Nascimento:
          </label>
          <input
            type="date"
            className="text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
      </div>
      )}

      {/* Campos para Pessoa Jurídica */}
      {tipoPessoa === "juridica" && (
        <div className="w-full max-w-md">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">CNPJ:</label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="border border-gray-300 rounded-lg px-4 py-2"
              required
              minLength={14}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Razão Social:
            </label>
            <input
              type="text"
              placeholder="Razão social da empresa"
              className="border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
        </div>
      )}

      {/* Campos de Endereço */}
      <div>
        <h3 className="text-lg font-bold mb-4">Endereço</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">CEP:</label>
            <input
              type="text"
              placeholder="00000-00"
              className="border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700">Logradouro:</label>
            <input
              type="text"
              id="logradouro"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Rua, Av, etc."
              value={formData.logradouro}
              onChange={mudaIdentificador}
              required
            />
          </div>
          <div>
            <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número:</label>
            <input
              type="text"
              id="numero"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.numero}
              onChange={mudaIdentificador}
              required
            />
          </div>
          <div>
            <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">Bairro:</label>
            <input
              type="text"
              id="bairro"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.bairro}
              onChange={mudaIdentificador}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">Complemento:</label>
            <input
              type="text"
              id="complemento"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Apto, Bloco, Casa, etc."
              value={formData.complemento}
              onChange={mudaIdentificador}
            />
          </div>
          <div>
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade:</label>
            <input
              type="text"
              id="cidade"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.cidade}
              onChange={mudaIdentificador}
              required
            />
          </div>
          <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado:</label>
            <input
              type="text"
              id="estado"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.estado}
              onChange={mudaIdentificador}
              required
            />
          </div>
        </div>
      </div>

      {/* Botão para Salvar */}
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Salvar
      </button>
    </form>
  );
};

// Componente de Consulta
const Consulta = ({ cliente,setClient,setOnEdit }) => (


  <> 
    <div className="w-full max-w-md">
      <h3 className="text-lg font-bold mb-4">Consulta de Clientes</h3>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">CPF/CNPJ:</label>
        <input
          type="text"
          placeholder="Insira o CPF ou CNPJ"
          className="border border-gray-300 rounded-lg px-4 py-2"
      />
    </div>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      Pesquisar
    </button>
  </div>
  <GridClientes cliente={cliente} setClient={setClient} setOnEdit={setOnEdit}/>
  </>


);
export default ClientesTabs;