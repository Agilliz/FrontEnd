import React, { useEffect, useState } from "react";
import axios from "axios";
import Titulo from "../../components/Titulo";
import PeriodoCalendario from "../../components/PeriodoCalendario";
import Modal from "../../components/Modal";
import ContainerDash from "../Entregas/ComponentesDash/ContainerDash/ContainerDash";
import ContainerData from "./ComponentesDash/ContainerData";
import Button from "./ComponentesDash/button";
import ContainerZona from "./ComponentesDash/ContainerMapaZona";
import GraficoLinha from "../../components/Graficos/GraficoLinha";
import GraficoBar from "../../components/Graficos/GraficoBar";

async function procurarDados() {
  const config = {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('tk')}`
    }
  };

  try {
    const response = await axios.get("http://localhost:8080/dados-financeiros", config);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.error("Erro ao buscar dados:", e);
    throw e;
  }
}

function Home() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await procurarDados();
        setDados(result);
        setLoading(false); // Marca o carregamento como completo após receber os dados
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false); // Marca o carregamento como completo mesmo em caso de erro
      }
    };

    fetchData();
  }, []);

  console.log(dados)

  if (loading) {
    return <p>Carregando dados...</p>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  return (
    <>
      <div className="pl-4 pt-4 w-full">
        <Titulo titulo="Dashboard financeiro" componente={<PeriodoCalendario />} />
        <Modal />
      </div>

      <div className="w-full h-auto flex flex-col">
        <div className="flex w-full">
          <div className="w-1/2 flex justify-center items-center p-3 pb-0 flex-col mb-7">
            <ContainerDash
              titulo="Faturamento Total"
              idChart="chart-bar"
              grafico={
                <GraficoBar
                  altura={180}
                  data={[dados.lucroBruto, dados.lucroLiquido, dados.taxas]} // Usa dados?.data ou um array padrão se dados for null
                  categories={["Lucro Bruto", "Lucro Líquido", "Taxas e Impostos"]}
                />
              }
            />

            <div className="flex justify-between items-center w-full mb-3">
              <ContainerData titulo={"Maior Retorno"} valor={dados.clienteMaiorRetorno || "null"} />
              <ContainerData titulo={"Menor Retorno"} valor={dados.clienteMenorRetorno || "null"} />
            </div>
            <div className="flex justify-between items-center w-full mt-1 mb-1">
              <ContainerZona titulo={"Área Maior Retorno"} valor={"Mauá"} />
              <ContainerZona titulo={"Área Menor Retorno"} valor={"Itaquera"} />
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-center p-3 pb-0 flex-col mb-7">
            <ContainerDash
              titulo="Custo Operacional"
              idChart="chart-linha"
              grafico={<GraficoLinha altura={180} data={[dados.custoOperacional]} />}
            />
            <div className="flex justify-center items-center w-full">
              <div className="flex justify-center items-center w-full flex-col">
                <div className="flex justify-between items-center w-full pt-1 mb-3">
                  <ContainerData titulo={"Ticket Médio"} valor={dados.ticketMedio} />
                  <ContainerData titulo={"Despesas Variáveis"} valor={dados.totalDespesasVariaveis} />
                </div>
                <div className="flex justify-between items-center w-full mb-2">
                  <ContainerData titulo={"Despesas Fixas"} valor={dados.totalDespesasFixas} />
                  <ContainerData titulo={"Impostos"} valor={dados.totalImposto} />
                </div>
                <div className="flex justify-between items-center w-full pt-0.5">
                  <ContainerData titulo={"Taxas"} valor={dados.taxas} />
                  <div className="w-1/2 flex justify-center items-center">
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
