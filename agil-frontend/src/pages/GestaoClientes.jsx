import React, { useState } from 'react';
import TabelaClientes from '../components/Tabela/TabelaClientes';
import Button from '../components/Button';
import Modal from '../components/Modal';
import FormularioCliente from '../components/Formulario/FormularioCliente/FormularioCliente';
import Pesquisa from '../components/Pesquisa';

const GestaoClientes = () => {
  const [openModal, setModal] = useState(false);

  return (
    <>
      <div className='w-full flex justify-end pt-4 pr-4'>
        <div className="w-1/2 p-4 text-agilzorange">
          <strong>Mural Clientes</strong>
        </div>
        <div className='w-1/2 flex justify-end'>
          <Pesquisa />
        </div>
      </div>
      <div><TabelaClientes /></div>
      <div className='fixed bottom-3.5 right-3.5'>
        <Button onClick={() => setModal(true)} label=" + Cadastrar cliente" />
      </div>
      <Modal isOpen={openModal} setModal={setModal} setModalOpen={() => setModal(!openModal)} conteudo={<FormularioCliente />} tipo="cliente" />
    </>
  );
}

export default GestaoClientes;
