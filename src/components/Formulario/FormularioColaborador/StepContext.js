import React, { useState, createContext } from 'react';
import api from '../../../api';
import FormularioColaborador from './FormularioColaborador';
import { toast } from 'react-toastify';

export const multiStepContext = createContext();

const StepContextColaborador = ({ conteudo, setModal }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState(conteudo || {
    nomeColaborador: '',
    rg: '',
    cpf: '',
    dataNascimento: '',
    dataAdmissao: '',
    classeCarteira: '',
    emailColaborador: '',
    senhaColaborador: '',
    telefoneColaborador: ''
  });
  const [finalData, setFinalData] = useState([]);

  const config = {
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('tk')}`
    }
  };

  const submitData = () => {
    if (conteudo) {
      atualizarColaborador();
    } else {
      cadastrarColaborador();
    }
    setModal(false); // Move setModal aqui para evitar chamadas duplicadas

    // Limpar dados após cadastro ou atualização
    setUserData({
      nomeColaborador: '',
      rg: '',
      cpf: '',
      dataNascimento: '',
      dataAdmissao: '',
      classeCarteira: '',
      emailColaborador: '',
      senhaColaborador: '',
      telefoneColaborador: ''
    });
    setStep(1);
  };

  const atualizarColaborador = () => {
    api.put(`http://localhost:8080/funcionario/alterar/${userData.idColaborador}`, userData, config)
      .then((res) => {
        toast.success('Usuário atualizado');
        console.log(res);
      })
      .catch((error) => {
        toast.error('Falha ao atualizar');
        console.error('erro : ' + error);
      });
  };

  const cadastrarColaborador = () => {
    api.post('http://localhost:8080/funcionario/cadastrar', userData, config)
      .then((res) => {
        toast.success('Usuário cadastrado!');
        console.log(res);
      })
      .catch((error) => {
        toast.error('Não foi possível realizar o cadastro');
        console.error(error);
      });
  };

  return (
    <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
      <FormularioColaborador />
    </multiStepContext.Provider>
  );
};

export default StepContextColaborador;
