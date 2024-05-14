import React from "react";
import DOMPurify from "dompurify";
import "../../utils/global.css";

const Etapa = ({ texto, etapa, svgNUmeroEtapa}) => {
  const textoLimpo = DOMPurify.sanitize(texto);
  return (
   <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    textAlign: "left",
    marginLeft: "27%",
    marginBottom: "5%"

    }}>
      <div style={{
        display: "flex"
        ,justifyContent:"left"
        ,alignItems:"center"
        ,width: "100%"
      }}>
        <div style={{width: "20%", display: "flex", justifyContent: "left"}}>
          <img src={svgNUmeroEtapa} />
        </div>
        <div>
          <h1 style={{width: "auto", fontSize: "2rem", fontWeight: "700", color: "#DE6600"}}>{etapa}</h1>
        </div>
      </div>
      <div style={{fontSize: "20px", fontWeight: "400"}} dangerouslySetInnerHTML={{ __html: textoLimpo }}>
      
      </div>
   </div>
  );
};

export default Etapa;
