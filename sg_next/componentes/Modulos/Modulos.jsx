// pages/index.js
import Link from "next/link";

const Home = () => {
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
              <Link legacyBehavior href="/pedidos">
                <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>
          
          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4"> Gestão Produtos</h5>
              <p className="text-gray-600 mb-4">Consulte e gerencie o estoque de produtos.</p>
              <Link legacyBehavior href="/produtos">
                <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4"> Gestão Clientes</h5>
              <p className="text-gray-600 mb-4">Cadastro e consulta de clientes.</p>
              <Link legacyBehavior href="/clientes">
                <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4">Pedidos Processados</h5>
              <p className="text-gray-600 mb-4">Visualize e gerencie os pedidos processados.</p>
              <Link legacyBehavior href="/">
                <a  className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4">Financeiro</h5>
              <p className="text-gray-600 mb-4">Gestão financeira completa do sistema.</p>
              <Link legacyBehavior href="/">
                <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4">Relatórios</h5>
              <p className="text-gray-600 mb-4">Visualize relatórios detalhados do sistema.</p>
              <Link legacyBehavior href="/">
                <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4">Dashboard</h5>
              <p className="text-gray-600 mb-4">Resumo e métricas importantes.</p>
              <Link legacyBehavior href="/">
                <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4">CRM WhatsApp</h5>
              <p className="text-gray-600 mb-4">Integração com o WhatsApp para CRM.</p>
              <Link legacyBehavior href="">
                <a target="_blank" className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Acessar</a>
              </Link>
            </div>
          </div>

          <div className="card-summary text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h5 className="text-xl font-semibold mb-4">Logout</h5>
              <p className="text-gray-600 mb-4">Sair do sistema.</p>
              <Link legacyBehavior href="/">
                <a className="btn bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Sair</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
