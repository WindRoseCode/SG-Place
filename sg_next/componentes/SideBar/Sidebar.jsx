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
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-blue-600 hover:scale-105"
                        href={"/pedidos"}>
                        Gestão de Vendas
                    </Link>
                    
                    <Link
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105" 
                        href={"/produtos"}>
                        Gestão Produtos
                    </Link>
                    
                    <Link 
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105" 
                        href={"/clientes"}>
                        Gestão de Clientes
                    </Link>


                                                    {/* Módulos não funcionais */}
                    {/* <Link
                        href="financeiro.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Gestão Financeira
                    </Link>
                    <Link
                        href="relatorios.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Relatórios
                    </Link> */}
                    {/* <Link
                        href="dashboard.html"
                        className="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="pedidos.html"
                        classNames="block px-6 py-3 text-lg text-white bg-gray-700 rounded-lg my-2 w-11/12 mx-auto text-center shadow-md transition transform hover:bg-gray-600 hover:scale-105"
                    >
                        Pedidos Processados
                    </Link> */}
                </nav>
            </div>

        </aside>
    )
}