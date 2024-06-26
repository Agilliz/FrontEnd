import React, { useContext } from 'react';
import { multiStepContext } from './StepContext';
import Input from '../Input';
import Button from '../../Button';

const FormularioColaborador = () => {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
  const rg = 'rg'.toUpperCase

  return (
    <form className='pt-8'>
      <div className='p-4'>

      <strong className='text-agilzorange'>Dados pessoais</strong>
      <div className="grid md:grid-cols-2 md:gap-6 pt-4">
        <Input label="Nome" size="relative z-0 mb-5 group" value={userData.nomeColaborador} onChange={(e) => setUserData({...userData, nomeColaborador: e.target.value})} />
        <Input label="RG" size="relative z-0 mb-5 group" value={userData.rg} onChange={(e) => setUserData({...userData, rg: e.target.value})} />
        <Input label="CPF" size="relative z-0 mb-5 group" value={userData.cpf} onChange={(e) => setUserData({...userData, cpf: e.target.value})} />
        <Input label="Data de nascimento" size="relative z-0 mb-5 group" value={userData.dataNascimento} onChange={(e) => setUserData({...userData, dataNascimento: e.target.value})} />
        <Input label="Data de admissão" value={userData.dataAdmissao} onChange={(e) => setUserData({...userData, dataAdmissao: e.target.value})} />
        <Input label="Classe da carteira" size="relative z-0 mb-5 group" value={userData.classeCarteira} onChange={(e) => setUserData({...userData, classeCarteira: e.target.value})} />
        <Input label="Email" value={userData.emailColaborador} onChange={(e) => setUserData({...userData, emailColaborador: e.target.value})} />
        <Input label="Senha" value={userData.senhaColaborador} onChange={(e) => setUserData({...userData, senhaColaborador: e.target.value})} />
        <Input label="Telefone" value={userData.telefoneColaborador} onChange={(e) => setUserData({...userData, telefoneColaborador: e.target.value})} />
      </div>
      </div>
      <div className='flex justify-center items-center w-full'>
        <Button label="Salvar" color="bg-agilzorange" onClick={submitData} />
      </div>
    </form>
  );
}

export default FormularioColaborador;