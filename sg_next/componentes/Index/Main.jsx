import Modulo from "./Modulo";

export default function main() {
    return (
        <main>
            <h2>Explore os módulos abaixo para acessar as funcionalidades do sistema:</h2>
            <div>
                <Modulo
                    h3="Clientes"
                    p="Cadastro e consulta de clientes."
                    href="/clientes"
                />
                <Modulo
                    h3="Produtos"
                    p="Consulte e gerencie o estoque de produtos."
                    href="/produtos"
                />
                <Modulo
                    h3="Gestão de Vendas e Pedidos"
                    p="Gerencie e acompanhe as vendas e pedidos dos clientes."
                    href="/vendas"
                />
                <Modulo
                    h3="Pedidos Processados"
                    p="Visualize e gerencie os pedidos processados."
                    href=""
                />
                <Modulo
                    h3="Financeiro"
                    p="Gestão financeira completa do sistema."
                    href=""
                />
                <Modulo
                    h3="Relatórios"
                    p="Visualize relatórios detalhados do sistema."
                    href=""
                />
                <Modulo
                    h3="Dashboard"
                    p="Resumo e métricas importantes."
                    href=""
                />
                <Modulo
                    h3="CRM WhatsApp"
                    p="Integração com o WhatsApp para CRM."
                    href=""
                />
                <Modulo
                    h3="Logout"
                    p="Sair do sistema."
                    href=""
                />
            </div>
        </main>
    )
}