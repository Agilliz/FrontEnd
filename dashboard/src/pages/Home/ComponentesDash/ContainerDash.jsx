import React from "react";
import styles from "./ContainerDash.module.css";

function ContainerDash({ titulo, idChart, tamanho, grafico}) {
  const tamanhoContainer = {
    "--tamanho-container": `${tamanho}vh`,
  };
  return (
    <div className={`flex w-full justify-center items-center flex-col rounded-lg ${styles.container}`} style={{...tamanhoContainer}}>
      <h1 className={styles.fonte}>{titulo}</h1>
      <div className={styles["chartContainer"]}>
        <div className="chart">
          {grafico}
        </div>
      </div>
    </div>
  );
}

export default ContainerDash;
