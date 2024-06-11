// import React, { useContext } from 'react';
// import DadosEmpresariais from './DadosEmpresariais'
// import Endereco from './Endereco'
// import Valores from './Valores'
// import { multiStepContext } from './StepContext';

// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
// import { IconContext } from 'react-icons/lib';

// function FormularioColaborador() {

//     const { currentStep, finalData } = useContext(multiStepContext);

//     function showStep (step) {
//         switch(step) {
//             case 1: 
//             return <DadosEmpresariais />
//             case 2: 
//             return <Endereco /> 
//             case 3: 
//             return <Valores />
//         }
//     }

//     return (
//         <div className='p-4'>
//         {showStep(currentStep)}
//         </div>
//     )

// };

// export default FormularioColaborador