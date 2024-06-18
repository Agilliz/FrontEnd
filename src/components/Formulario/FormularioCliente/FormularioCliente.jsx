import React, { useContext, useState } from 'react';
import DadosEmpresariais from './DadosEmpresariais'
import Endereco from './Endereco'
import Valores from './Valores'
import { multiStepContext } from './StepContext';

// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
// import { IconContext } from 'react-icons/lib';

function FormularioCliente({ initialData }) {

    const { currentStep, finalData } = useContext(multiStepContext);

    const [formData, setFormData] = useState({

        rua: initialData ? initialData.rua : '',
        cep: initialData ? initialData.cep : '',
        numero: initialData ? initialData.numero : '',
        digitosVerificadores: initialData ? initialData.digitosVerificadores : '',
        telefoneUnidade: initialData ? initialData.telefoneUnidade : '',
        
    });



    function showStep (step) {
        switch(step) {
            case 1: 
            return <DadosEmpresariais />
            case 2: 
            return <Endereco /> 
            case 3: 
            return <Valores />
            default:
            break;
        }
    }

    return (
        <div className='p-4'>
        {showStep(currentStep)}
        </div>
    )



};





export default FormularioCliente