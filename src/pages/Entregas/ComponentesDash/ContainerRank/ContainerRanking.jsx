import React from "react";
import styles from "./ContainerRanking.module.css";
import Ranking from "./Ranking";

function ContainerDash({ titulo, valor }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>{titulo}</h1>
        </div>
        <div className={styles.valor}>
          <div className={styles.dados}>
            <h2>
              <Ranking />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerDash;
