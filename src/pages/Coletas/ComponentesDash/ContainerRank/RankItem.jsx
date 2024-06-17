import React from 'react';

const RankItem = ({ posicao, nome, porcentagem }) => {
  return (
    <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative h-full"> {/* Utilizamos classes do Tailwind CSS para estilizar o container */}
      <div className="h-90p overflow-hidden">
        <h3 style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{posicao}. {nome} - {porcentagem}</h3>
      </div>
    </div>
  );
};

export default RankItem;
