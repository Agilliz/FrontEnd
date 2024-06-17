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
    senhaColaborador: ''
  });
  const [finalData, setFinalData] = useState([]);

  const config = {
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('tk')}`
    }
  };

  function submitData() {
    setFinalData(finalData => [...finalData, userData]);

    if (!conteudo) cadastrarColaborador();
    else atualizarColaborador();

    setModal(false);
  }

  function atualizarColaborador() {
    api.put(`unidade/alterar/${userData.idUnidade}`, {
      rua: userData.rua,
      cep: userData.cep,
      numero: userData.numero,
      digitosVerificadores: userData.digitosVerificadores,
      telefoneUnidade: userData.telefoneUnidade
    }, {
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
    });
  }

  function cadastrarColaborador() {
    console.log(JSON.stringify(userData) + " aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    api.post('funcionario/cadastrar', {
      nomeColaborador: userData.nomeColaborador,
      cpf: userData.cpf,
      rg: userData.rg,
      classeCarteira: userData.classeCarteira,
      dataNascimento: userData.dataNascimento,
      emailColaborador: userData.emailColaborador,
      senhaColaborador: userData.senhaColaborador,
      dataAdmissao: userData.dataAdmissao,
      telefoneColaborador: userData.telefoneColaborador
    }, config)
    .then((res) => {
      toast.success('Usuário cadastrado!');
      console.log(res);
    })
    .catch((error) => {
      toast.error('Não foi possível realizar o cadastro');
      console.log(error);
    })
    .finally(() => {
      setUserData({
        nomeColaborador: '',
        rg: '',
        cpf: '',
        dataNascimento: '',
        dataAdmissao: '',
        classeCarteira: '',
        emailColaborador: '',
        senhaColaborador: ''
      });
      setStep(1);
    });

    setModal(false);
  }

  return (
    <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
      <FormularioColaborador />
    </multiStepContext.Provider>
  );
};

export default StepContextColaborador;