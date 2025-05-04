import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {toast } from "react-toastify";
import axios from "axios";


export const GridClientes = ({cliente, setCliente, setOnEdit}) => {

    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800"+ id)
        .then(({data}) => {
            const newArray = cliente.filter((cliente)=> cliente.id !== id);

            setCliente(newArray);
            toast.success(data);
        })
        .catch(({data}) => toast.error(data));

        setOnEdit(null);
    }
    const handleEdit = (item) =>{
        setOnEdit(item);
    }




    return(
        <table className="w-full bg-white border border-gray-200 rounded mt-10">
            <thead>
                <tr className="bg-gray-100">
                    <th>Nome</th>
                    <th>CPF/CNPJ</th>
                    <th>Email</th>
                    <th>Número</th>
                    <th>RzSocial</th>
                </tr>
            </thead>
            <tbody>
    {Array.isArray(cliente) && cliente.length > 0 ? (
        cliente.map((item, i) => (
            <tr key={i}>
                <td className="py-2 px-4">{item.nome}</td>
                <td className="py-2 px-4">{item.cpfcnpj}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.numero}</td>
                <td className="py-2 px-4">{item.rzsocial}</td>
                <td className="items-center">
                    <FaEdit onClick={() => handleEdit(item)}/>
                </td>
                <td className="items-center">
                    <FaTrash onClick={() => handleDelete(item.id)}/>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="7" className="text-center py-4">
                Nenhum cliente encontrado.
            </td>
        </tr>
    )}
</tbody>
        </table>
    )
}