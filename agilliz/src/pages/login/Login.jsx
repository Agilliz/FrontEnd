import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import fotoForm from "../../images/logo-coelinho.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  async function log() {
    let credentials = {
      email: login,
      senha: senha,
    };

    axios
      .post(`http://localhost:8080/funcionario/login`, credentials)
      .then(async (response) => {
        const{data} = await response;

        sessionStorage.setItem("tk", data.token)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const navigate = useNavigate();
  
  return (
    <div className={styles.padraoFundo}>
      <div className={styles.gradienteFundo}></div>
      <div className={styles.voltar}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16" onClick={() => navigate('/')}>
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>

      </div>
      <div className={styles.form}>
        <div className={styles.imgForm}>
          <img src={fotoForm} alt="Formulário" />
        </div>
        <div className={styles.camposForm}>
          <h1>LOGIN</h1>
          <div className={styles["wave-group"]}>
            <input
              required
              type="text"
              className={styles.input}
              onChange={(e) => handleInputChange(e, setLogin)}
            />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              <span className={styles["label-char"]} style={{ "--index": 0 }}>
                U
              </span>
              <span className={styles["label-char"]} style={{ "--index": 1 }}>
                s
              </span>
              <span className={styles["label-char"]} style={{ "--index": 2 }}>
                u
              </span>
              <span className={styles["label-char"]} style={{ "--index": 3 }}>
                á
              </span>
              <span className={styles["label-char"]} style={{ "--index": 4 }}>
                r
              </span>
              <span className={styles["label-char"]} style={{ "--index": 5 }}>
                i
              </span>
              <span className={styles["label-char"]} style={{ "--index": 6 }}>
                o
              </span>
            </label>
          </div>

          <div className={styles["wave-group"]}>
            <input
              required
              type="password"
              className={styles.input}
              onChange={(e) => handleInputChange(e, setSenha)}
            />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              <span className={styles["label-char"]} style={{ "--index": 0 }}>
                S
              </span>
              <span className={styles["label-char"]} style={{ "--index": 1 }}>
                e
              </span>
              <span className={styles["label-char"]} style={{ "--index": 2 }}>
                n
              </span>
              <span className={styles["label-char"]} style={{ "--index": 3 }}>
                h
              </span>
              <span className={styles["label-char"]} style={{ "--index": 4 }}>
                a
              </span>
            </label>
          </div>

          <button
            className={styles["btnLogin"]}
            type="submit"
            onClick={() => log()}
          >
            Entrar
          </button>

          <h2>Esqueci a senha</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
