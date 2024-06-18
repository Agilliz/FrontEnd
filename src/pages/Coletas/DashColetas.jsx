import React, { useEffect} from "react";
import Titulo from "../../components/Titulo";
import PeriodoCalendario from "../../components/PeriodoCalendario";
import Modal from "../../components/Modal";
import ContainerDash from "./ComponentesDash/ContainerDash/ContainerDash";
import { inicializaGraficos } from "./DashboardData";
import ContainerData from "./ComponentesDash/ComponenteData/ContainerData";
import RankingArea from "./ComponentesDash/ContainerRank/ContainerRanking";
import ContainerDataComButton from "./ComponentesDash/ContainerDataComBtn/ContainerDataComButton";

function Home() {
  useEffect(() => {
    const graficos = inicializaGraficos();

    return () => {
      graficos.forEach((grafico) => grafico.destroy());
    };
  }, []);

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
            />

            <div className="flex justify-between items-center w-full">
              <ContainerData titulo={"Maior Coleta"} valor={"Cliente"} />
              <ContainerData titulo={"Menor Coleta"} valor={"Cliente"} />
            </div>

            <ContainerDash
              titulo="Quantidade de coletas"
              idChart="chart-linha"
            />
          </div>

          <div className="w-1/2 flex justify-center items-center p-3 flex-col h-full">
            <div className="flex justify-center items-center w-full pt-0">
              <div className="flex justify-center items-center w-full flex-col">
                <div className="flex justify-between items-center w-full">
                  <ContainerData titulo={"Coletas Realizas"} valor={"35/40"} />
                  <ContainerData titulo={"Coletas Canceladas"} valor={"2"} />
                </div>
                <div className="flex justify-between items-center w-full">
                  <ContainerData
                    titulo={"Pacotes Coletados"}
                    valor={"750/900"}
                  />
                  <ContainerData titulo={"Pacotes Devolvidos"} valor={"3"} />
                </div>
                <div className="flex justify-between items-center w-full">
                  <ContainerData titulo={"Média Hr Corte"} valor={"13:00"} />
                  <ContainerData
                    titulo={"Xxxxxxxxxxxxxx"}
                    valor={"xxxxxxxxxxxxxxxx"}
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <RankingArea titulo={"Ranking Zonas de Coletas"} />
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
