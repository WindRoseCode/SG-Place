"use client";

import Link from "next/link";
import LogoutButton from "../Login/LogoutButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white-100">
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-center text-3xl font-bold mb-5">Bem-vindo ao Sistema de Gestão WEB ERP</h1>
        <p className="text-center text-lg mb-8">Explore os módulos abaixo para acessar as funcionalidades do sistema:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4"> Gestão Vendas e Pedidos</h5>
              <p className="text-gray-600 mb-4">Gerencie e acompanhe as vendas e pedidos dos clientes.</p>
              <Link className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" href="/pedidos">
                Acessar
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4"> Gestão Produtos</h5>
              <p className="text-gray-600 mb-4">Consulte e gerencie o estoque de produtos.</p>
              <Link className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" href="/produtos">
                Acessar
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4"> Gestão Clientes</h5>
              <p className="text-gray-600 mb-4">Cadastro e consulta de clientes.</p>
              <Link className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" href="/clientes">
                Acessar
              </Link>
            </div>
          </div>
        </div>

        {/* Botão de sair centralizado */}
        <div className="relative">
          <div className="fixed bottom-4 right-8 p-4">
              <LogoutButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
