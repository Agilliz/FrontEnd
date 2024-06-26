import React, { useState, createContext, useEffect } from 'react';
import api from '../../../api';
import { toast } from 'react-toastify';
import FormularioCliente from './FormularioCliente';

export const multiStepContext = createContext();

const StepContextCliente = ({ conteudo, setModal }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    rua: '',
    cep: '',
    numero: '',
    telefoneUnidade: ''
  });
  const [finalData, setFinalData] = useState([]);
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    if (conteudo) {
      setUserData(conteudo);
    }
    carregarClientes(); 
  }, [conteudo]);

  const config = {
    headers: {
      'Authorization': `Bearer ${sessionStorage.getItem('tk')}`
    }
  };

  function submitData() {
    setFinalData(finalData => [...finalData, userData]);

    if (userData.idUnidade) {
      atualizarCliente();
    } else {
      cadastrarCliente();
    }
    setModal(false);
  };

  const atualizarCliente = () => {
    api.put(`http://localhost:8080/unidade/alterar/${userData.idUnidade}`, {
    rua: userData.rua,
    cep: userData.cep,
    numero: userData.numero,
    telefoneUnidade: userData.telefoneUnidade
    }, config)
    .then((res) => {
        toast.success('Cliente atualizado');
        carregarClientes(); // Atualizar lista de clientes após atualização
        limparDados();
      })
      .catch((error) => {
        toast.error('Falha ao atualizar cliente');
        console.log(error);
      });
  };


  const carregarClientes = () => {
    api.get('http://localhost:8080/unidade/', config)
      .then((res) => {
        setListaClientes(res.data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const cadastrarCliente = () => {
    api.post('http://localhost:8080/unidade/cadastrar', {
      rua: userData.rua,
      cep: userData.cep,
      numero: userData.numero,
      telefoneUnidade: userData.telefoneUnidade
      }, config)
      .catch((error) => {
        toast.error('Não foi possível cadastrar o cliente');
        console.log(error);
      }).finally(() => {
        setUserData({
          rua: '',
          cep: '',
          numero: '',
          telefoneUnidade: ''
        });
        setStep(1);
      });
      setModal(false);
  };



  const deletarCliente = (idCliente) => {
    api.delete(`http://localhost:8080/unidade/deletar/${idCliente}`, config)
      .then((res) => {
        toast.success('Cliente excluído');
        carregarClientes(); // Atualizar lista de clientes após exclusão
      })
      .catch((error) => {
        toast.error('Erro ao excluir cliente');
        console.log(error);
      });
  };

  const limparDados = () => {
    setUserData({
      rua: '',
      cep: '',
      numero: '',
      telefoneUnidade: ''
    });
    setStep(1);
  };

  return (
    <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData, listaClientes, deletarCliente }}>
      {/* Renderizar o conteúdo filho */}
      <FormularioCliente />
    </multiStepContext.Provider>
  );
};

export default StepContextCliente;