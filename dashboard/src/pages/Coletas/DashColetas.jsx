import React, { useEffect, useState } from "react";
import axios from "axios";
import Titulo from "../../components/Titulo";
import PeriodoCalendario from "../../components/PeriodoCalendario";
import Modal from "../../components/Modal";
import ContainerDash from "./ComponentesDash/ContainerDash/ContainerDash";
import ContainerData from "./ComponentesDash/ComponenteData/ContainerData";
import RankingArea from "../../components/Ranking/ContainerRank/ContainerRanking";
import ContainerDataComButton from "./ComponentesDash/ContainerDataComBtn/ContainerDataComButton";
import GraficoLinha from "../../components/Graficos/GraficoLinhaHora";
import GraficoBar from "../../components/Graficos/GraficoBar";
import Caminhao from "../../components/caminhaoLoading/caminhaoLoading";

async function procurarDados() {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("tk")}`,
    },
  };

  try {
    const response = await axios.get("http://localhost:8080/dados-coleta", config);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.error("Erro ao buscar dados:", e);
    throw e;
  }
}

// Função para agrupar os dados por hora
const agruparDadosPorHora = (coletasPorTempo) => {
  const dadosAgrupados = {};

  coletasPorTempo.forEach((item) => {
    const hora = new Date(item.dataHora).getHours(); // Extrai a hora do timestamp
    if (!dadosAgrupados[hora]) {
      dadosAgrupados[hora] = 0;
    }
    dadosAgrupados[hora] += item.quantidadeColetas;
  });

  return Object.keys(dadosAgrupados).map((hora) => ({
    hora: `${hora}h`,
    quantidade: dadosAgrupados[hora],
  }));
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
  console.log(dados);
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Caminhao />
      </div>
    );
  }

  // Aqui você deve aplicar a função agruparDadosPorHora para preparar os dados para o gráfico de linha
  const dadosGraficoLinha = agruparDadosPorHora(dados.coletasPorTempo);

  return (
    <>
      <div className="pl-4 pt-4 w-full">
        <Titulo titulo="Dashboard Coletas" componente={<PeriodoCalendario />} />
        <Modal />
      </div>

      <div className="w-full h-auto flex flex-col">
        <div className="flex w-full">
          <div className="w-1/2 flex justify-center items-center p-3 pb-0 flex-col mb-2">
            <ContainerDash
              titulo="Excelência em Coletas"
              idChart="chart-bar"
              grafico={
                <GraficoBar
                  altura={130}
                  data={[dados.coletasRealizadas, dados.coletasCanceladas, dados.pacotesAguardandoColeta]}
                  categories={[
                    "Coletas Realizadas",
                    "Coletas Canceladas",
                    "Coletas em Espera",
                  ]}
                />
              }
            />

            <div className="flex justify-between items-center w-full">
              <ContainerData
                titulo={"Maior Coleta"}
                valor={dados.nomeClienteMaiorColeta}
              />
              <ContainerData
                titulo={"Menor Coleta"}
                valor={dados.nomeClienteMenorColeta}
              />
            </div>

            <ContainerDash
              titulo="Quantidade de coletas"
              idChart="chart-linha"
              grafico={<GraficoLinha altura={140} dados={dadosGraficoLinha} />}
            />
          </div>

          <div className="w-1/2 flex justify-center items-center p-3 flex-col h-full">
            <div className="flex justify-center items-center w-full pt-0">
              <div className="flex justify-center items-center w-full flex-col">
                <div className="flex justify-between items-center w-full">
                  <ContainerData
                    titulo={"Coletas Realizadas"}
                    valor={dados.coletasRealizadas}
                  />
                  <ContainerData
                    titulo={"Coletas Canceladas"}
                    valor={dados.coletasCanceladas}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <ContainerData
                    titulo={"Pacotes Coletados"}
                    valor={dados.pacotesColetados}
                  />
                  <ContainerData titulo={"Pacotes Devolvidos"} valor={"3"} />
                </div>
                <div className="flex justify-between items-center w-full">
                  <ContainerData
                    titulo={"Média Hr Corte"}
                    valor={dados.horaCorteMedia}
                  />
                  <ContainerData
                    titulo={"Pacotes Ausentes"}
                    valor={dados.pacotesAusentes}
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <RankingArea
                    titulo={"Ranking Zonas de Coletas"}
                    dadosRanking={dados.zonasRankeadas}
                  />
                  <ContainerDataComButton
                    titulo={"Pacotes em Rota"}
                    valor={dados.pacotesEmRota}
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
