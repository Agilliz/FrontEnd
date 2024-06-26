import React, { useContext } from 'react';
import Input from '../Input';
import Button from '../../Button';
import { multiStepContext } from './StepContext';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function FormularioCliente() {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

  return (
    <form className='pt-8'>
      <strong className='text-agilzorange'>Dados pessoais</strong>
      <div className="grid md:grid-cols-2 md:gap-6 pt-4">
        <Input label="Telefone" value={userData.telefoneUnidade} onChange={(e) => setUserData({...userData, telefoneUnidade: e.target.value})} />
        <Input label="CEP" value={userData.cep} onChange={(e) => setUserData({...userData, cep: e.target.value})} />
        <Input label="Rua" value={userData.rua} onChange={(e) => setUserData({...userData, rua: e.target.value})} />
        <Input label="Número" value={userData.numero} onChange={(e) => setUserData({...userData, numero: e.target.value})} />
      </div>
      <div className='flex justify-center items-center w-full'>
        <Button label="Salvar" color="bg-agilzorange" onClick={submitData} />
      </div>
    </form>
  );
}

export default FormularioCliente;