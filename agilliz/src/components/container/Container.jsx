import React from 'react';


const Container = ({corFundo, largura, altura, ladoEsquerdo, ladoDireito, tituloSessao, id}) => {
    return (
        <div id={id} className="w-full flex items-center justify-center" style={{ height: `${altura}`}}>
            <h1>{tituloSessao}</h1>
            <div style={{ backgroundColor: `${corFundo}`, display: 'flex', width: '100%', height: '100%', flexDirection: 'row' }}>
                <div style={{ width: `${largura}%`,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ladoEsquerdo}</div>
                <div style={{ width: `${100 - largura}%`,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ladoDireito}</div>
            </div>
        </div>
    );
};



export default Container;