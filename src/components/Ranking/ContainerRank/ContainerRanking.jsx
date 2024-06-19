import React from "react";
import styles from "./ContainerRanking.module.css";
import Ranking from "./Ranking";
// import { rankings } from "match-sorter";

function ContainerDash({ titulo, dadosRanking }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>{titulo}</h1>
        </div>
        <div className={styles.valor}>
          <div className={styles.cabecalho}>
            <div>Posição</div>
            <div>Nome</div>
            <div>Porcentagem</div>
          </div>
          <div className={styles.dados}>
            <h2>
              <Ranking valores={dadosRanking}/>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerDash;
