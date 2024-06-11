import React, { useState, useContext } from 'react'
import Input from '../Input'
import api from '../../../api'
import SelectBox from '../SelectBox'
import Button from '../../Button'
import { multiStepContext } from './StepContext'

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

const DadosEmpresariais = () => {



  const { setStep, userData, setUserData } = useContext(multiStepContext);


  const options = [
    { value: 'flex', label: 'Flex' },
    { value: 'particular', label: 'Particular' },

  ];



  return (
    <>
      
        {/* <div className='w-1/2'>
          <SelectBox label="Tipo cliente" options={options} value={userData["tipoCliente"]} onChange={(e) => setUserData({...userData, "tipoCliente": e.target.value})} />
        </div> */}

        <form className='pt-8'>
          <strong className='text-agilzorange'>Dados empresariais</strong>
          <div class="grid md:grid-cols-2 md:gap-6 pt-4">
            {/* <Input label="Razão social" size="relative z-0 mb-5 group" value={userData["razaoSocial"]} onChange={(e) => setUserData({...userData, "razaoSocial": e.target.value})} />
            <Input label="Nome fantasia" size="relative z-0 mb-5 group" value={userData["nomeFantasia"]} onChange={(e) => setUserData({...userData, "nomeFantasia": e.target.value})}/> */}
            <Input label="Digitos Verificadores" size="relative z-0 mb-5 group" value={userData ? userData.digitosVerificadores : ''} onChange={(e) => setUserData({...userData, "digitosVerificadores": e.target.value})}/>

            {/* <Input label="Unidade" value={userData["unidade"]} onChange={(e) => setUserData({...userData, "unidade": e.target.value})}/> */}
            <Input label="Telefone" value={userData ? userData.telefoneUnidade : ''} onChange={(e) => setUserData({...userData, "telefoneUnidade": e.target.value})}/>
            {/* <Input label="Hora Corte" value={userData["horaCorte"]} onChange={(e) => setUserData({...userData, "horaCorte": e.target.value})}/> */}
          </div>
            <span className='flex justify-between'>
              <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                <FaChevronLeft />
              </IconContext.Provider>
              
              <span onClick={()=> setStep(2)}>
                <FaChevronRight />
              </span>
            </span>
        </form>
      
    </>
  )
}

export default DadosEmpresariais