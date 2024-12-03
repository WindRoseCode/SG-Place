import Link from "next/link"

export default function SideBar() {
    return (
        <aside>

            <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 flex flex-col items-center pt-6">
                <Link 
                    className="text-lg font-semibold text-white mb-6" 
                    href={"/"}>
                    Gestão de Sistema
                </Link>

                {/* Menu Items  */}
                <nav className="flex-1 w-full">
                    <Link 
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105" 
                        href={"/clientes"}>
                        Gestão de Clientes
                    </Link>
                    
                    <Link
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105" 
                        href={"/produtos"}>
                        Consulta Produtos
                    </Link>

                    <Link 
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-blue-600 hover:scale-105"
                        href={"/vendas"}>
                        Gestão de Vendas
                    </Link>

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