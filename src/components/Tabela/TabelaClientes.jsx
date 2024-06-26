import React, { useState, useEffect } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import api from "../../api";
import { toast } from 'react-toastify';
import Modal from '../Modal';
import styles from "./TabelaCliente.module.css";

const Tabela = () => {
    const [openModal, setModal] = useState(false);
    const [cliente, setCliente] = useState({});
    const [listaClientes, setListaClientes] = useState([]);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [clienteToDelete, setClienteToDelete] = useState(null);

    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('tk')}`
        }
    };

    const carregarClientes = () => {
        api.get('http://localhost:8080/unidade/', config)
            .then((res) => {
                setListaClientes(res.data.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    };

     useEffect(() => {
        carregarClientes();
     }, []);



    function alterarCliente(cliente) {
        setCliente(cliente);
        setModal(true);
    }

    function handleDeleteClick(cliente) {
        setClienteToDelete(cliente);
        setConfirmModalOpen(true);
    }

    function confirmDelete() {
        api.delete(`http://localhost:8080/unidade/deletar/${clienteToDelete.idCliente}`, config)
            .then((res) => {
                toast.success("Cliente excluído");
                carregarClientes(); // Recarregar a lista após exclusão
            })
            .catch((error) => {
                toast.error("Erro ao excluir o cliente");
                console.log("erro", error);
            })
            .finally(() => {
                setConfirmModalOpen(false);
                setClienteToDelete(null);
            });
    }

    return (
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className={styles["sticky-header"]}>
                        <th scope="col" className="px-6 py-3">
                            CEP
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rua
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Número
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ações
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
                                <div href="#" className="font-medium text-white bg-orange-500 hover:underline flex justify-center items-center rounded-lg " onClick={() => alterarCliente(cliente)}><h2 className='p-2'>Alterar</h2></div>
                                <div href="#" className="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg cursor-pointer" onClick={() => handleDeleteClick(cliente)}><span className='p-2'><FaTrashCan /></span></div>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal setModal={setModal} conteudo={cliente} cliente={cliente} isOpen={openModal} setModalOpen={() => setModal(!openModal)}/>
            {confirmModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Confirmação</h2>
                        <p className="mb-4">Tem certeza que deseja excluir o colaborador?</p>
                        <div className="flex justify-end">
                            <button onClick={() => setConfirmModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Não</button>
                            <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">Sim</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Tabela;