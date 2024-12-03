"use client";
import { useState } from "react";


const ClientesTabs = () => {
  const [activeTab, setActiveTab] = useState("cadastro");

  return (
    
    <div className="container mx-auto ml-64 p-6">
      <h2 className="text-center text-2xl font-bold mb-6">Cadastro de Clientes</h2>

      {/* Abas */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${
              activeTab === "cadastro"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("cadastro")}
          >
            Cadastro
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "consulta"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("consulta")}
          >
            Consulta
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "crediario"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("crediario")}
          >
            Crediário/Cobrança
          </button>
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="mt-4">
        {activeTab === "cadastro" && <Cadastro />}
        {activeTab === "consulta" && <Consulta />}
        {activeTab === "crediario" && <Crediario />}
      </div>
    </div>
  );
};

// Componente de Cadastro
const Cadastro = () => {
  const [tipoPessoa, setTipoPessoa] = useState("fisica");

  const togglePessoa = (tipo) => setTipoPessoa(tipo);

  return (
    <form className="space-y-4">
      {/* Tipo de Pessoa */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de Pessoa:
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="tipoPessoa"
              value="fisica"
              checked={tipoPessoa === "fisica"}
              onChange={() => togglePessoa("fisica")}
              className="form-radio"
            />
            <span>Pessoa Física</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="tipoPessoa"
              value="juridica"
              onChange={() => togglePessoa("juridica")}
              className="form-radio"
            />
            <span>Pessoa Jurídica</span>
          </label>
        </div>
      </div>

      {/* Campos para Pessoa Física */}
      {tipoPessoa === "fisica" && (
        <div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">CPF:</label>
            <input
              type="text"
              placeholder="000.000.000-00"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Nome Completo:
            </label>
            <input
              type="text"
              placeholder="Nome completo do cliente"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Data de Nascimento:
            </label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>
      )}

      {/* Campos para Pessoa Jurídica */}
      {tipoPessoa === "juridica" && (
        <div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">CNPJ:</label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="border border-gray-300 rounded-lg px-4 py-2"
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
            />
          </div>
        </div>
      )}

      {/* Botão para Salvar */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Salvar
      </button>
    </form>
  );
};

// Componente de Consulta
const Consulta = () => (
  <div>
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
);

// Componente de Crediário/Cobrança
const Crediario = () => (
  <div>
    <h3 className="text-lg font-bold mb-4">Crediário/Cobrança</h3>
    <p>Gerencie cobranças e crediários aqui.</p>
  </div>
);
export default ClientesTabs;
