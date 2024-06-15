//StepContext Colaborador
import React, { useState } from 'react';
import api from '../../../api';
import FormularioColaborador from './FormularioColaborador';
import { toast } from 'react-toastify';
export const multiStepContext = React.createContext();

 const StepContext = ({conteudo, setModal}) => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState(conteudo);
    const [finalData, setFinalData] = useState([]);  

    function submitData() {
      setFinalData(finalData=>[...finalData, userData]);

      if(!conteudo) cadastrarColaborador();
      else atualizarColaborador();

      setModal(false);

      window.location.reload();

      
    }

    function atualizarColaborador(){
      api.put(`unidade/alterar/${userData.idUnidade}`,{
            rua: userData.rua,
            cep: userData.cep,
            numero: userData.numero,
            digitosVerificadores: userData.digitosVerificadores,
            telefoneUnidade: userData.telefoneUnidade
        },
        {
        auth: {
            username: 'agilizDev',
            password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
        }
        })
        .then((res) => {
            toast.success('Usuário atualizado');
            console.log(res);
        })
        .catch((error) => {
            toast.error('Falha ao atualizar');
            console.log(error);
        })
    }

    function cadastrarColaborador(){
      api.post('unidade/cadastrar',{
        rua: userData.rua,
        cep: userData.cep,
        numero: userData.numero,
        digitosVerificadores: userData.digitosVerificadores,
        telefoneUnidade: userData.telefoneUnidade
      },
      {
        auth: {
            username: 'agilizDev',
            password: '850d6c98-8e09-4325-b419-8ca5c7f97dd5'
        }
      })
      .then((res) => {
          toast.success('Usuário cadastrado!');
      })
      .catch((error) => {
          toast.error('Não foi possível realizar o cadastro');
      })
      .finally(() => {
        setUserData([]);
        setStep(1);
      });

      setModal(false);


    }

    return (
      <div>
        <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}} >
          <FormularioColaborador />
        </multiStepContext.Provider>
      </div>
    )
}
export default StepContext;