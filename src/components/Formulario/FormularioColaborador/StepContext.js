import React, { useState, createContext, useEffect } from 'react';
import api from '../../../api';
import FormularioColaborador from './FormularioColaborador';
import { toast } from 'react-toastify';

export const multiStepContext = createContext();

const StepContextColaborador = ({ conteudo, setModal }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
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

  useEffect(() => {
    if (conteudo) {
      setUserData(conteudo);
    }
  }, [conteudo]);

  const config = {
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('tk')}`
    }
  };

  function submitData() {
    setFinalData(finalData => [...finalData, userData]);
    console.log('conteudo:', conteudo);
    console.log('userData:', userData);
    
    if (!userData.idColaborador) {
      cadastrarColaborador();
    } else {
      atualizarColaborador();
    }
    setModal(false);
  }

  function atualizarColaborador() {
    api.put(`http://localhost:8080/funcionario/alterar/${userData.idColaborador}`, {
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
      toast.success('Usuário atualizado');
      window.location.reload();
      console.log(res);
    })
    .catch((error) => {
      toast.error('Falha ao atualizar');
      console.log(error);
    });
  }

  function cadastrarColaborador() {
    console.log(userData); // Removed JSON.stringify

    api.post('http://localhost:8080/funcionario/cadastrar', {
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
      window.location.reload();
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
        senhaColaborador: '',
        telefoneColaborador: ''
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