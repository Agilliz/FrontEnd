import React from 'react';
import styles from "./RankItem.module.css"

const RankItem = ({ posicao, nome, porcentagem }) => {
  return (
    <div className={styles.sessaoValor}>
      <div className={styles.valor}>
        <div>{posicao}</div>
        <div>{nome}</div>
        <div>{porcentagem}</div>
      </div>
    </div>
  );
};

export default RankItem;
