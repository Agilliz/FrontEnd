import React from "react";
import styles from "./ContainerDataComButton.module.css";
import Button from "./button";

function ContainerData({ titulo, valor }) {
  return (
    <div className={styles.containerPai}>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>{titulo}</h1>
        </div>
        <div className={styles.valor}>
          <h2>{valor}</h2>
        </div>
      </div>
      <Button />
    </div>
  );
}

export default ContainerData;
