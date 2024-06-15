import React, { useState, useContext } from 'react'
import Input from '../Input'
import SelectBox from '../SelectBox'
import { multiStepContext } from './StepContext'
import Button from '../../Button'

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

const DadosPessoais = () => {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

  return (
    <>

        <form className='pt-8'>
          <strong className='text-agilzorange'>Dados pessoais</strong>
          <div class="grid md:grid-cols-2 md:gap-6 pt-4">
            <Input label="Nome" size="relative z-0 mb-5 group" value={userData["nomeColaborador"]} onChange={(e) => setUserData({...userData, "nomeColaborador": e.target.value})} />
            <Input label="RG" size="relative z-0 mb-5 group" value={userData["rg"]} onChange={(e) => setUserData({...userData, "rg": e.target.value})} />
            <Input label="CPF" size="relative z-0 mb-5 group" value={userData["cpf"]} onChange={(e) => setUserData({...userData, "cpf": e.target.value})} />         
            <Input label="Data de nascimento" size="relative z-0 mb-5 group" value={userData["dataNascimento"]} onChange={(e) => setUserData({...userData, "dataNascimento": e.target.value})}/>
            <Input label="Data de admissão" value={userData["dataAdmissao"]} onChange={(e) => setUserData({...userData, "dataAdmissao": e.target.value})}/>
            <Input label="Classe da carteira" size="relative z-0 mb-5 group" value={userData["classeCarteira"]} onChange={(e) => setUserData({...userData, "classeCarteira": e.target.value})}/>

            <Input label="Email" value={userData["emailColaborador"]} onChange={(e) => setUserData({...userData, "emailColaborador": e.target.value})}/>
            <Input label="senhaColaborador" value={userData["senhaColaborador"]} onChange={(e) => setUserData({...userData, "senhaColaborador": e.target.value})}/>
          </div>
          <div className='flex justify-center items-center w-full'>
                        <Button label="Salvar" color="bg-agilzorange" onClick={submitData} />
                    </div>
        </form>
      
    </>
  )
}

export default DadosPessoais