import React, { useContext } from 'react';
import DadosPessoais from './DadosPessoais';
import { multiStepContext } from './StepContext';

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function FormularioColaborador() {

    const { currentStep, finalData } = useContext(multiStepContext);

    function showStep (step) {
        switch(step) {
            case 1: 
            return <DadosPessoais />
            default: <></>
        }
    }

    return (
        <div className='p-4'>
        {showStep(currentStep)}
        </div>
    )

};

export default FormularioColaborador