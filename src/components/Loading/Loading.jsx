import React from 'react';
import 'css-doodle';
import logo from "../../images/file.png";

const CssDoodleComponent = () => {
  return (
    <div style={{ height: '100vh', display: 'grid', placeContent: 'center', position: 'relative', opacity: "1" }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: "999", opacity: "0.95"}}>
        <img src={logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '20px' }} />
      </div>
      <css-doodle>
        {`
          :doodle {
            @grid: 20 / 60vmin;
            border-radius: 50%; /* Aplicando border-radius ao css-doodle */
          }

          background: #2C2D5B;
          scale: 0;
          opacity: 0;
          animation: m 4s linear infinite;
          
          animation-delay: calc(
            -1s/@I * @i * @sin(@i)
          );

          @keyframes m {
            0%, 50%, 90% { scale: 1; opacity: 1 }
            25%, 75%, 100% { scale: 0; opacity: 0 }
          }
        `}
      </css-doodle>
    </div>
  );
};

export default CssDoodleComponent;
