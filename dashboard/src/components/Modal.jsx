import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import StepContextColaborador from './Formulario/FormularioColaborador/StepContext';
import StepContextCliente from './Formulario/FormularioCliente/StepContext';

const Modal = ({ isOpen, setModalOpen, conteudo, cliente, setModal, tipo }) => {
  if (isOpen) {
    return (
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80' style={{backdropFilter: "blur(2px)"}}>
        <div className='fixed top-36 left-64 transform translate-x-1/2 transform-y-1/2 bg-white w-1/3 rounded-lg'>
          <span className='fixed left-full cursor-pointer transform -translate-x-full p-4' onClick={setModalOpen}>
            <AiOutlineClose />
          </span>
          {tipo === 'colaborador' ? 
            <StepContextColaborador conteudo={cliente} setModal={setModal}>
              <div className='p-4'>
                {conteudo}
              </div>
            </StepContextColaborador>
          : 
            <StepContextCliente conteudo={cliente} setModal={setModal}>
              <div className='p-4'>
                {conteudo}
              </div>
            </StepContextCliente>
          }
        </div>
      </div>
    );
  }

  return null;
}

export default Modal;
