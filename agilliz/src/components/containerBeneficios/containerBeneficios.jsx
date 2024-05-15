import React from "react";
import DOMPurify from 'dompurify';

const ContainerBeneficios = ({ texto, svg, titulo, id }) => {
    const textoLimpo = DOMPurify.sanitize(texto);
  return (
 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "35%",
            height: "auto",
        }}
        id={id}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <img
            src={svg}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "90%",
          }}
        >
          <h2
            style={{
              fontSize: "27px",
              textAlign: "center",
              fontWeight: "600",
              color: "#2C2D5B",
            }}
          >
            {titulo}
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            width: "90%",
            fontSize: "20px",
            marginTop: "20px",
          }}
          dangerouslySetInnerHTML={{ __html: textoLimpo }}
        >
          
        </div>
      </div>
    
  );
};

export default ContainerBeneficios;
