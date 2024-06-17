import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import Input from '../Input'
import Button from '../../Button'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
const Valores = () => {

    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <>
            

                <form>
                    <strong className='text-agilzorange'>Valores</strong>
                        <div class="grid md:grid-cols-2 md:gap-6 pt-4">
                      </div>
                </form>

                <span className='flex justify-between'>
                    <span onClick={() => setStep(2)}>
                        <FaChevronLeft />
                    </span>

                    <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                        <span>
                            <FaChevronRight />
                        </span>
                    </IconContext.Provider>
                </span>

                <div className='flex'>
                    <div className='flex justify-center items-center w-full'>
                        <Button label="Salvar" color="bg-agilzorange" onClick={submitData} />
                    </div>
                </div>
            
        </>
    )
}

export default Valores