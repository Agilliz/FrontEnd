import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import Input from '../Input'
import Button from '../../Button';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';


const Endereco = () => {


  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);


  return (
    <>
      

        <form>
          <strong className='text-agilzorange'>Endereço</strong>
          <div class="grid md:grid-cols-2 md:gap-6 pt-4">
            <Input label="CEP" size="relative z-0 mb-5 group" value={userData ? userData.cep : ''} onChange={(e) => setUserData({...userData, "cep": e.target.value})}/>
            <Input label="Rua" size="relative z-0 mb-5 group" value={userData ? userData.rua : ''} onChange={(e) => setUserData({...userData, "rua": e.target.value})}/>
            <Input label="Número" size="relative z-0 mb-5 group" value={userData ? userData.numero : ''} onChange={(e) => setUserData({...userData, "numero": e.target.value})} />
{/* 
            <Input label="Complemento" value={userData["complemento"]} onChange={(e) => setUserData({...userData, "complemento": e.target.value})}/>
            <Input label="Bairro" value={userData["bairro"]} onChange={(e) => setUserData({...userData, "bairro": e.target.value})}/>
            <Input label="Cidade" value={userData["cidade"]} onChange={(e) => setUserData({...userData, "cidade": e.target.value})}/>
            <Input label="UF" value={userData["uf"]} onChange={(e) => setUserData({...userData, "uf": e.target.value})}/> */}
          </div>
          <span className='flex justify-between'>
            <span onClick={() => setStep(1)}>
              <FaChevronLeft />
            </span>

            <span onClick={() => setStep(3)}>
            <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                        <span>
                            <FaChevronRight />
                        </span>
            </IconContext.Provider>
            </span>

            
          </span>
          <div className='flex'>
                    <div className='flex justify-center items-center w-full'>
                        <Button label="Salvar" color="bg-agilzorange" onClick={submitData} />
                    </div>
                </div>
        </form>
      
    </>
  )
}

export default Endereco