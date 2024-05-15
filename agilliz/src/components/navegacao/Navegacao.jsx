import React from "react";
import Logo from "../brand/Logo";
import { useNavigate } from "react-router-dom";
import styles from "./Navegacao.module.css";

const Navegacao = () => {
  const navigate = useNavigate();

  function handleClick(id) {
    return () => {
      const elemento = document.getElementById(id);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      className="nav"
    >
      <Logo />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "55%",
          fontWeight: "600",
          alignItems: "center",
        }}
      >
        <li onClick={handleClick("idContainerSobreNos")}>Sobre nós</li>
        <li onClick={handleClick("idModoOperacoes")}>Modo de Operação</li>
        <li onClick={handleClick("idContainerBeneficios")}>Benefícios e vantagens</li>
        <li onClick={handleClick("idContatos")}>Contato</li>
        <button onClick={() => navigate("/login")} className={styles.button}>
          <div className={styles["motoqueiro"]}></div>
          <h1>Entrar</h1>
        </button>
      </ul>
    </div>
  );
};

export default Navegacao;
