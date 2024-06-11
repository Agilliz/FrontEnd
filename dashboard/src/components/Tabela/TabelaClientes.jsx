import React, { useState, useEffect } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import api from "../../api";
import { toast } from 'react-toastify';
import Modal from '../Modal';

const Tabela = () => {
    const [openModal, setModal] = useState(false);
    const [cliente, setCliente] = useState({});
    const [listaClientes, setListaClientes] = useState([]);

    console.log('cliente' + cliente );
    console.log('listaCliente' + listaClientes);


     useEffect(() => {
        api.get('unidade/', {
            auth: {
                username: 'agilizDev',
                password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
            }
        })
        .then((res) => {
            setListaClientes(res.data.data.content);
            console.log( listaClientes);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    function deletarCliente(idUnidade){

        

        api.delete(`unidade/deletar/${idUnidade}`, {
            auth: {
                username: 'agilizDev',
                password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
            }
        })
        .then(() => {
            toast.success('Cliente deletado com sucesso');
        })
        .catch(() => {
            toast.error('Erro ao deletar o cliente');
        });

        window.location.reload();
    }

    function alterarCliente(unidade){
        setCliente(unidade)
        setModal(!openModal);
    }

    return (

        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            CEP
                        </th>
                        <th scope="col" className="px-6 py-3">
                            RUA
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NÚMERO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TELEFONE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listaClientes.map(cliente => (
                        <tr key={cliente.idUnidade} className="odd:bg-white odd:-900 even:bg-gray-50 even:-800 border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {cliente.cep}
                            </th>
                            <td className="px-6 py-4">
                                {cliente.rua}
                            </td>
                            <td className="px-6 py-4">
                                {cliente.numero}
                            </td>
                            <td className="px-6 py-4">
                                {cliente.telefoneUnidade}
                            </td>

                            <td className="px-6 py-4 flex justify-around">
                            <div href="#" className="font-medium text-blue-600  hover:underline flex justify-center items-center rounded-lg ">Visualizar</div>
                                <div href="#" className="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg " onClick={() => alterarCliente(cliente)}><h2 className='p-2'>Alterar</h2></div>
                                <div href="#" className="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg cursor-pointer" onClick={() => deletarCliente(cliente.idUnidade)}><span className='p-2'><FaTrashCan /></span></div>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal setModal={setModal} conteudo={cliente} cliente={cliente} isOpen={openModal} setModalOpen={() => setModal(!openModal)}/>

        </div>
    );
}

export default Tabela;
