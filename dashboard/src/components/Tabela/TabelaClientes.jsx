import React, { useState, useEffect } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import api from "../../api";

const Tabela = () => {
    const [listaClientes, setListaClientes] = useState([]);

     useEffect(() => {
        api.get('funcionario/', {
            auth: {
                username: 'agilizDev',
                password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
            }
        })
        .then((res) => {
            setListaClientes(res.data.data.content);
            console.log(listaClientes);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Razão social
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo cliente
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Unidade
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listaClientes.map(cliente => (
                        <tr key={cliente.id} className="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {cliente.idCliente}
                            </th>
                            <td className="px-6 py-4">
                                {cliente.nomeCliente}
                            </td>
                            <td className="px-6 py-4">
                                {cliente.emailCliente}
                            </td>
                            <td className="px-6 py-4">
                                {cliente.unidade}
                            </td>
                            <td className="px-6 py-4 flex justify-around">
                            <div href="#" className="font-medium text-blue-600  hover:underline flex justify-center items-center rounded-lg ">Visualizar</div>
                                <div href="#" className="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg "><h2 className='p-2'>Alterar</h2></div>
                                <div href="#" className="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg "><span className='p-2'><FaTrashCan /></span></div>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;
