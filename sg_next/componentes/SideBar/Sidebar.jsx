export default function SideBar() {
    return (
        <aside>

            <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 flex flex-col items-center pt-6">

                <a
                    href="index.html"
                    className="text-lg font-semibold text-white mb-6"
                >
                    Gestão de Sistema
                </a>

                {/* Menu Items  */}
                <nav className="flex-1 w-full">
                    <a
                        href="clientes.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Gestão de Clientes
                    </a>
                    <a
                        href="produtos.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Consulta Produtos
                    </a>
                    <a
                        href="gestao-vendas.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-blue-600 hover:scale-105"
                    >
                        Gestão de Vendas
                    </a>
                    {/* <a
                        href="financeiro.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Gestão Financeira
                    </a>
                    <a
                        href="relatorios.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Relatórios
                    </a> */}
                    {/* <a
                        href="dashboard.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Dashboard
                    </a>
                    <a
                        href="pedidos.html"
                        classNames="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Pedidos Processados
                    </a> */}
                </nav>
            </div>

        </aside>
    )
}