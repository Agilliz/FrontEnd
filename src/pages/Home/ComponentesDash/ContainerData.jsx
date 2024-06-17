import React from "react";
import styles from "./ContainerData.module.css";

function ContainerData({ titulo, valor }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
            <h1>
                {titulo}
            </h1>
        </div>
        <div className={styles.valor}>
            <h2>
                {valor}
            </h2>
        </div>
      </div>
    </>
  );
}

export default ContainerData;
