import React, { useEffect, useState } from "react";
import axios from "axios";
import Titulo from "../../components/Titulo";
import PeriodoCalendario from "../../components/PeriodoCalendario";
import Modal from "../../components/Modal";
import ContainerDash from "./ComponentesDash/ContainerDash/ContainerDash";
import ContainerData from "./ComponentesDash/ComponenteData/ContainerData";
import ContainerDataComButton from "./ComponentesDash/ContainerDataComBtn/ContainerDataComButton";
import GraficoLinha from "../../components/Graficos/GraficoLinhaMes";
import GraficoBar from "../../components/Graficos/GraficoBar";
import RankingArea from "../../components/Ranking/ContainerRank/ContainerRanking";
import Caminhao from "../../components/caminhaoLoading/caminhaoLoading";

// Função para buscar dados do servidor
async function procurarDados() {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("tk")}`,
    },
  };

  try {
    const response = await axios.get("http://localhost:8080/dash-entregas", config);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.error("Erro ao buscar dados:", e);
    throw e;
  }
}

// Função para converter número do mês para nome do mês
const mesParaNome = (numeroDoMes) => {
  const nomesDosMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return nomesDosMeses[numeroDoMes - 1] || "Mês desconhecido";
};

// Função para preparar os dados do gráfico de linha
const prepararDadosGrafico = (dados) => {
  // Dados fictícios para teste
  const dadosFicticios = [
    { mes: 1, qtdEntregas: 50 },
    { mes: 2, qtdEntregas: 80 },
    { mes: 3, qtdEntregas: 65 },
    { mes: 4, qtdEntregas: 90 },
    { mes: 5, qtdEntregas: 75 },
    { mes: 6, qtdEntregas: 60 },
  ];

  // Mapear os dados reais do servidor ou dados fictícios para teste
  return  dadosFicticios.map((item) => ({
    mes: mesParaNome(item.mes),
    qtdEntregas: item.qtdEntregas
  }));
  
  // dados ? dados.map((item) => ({
  //   mes: mesParaNome(item.mes),
  //   qtdEntregas: item.qtdEntregas
  // })) : 
  
  
 
};

function Home() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await procurarDados();
        setDados(result);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Caminhao />
      </div>
    );
  }

  // Preparar os dados do gráfico de linha
  const dadosGraficoLinha = prepararDadosGrafico(dados ? dados.mesPorQtdDeEntrega : null);

  return (
    <>
      <div className="pl-4 pt-4 w-full">
        <Titulo titulo="Dashboard Entregas" componente={<PeriodoCalendario />} />
        <Modal />
      </div>

      <div className="w-full h-auto flex flex-col">
        <div className="flex w-full">
          <div className="w-1/2 flex justify-center items-center p-3 pb-0 flex-col mb-2">
            <ContainerDash
              titulo="Excelência em Entregas"
              idChart="chart-bar"
              grafico={<GraficoBar altura={133} data={[dados.totalEntregaDTO.entregues, dados.totalAusentesECanceladas.totalAusentes]} categories={["Entregas Realizadas", "Entregas em Rota", "Entregas Ausentes"]}/>}
            />

            <div className="flex justify-between items-center w-full">
              <ContainerData titulo={"Maior Entrega"} valor={dados.maiorEMenorEntregaColaborador.nomeColaboradorMaiorEntrega} />
              <ContainerData titulo={"Menor Entrega"} valor={dados.maiorEMenorEntregaColaborador.nomeColaboradorMenorEntrega} />
            </div>

            <ContainerDash
              titulo="Quantidade de Entregas"
              idChart="chart-linha"
              grafico={<GraficoLinha altura={140} data={dadosGraficoLinha}/>}
            />
          </div>

          <div className="w-1/2 flex justify-center items-center p-3 flex-col h-full">
            <div className="flex justify-center items-center w-full pt-0">
              <div className="flex justify-center items-center w-full flex-col">
                <div className="flex justify-between items-center w-full">
                  <ContainerData titulo={"Zonas Atendidas"} valor={dados.zonasAtendidas} />
                  <ContainerData titulo={"Zonas Não Atendidas"} valor={"10"} />
                </div>
                <div className="flex justify-between items-center w-full">
                  <ContainerData
                    titulo={"Entregas Realizadas"}
                    valor={dados.totalEntregaDTO.entregues + "/" + dados.totalEntregaDTO.total}
                  />
                  <ContainerData titulo={"Entregas em Rota"} valor={"450/900"} />
                </div>
                <div className="flex justify-between items-center w-full">
                  <ContainerData titulo={"Entregas Ausentes"} valor={dados.totalAusentesECanceladas.totalAusentes} />
                  <ContainerData
                    titulo={"Entregas Canceladas"}
                    valor={dados.totalAusentesECanceladas.totalCanceladas}
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <RankingArea
                    titulo={"Ranking Zonas de Entregas"}
                    dadosRanking={dados.rankingEntregas}
                  />
                  <ContainerDataComButton
                    titulo={"Xxxxxxxxxxxxxx"}
                    valor={"xxxxxxxxxxxxxxxx"}
                  />
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
