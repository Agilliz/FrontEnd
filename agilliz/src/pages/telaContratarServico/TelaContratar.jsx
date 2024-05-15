import React from "react";
import Input from "./input/Input";
import styles from "./TelaContratar.module.css";

function App(){
  return (
  
   
    <div className={styles.container}>
    <div className={styles.containerSVG}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
      </svg>
    </div>
    <div className={styles.titulo}>
      <h1>FORMULÁRIO</h1>
    </div>
    <div className={styles.SessaoInput}>
      <Input label="Nome Empresa" tamanho={50} placeholder={"Nome"}/>
      <Input label={"Nome Fantasia"} tamanho={50} placeholder={"Nome"}/>
    </div>
    <div className={styles.SessaoInput}>
      <Input label={"CNPJ"} tamanho={30} placeholder={"xx.xxx.xxx/xxxx-xx"}/>
      <Input label={"Telefone"} tamanho={30} placeholder={"(xx) xxxxx-xxxx"}/>
      <Input label={"E-mail"} tamanho={35} placeholder={"xxxx@xxx.xxx"}/>
    </div>
    <div className={styles.SessaoInput}>
      <Input label={"Endereço"} tamanho={35} placeholder={"Rua/Bairro"}/>
      <Input label={"Número"} tamanho={20} placeholder={"xxx"}/>
      <Input label={"CEP"} tamanho={20} placeholder={"xxxxx-xxx"}/>
      <div style={{width: "25%"}}></div>
    </div>
    <div className={styles.sessaoBotao}>
      <button>Enviar</button>
    </div>
  </div>

);
}
 

 



export default App;

