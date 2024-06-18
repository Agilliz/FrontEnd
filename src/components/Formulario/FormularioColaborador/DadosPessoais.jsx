import React, {  useContext } from 'react'
import Input from '../Input'
import { multiStepContext } from './StepContext'
import Button from '../../Button'

// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
// import { IconContext } from 'react-icons/lib';

const DadosPessoais = () => {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

  return (
    <>

<form className='pt-8' onSubmit={(e) => { e.preventDefault(); submitData(); }}>
      <strong className='text-agilzorange p-4'>Dados pessoais</strong>
      <div className="grid md:grid-cols-2 md:gap-6 p-4">
        <Input label="Nome" value={userData.nomeColaborador} onChange={(e) => setUserData({ ...userData, nomeColaborador: e.target.value })} />
        <Input label="RG" value={userData.rg} onChange={(e) => setUserData({ ...userData, rg: e.target.value })} />
        <Input label="CPF" value={userData.cpf} onChange={(e) => setUserData({ ...userData, cpf: e.target.value })} />
        <Input label="Data de nascimento" value={userData.dataNascimento} onChange={(e) => setUserData({ ...userData, dataNascimento: e.target.value })} />
        <Input label="Data de admissão" value={userData.dataAdmissao} onChange={(e) => setUserData({ ...userData, dataAdmissao: e.target.value })} />
        <Input label="Classe da carteira" value={userData.classeCarteira} onChange={(e) => setUserData({ ...userData, classeCarteira: e.target.value })} />
        <Input label="Email" value={userData.emailColaborador} onChange={(e) => setUserData({ ...userData, emailColaborador: e.target.value })} />
        <Input label="Senha" value={userData.senhaColaborador} onChange={(e) => setUserData({ ...userData, senhaColaborador: e.target.value })} />
        <Input label="Telefone" value={userData.telefoneColaborador} onChange={(e) => setUserData({ ...userData, telefoneColaborador: e.target.value })} />
      </div>
      <div className='flex justify-center items-center w-full'>
        <Button label="Salvar" color="bg-agilzorange" type="submit" onClick={submitData}/>
      </div>
    </form>
    </>
  )
}

export default DadosPessoais