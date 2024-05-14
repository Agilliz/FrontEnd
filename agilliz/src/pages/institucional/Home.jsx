import "../../utils/global.css";
import Container from "../../components/container/Container";
import Navegacao from "../../components/navegacao/Navegacao";
import ImagemModo from "../../components/etapaModoOperacao/imagemModo/ImagemModo";
import fotoPC from "../../images/monitor.png";
import fotoCaminhao from "../../images/caminhao.svg";
import numero1ModOperacoes from "../../images/svgNumero1Mod.svg";
import segundaImagemModo from "../../images/segunda-imagem-modo.svg";
import vetorSeta1 from "../../images/vetor-seta-1.svg";
import vetorSeta2 from "../../images/vetor-seta-2.svg";
// import maoCelular from "../../images/maeMadeira.svg"
import mao from "../../images/maoViti.png"
import Etapa from "../../components/etapaModoOperacao/EtapaModoOperacao";
import numero3ModOperacoes from "../../images/svgNumero3Mod.svg";
import rapazMoto from "../../images/rapazMoto.svg"; 
import numero2ModOperacoes from "../../images/svgNumero2Mod.svg";
import mocaMoto from "../../images/mocaNaMoto.svg";
import caminhaoBeneficios from "../../images/svgCaminhaoBeneficios.svg";
import ContainerBeneficios from "../../components/containerBeneficios/containerBeneficios";
import casaBeneficios from "../../images/casaBeneficios.svg";
import localBeneficios from "../../images/localBeneficios.svg";
import { Fade } from "react-awesome-reveal";
import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import styles from "../institucional/Home.module.css"

