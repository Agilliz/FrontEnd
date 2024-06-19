import React, { useState, useEffect } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import api from "../../api";
import Modal from "../Modal";
import styles from "./TabelaColaborador.module.css";

const TabelaColaborador = () => {
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [openModal, setModal] = useState(false);
    const [colaborador, setColaborador] = useState();
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [colaboradorToDelete, setColaboradorToDelete] = useState(null);

    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('tk')}`
        }
    };

    useEffect(() => {
        api.get('http://localhost:8080/funcionario/', config)
            .then((res) => {
                setListaFuncionarios(res.data.data.content);
                console.log(listaFuncionarios);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function alterarColaborador(colaborador) {
        setColaborador(colaborador);
        setModal(!openModal);
    }

    function handleDeleteClick(colaborador) {
        setColaboradorToDelete(colaborador);
        setConfirmModalOpen(true);
    }

    function confirmDelete() {
        if (!colaboradorToDelete) {
            console.error("No colaborador to delete");
            return;
        }
    
        const { id } = colaboradorToDelete;
    
        api.delete(`http://localhost:8080/funcionario/deletar/${id}`, config)
            .then((res) => {
                setListaFuncionarios(listaFuncionarios.filter(func => func.id !== id));
                setConfirmModalOpen(false);
                setColaboradorToDelete(null);
            })
            .catch((error) => {
                console.error("Error deleting colaborador:", error);
            });
    }

    console.log('lista : ' + JSON.stringify(listaFuncionarios));

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 pt-0 bg-agi max-h-[500px] overflow-y-scroll">
            <div >
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                        <tr className={styles["sticky-header"]}>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Classe da Carteira
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Telefone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Data de nascimento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFuncionarios.map(func => (
                            <tr key={func.id} className="odd:bg-white even:bg-gray-50 border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {func.nomeColaborador}
                                </th>
                                <td className="px-6 py-4">
                                    {func.classeCarteira}
                                </td>
                                <td className="px-6 py-4">
                                    {func.telefoneColaborador}
                                </td>
                                <td className="px-6 py-4">
                                    {func.emailColaborador}
                                </td>
                                <td className="px-6 py-4">
                                    {func.dataNascimento}
                                </td>
                                <td className="px-6 py-4 flex justify-around">
                                    <div className="px-2 font-medium bg-orange-500 hover:underline flex justify-center items-center rounded-lg mr-2" onClick={() => alterarColaborador(func)}>
                                        <h2 className='p-2 text-white'>Alterar</h2>
                                    </div>
                                    <div className="font-medium bg-red-600 text-white hover:underline flex justify-center items-center rounded-lg" onClick={() => handleDeleteClick(func)}>
                                        <span className='p-2'><FaTrashCan /></span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal conteudo={colaborador} isOpen={openModal} setModalOpen={() => setModal(!openModal)} tipo="colaborador" setModal={setModal}/>
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

export default TabelaColaborador;
