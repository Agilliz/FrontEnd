import React from "react";
import styles from "./ContainerMapaZona.module.css";

function ContainerZona({ titulo, valor }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>{titulo}</h1>
        </div>
        <div className={styles.valor}>
          <h2>{valor}</h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerZona;