function Institucional() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    
    <div className="App">
      <div className="h-screen">
        <div className="flex">
          <div className="w-full flex items-center justify-around">
            <Navegacao />
          </div>

          <div className="w-full flex items-center justify-center background">
            <Container
              altura={"83vh"}
              largura={70}
              ladoEsquerdo={
                <>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "auto",
                      fontSize: "40px",
                      marginBottom: "3%",
                    }}
                  >
                    <h1>
                      O <b><span style={{ color: "#DE6600", fontWeight: "500" }}>Poder</span></b> da
                      logística na palma da
                    </h1>
                    <h1>
                      sua <b><span style={{ color: "#DE6600", fontWeight: "500"  }}>Mão </span></b> e ao
                      dispor da sua
                    </h1>
                    <h1>
                      <b><span style={{ color: "#DE6600", fontWeight: "500" }}>Empresa</span></b>
                    </h1>
                    <button
                      style={{
                        width: "40%",
                        height: "50px",
                        backgroundColor: "#DE6600",
                        borderRadius: "10px",
                        fontSize: "16px",
                        marginTop: "2%",
                        color: "white",
                      }}
                    >
                      Contratar Serviço
                    </button>
                  </div>
                </>
              }
              ladoDireito={
                <div
                
              >
              
                <img src={mao} alt="Mão segurando celular com logo da empresa (Lebre laranja)" className={styles.MaoCelular} style={{
                  
                  maxWidth: "40vw",
                  
                }}/>
                </div>
              }
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <Container
            altura={"4vh"}
            corFundo={"#F4F6F9"}
            />
            <Container
              tituloSessao={
                <div>
                  <h1
                    style={{
                      fontSize: "32px",
                      textAlign: "center",
                      backgroundColor: "#F4F6F9",
                      fontWeight: "600",
                    }}
                  >
                    <b>
                    <span
                      style={{
                        borderBottom: "4px solid #DE6600",
                        borderRadius: "3px",
                        fontWeight: "700"
                      }}
                    >
                      SOBRE
                    </span>
                    </b>
                    {" "}
                    NÓS
                  </h1>
                </div>
              }
              altura={"60vh"}
              corFundo={"#F4F6F9"}
              largura={45}
              ladoEsquerdo={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={fotoPC}
                    alt="foto de computador com a aplicação"
                    style={{ maxWidth: "80%", maxHeight: "100%" }}
                  />
                </div>
              }
              ladoDireito={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "right",
                      fontSize: "24px",
                    }}
                  >
                    <h1>
                      A <span style={{ color: "#DE6600" }}>Agil Logistics</span>{" "}
                      foi criada com o propósito de
                    </h1>
                    <h1> aprimorar a logística empresarial por meio de </h1>
                    <h1>
                      tecnologias integradas. Com soluções personalizadas,{" "}
                    </h1>
                    <h1>
                      que combinam software avançado, análise de dados{" "}
                    </h1>
                    <h1>
                      {" "}
                      e automação de processos, ajudamos os clientes a{" "}
                    </h1>
                    <h1>
                      otimizar suas operações, reduzir custos e melhorar a{" "}
                    </h1>
                    <h1>eficiência.</h1>
                  </div>
                </div>
              }
            />
          </div>
              <Container altura={"1vh"} corFundo={"#F4F6F9"} />
          <div
            className="w-full flex items-center justify-center"
            style={{ position: "relative" }}
          >
            <div
              style={{
                width: "50%",
                position: "absolute",
                transform: "translate(70%, 330%)",
                zIndex: 1,
              }}
            >
              <img
                src={vetorSeta1}
                style={{ width: "57%", zIndex: "-10" }}
              ></img>
            </div>

            <div
              style={{
                width: "49%",
                position: "absolute",
                transform: "translate(69.5%, 590%)",
                zIndex: 1,
              }}
            >
              <img
                src={vetorSeta2}
                style={{ width: "60%", zIndex: "-10" }}
              ></img>
            </div>

            <Container
              tituloSessao={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "60%",
                    }}
                  >
                    <img
                      src={fotoCaminhao}
                      alt="Decoração com imagem simples de caminhão"
                      style={{ maxWidth: "20%", maxHeight: "20%" }}
                    ></img>
                    <div
                      style={{
                        fontSize: "32px",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      <h1>
                        <span
                          style={{
                            borderBottom: "4px solid #DE6600",
                            borderRadius: "3px",
                            fontWeight: "700"
                          }}
                        >
                          MODO
                        </span>
                        <span> DE OPERAÇÃO </span>
                      </h1>
                    </div>
                  </div>
                </div>
              }
              largura={50}
              
              ladoEsquerdo={
                
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    width: "100%"
                  }}
                >
            <Fade cascade duration={1000}>
                  <Etapa
                    texto={`<span>Com nosso aplicativo móvel, o</span>
                 <span>coletor pode escanear facilmente</span>
                 <span>todos os pacotes do fornecedor</span>
                 <span>de forma rápida e prática. </span>`}
                    svgNUmeroEtapa={numero1ModOperacoes}
                    etapa={"Coleta"}
                  />
                  </Fade>

                  
              <Fade cascade duration={1000}>
                    <ImagemModo
                      srcParam={segundaImagemModo}
                      altParam={
                        "Imagem de moça carregando pacotes com celular na mão"
                      }
                      size={20}
                    />
                    </Fade>
                <Fade cascade duration={1000}>
                    <Etapa
                      texto={`<span>Os entregadores selecionam as</span>
                        <span>rotas de entrega de sua preferência</span>
                        <span>e automaticamente gera uma rota </span>
                        <span>otimziada. Assim que a rota é</span>
                        <span>definida, o cliente consumidor é</span>
                        <span>prontamente notificado de que seu</span>
                        <span>pedido está a caminho.</span>`}
                      svgNUmeroEtapa={numero3ModOperacoes}
                      etapa={"Entregas"}
                      margem={"10%"}
                    />
                    </Fade>
                  
                </div>
              }
              ladoDireito={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginBottom: "10%",
                    width: "100%"
                  }}
                >
            <Fade cascade duration={1000}>
                  <ImagemModo
                    srcParam={rapazMoto}
                    altParam={"Rapaz andando de moto com rotas ao fundo"}
                   size={30}
                  />
                  </Fade>
            <Fade cascade duration={1000}>
                  <Etapa
                    texto={`<span>Após a coleta, os pacotes serão</span>
                        <span>prontamente reconhecidos em</span>
                        <span>nosso sistema, permitindo a criação</span>
                        <span>de zonas de entrega personalizadas</span>
                        <span>com base nas demandas específicas</span>
                        <span>atendidas pela sua empresa. Isso</span>
                        <span>otimiza o processo de distribuição.</span>`}
                    svgNUmeroEtapa={numero2ModOperacoes}
                    etapa={"Gestão e Preparo"}
                  />
                  </Fade>
            <Fade cascade duration={1000}>
                  <ImagemModo
                    srcParam={mocaMoto}
                    altParam={
                      "Moça apoiada em uma moto com uma imagem de rota ao fundo"
                    }
                    size={25}
                    
                  />
                  </Fade>
                </div>
              }
            />

              <Fade>
            <Container
              altura={"80vh"}
              corFundo={"#F4F6F9"}
              largura={100}
              ladoEsquerdo={
                <>
                  <div
                    style={{
                      display: "flex",
                      width: "90%",
                      height: "85%",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "top",
                          width: "80%",
                          height: "auto",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "32px",
                            textAlign: "center",
                            fontWeight: "400",
                          }}
                        >
                          <h1>
                            <span
                              style={{
                                borderBottom: "4px solid #DE6600",
                                borderRadius: "3px",
                              }}
                            >
                              <b>Benefícios</b>
                            </span>
                            <span> e vantagens </span>
                          </h1>
                        </div>
                        <img
                          src={fotoCaminhao}
                          alt="Decoração com imagem simples de caminhão"
                          style={{
                            maxWidth: "15%",
                            maxHeight: "15%",
                            zIndex: "1",
                          }}
                        ></img>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "93%",
                        height: "85%",
                        alignItems: "flex-start",
                      }}
                    >
                      <ContainerBeneficios
                        texto={`<span>Com a nossa solução, oferecemos </span>
               <span>recursos avançados de rastreamento</span>
               <span>em tempo real que permitem que</span>
               <span>você acompanhe o status e a </span>
               <span>localização das coletas de forma </span>
               <span>eficiente. Utilizando tecnologias</span>
               <span>avançadas, como GPS e sistemas de</span>
               <span>comunicação integrados, fornecemos</span>
               <span>informações precisas e atualizadas.</span>`}
                        titulo={"Coletas"}
                        svg={caminhaoBeneficios}
                      />

                      <ContainerBeneficios
                        texto={`
                  <span>Com nossa aplicação, simplificamos e</span>
                  <span>otimizamos todo o processo de </span>
                  <span>gestão e preparo de pacotes.</span>
                  <span>Integramos um sistema de </span>
                  <span>gerenciamento de estoque e </span>
                  <span>classificação automatizada,</span>
                  <span>permitindo uma organização eficiente</span>
                  <span>dos pacotes agilizando o processo de</span>
                  <span>preparação dos pacotes para o envio.</span>
                  `}
                        titulo={"Gestão e Preparo de Pacotes"}
                        svg={casaBeneficios}
                      />

                      <ContainerBeneficios
                        texto={`<span>Oferecemos recursos avançados</span>
                      <span>de roteirização e otimização</span>
                      <span>de rotas, permitindo que você</span>
                      <span>planeje entregas de forma</span>
                      <span>eficiente e minimize o tempo</span>
                      <span>de trânsito. Implementamos um</span>
                      <span>sistema de comunicação em</span>
                      <span>tempo real entre os entregadores</span>
                      <span>e a central de logística.</span>
                      `}
                        titulo={"Entregas"}
                        svg={localBeneficios}
                      />
                    </div>
                  </div>
                </>
              }
            />
            </Fade>

            <Container
              altura={"34vh"}
              corFundo={"#F4F6F9"}
              largura={100}
              ladoEsquerdo={
                <div
                  style={{
                    display: "flex",
                    width: "87%",
                    height: "100%",
                    justifyContent: "right",
                  }}
                >
                  <button
                    style={{
                      width: "18%",
                      backgroundColor: "#DE6600",
                      height: "22%",
                      borderRadius: "10px",
                      color: "white",
                      fontWeight: "500",
                      marginTop: "10%",
                    }}
                  >
                    Contratar Serviço
                  </button>
                </div>
              }
            />
            <Container
            altura={"4vh"}
            />
            <Container
              altura={"88vh"}
              largura={100}
              tituloSessao={
                <div >
                  <h1
                    style={{
                      fontSize: "32px",
                      textAlign: "center",
                      fontWeight: "600",
                      
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "4px solid #DE6600",
                        borderRadius: "3px",
                        fontWeight: "700"
                      }}
                    >
                      Envie -
                    </span>{" "}
                    nos um e-mail
                  </h1>
                </div>
              }
              ladoEsquerdo={
                <div className="w-full flex items-center justify-center">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "45vw",
                      height: "55vh",
                      backgroundColor: "#2C2D5B",
                      borderRadius: "10px",
                      flexDirection: "column",
                      position: "relative",
                      marginBottom: "%"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: "8%",
                      }}
                    >
                      <h1
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "1.3rem",
                        }}
                      >
                        Tire suas dúvidas!
                      </h1>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: "4%",
                      }}
                    >
                      <input
                        id="idEmail"
                        style={{
                          width: "90%",
                          height: "50px",
                          borderRadius: "10px",
                          border: "none",
                          padding: "10px",
                          fontSize: "20px",
                        }}
                        placeholder="Seu e-mail"
                      ></input>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <textarea
                        id="textAreaMensagem"
                        style={{
                          width: "90%",
                          height: "180px",
                          borderRadius: "10px",
                          border: "none",
                          padding: "10px",
                          fontSize: "20px",
                        }}
                        placeholder="Sua mensagem"
                      ></textarea>
                      <button
                        style={{
                          position: "absolute",
                          top: "75%",
                          left: "75%",
                          zIndex: "1",
                          width: "18%",
                          backgroundColor: "#DE6600",
                          height: "10%",
                          borderRadius: "10px",
                          color: "white",
                          fontWeight: "500",
                          marginTop: "2%",
                        }}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              }
            />

              <Footer/>
           
          </div>
        </div>
      </div>
    </div>
  );

}





export default Institucional;
