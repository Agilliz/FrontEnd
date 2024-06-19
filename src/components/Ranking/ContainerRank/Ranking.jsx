import React from 'react';
import RankItem from './RankItem';

const Ranking = ({ valores }) => {
  return (
    <div>
      {valores.map((item, index) => {
        const porcentagem = (item.porcentagemEntregas || item.porcentagemEntrega || 0).toFixed(1);
        return (
          <RankItem
            key={item.id}
            posicao={index + 1}
            nome={item.nomeZona}
            porcentagem={`${porcentagem}%`}
          />
        );
      })}
    </div>
  );
};

export default Ranking;
